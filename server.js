'use strict'

// Node Core
import path from 'path'
import http from 'http'

// Node Modules
import cors from 'cors'
import express from 'express'
import webpack from 'webpack'
import httpProxy from 'http-proxy'
import session from 'client-sessions'
import cookieParser from 'cookie-parser'

// Src > Router
import callback from './src/router/callback'

// Webpack Config
import webpackConfig from './webpack.config'

// Src > Server
import toArray from './src/server/to-array'

const PORT = process.env.PORT || 3000;
// const WEBPACK_PORT = process.env.WEBPACK_PORT || 3001;
// const WEBPACK_HOST = process.env.WEBPACK_HOST || '127.0.0.1';
const ASSETS = express.static( path.join( __dirname, '/backend/static/' ) );
const PROXY = httpProxy.createProxyServer({
  target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT,
  ws: true
});

const APP = express();

APP.use( cors() );
APP.use( ASSETS );
APP.use( cookieParser() );

APP.use(session({
  cookieName: 'session',
  secret: 'ict4508websiteict4508',
  duration: 30 * 60 * 1000,
  activeDuration: 1000 * 60 * 5
}));

if ( process.env.NODE_ENV === 'development' ) {
    const webpackDevMiddleware = require( 'webpack-dev-middleware' );
    const webpackHotMiddleware = require( 'webpack-hot-middleware' );
    const COMPILER = webpack( webpackConfig );

    const SERVER_OPTIONS = {
        writeToDisk: true,
        serverSideRender: true,
        stats: { colors: true },
        publicPath: webpackConfig.output.publicPath,
        headers: { 'Access-Control-Allow-Origin': '*' },
    };

    APP.use( webpackDevMiddleware( COMPILER, SERVER_OPTIONS ) );
    APP.use( webpackHotMiddleware( COMPILER ) );
}

// Proxy admin
APP.enable('trust proxy');
APP.use('/admin', ( req, res ) => {
  PROXY.web(req, res, {target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT + '/admin'});
});

// Django Static Files
APP.use('/static', ( req, res ) => {
  PROXY.web(req, res, {target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT + '/static'});
});

// Django APIs
APP.use('/api', ( req, res ) => {
  PROXY.web(req, res, {target: 'http://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT + '/api/v1'});
});

PROXY.on('error', (error, req, res) => {
    if ( error.code !== 'ECONNRESET' ) {
        console.error( 'proxy error', error );
    }

    if ( !res.headersSent ) {
        res.writeHead( 500, { 'content-type': 'application/json' } );
    }

    const json = { error: 'proxy_error', reason: error.message };
    res.end( JSON.stringify( json ) );
});

// All other routes
APP.get( '*', ( req, res )=> {
    let css = '', js = '';

    if ( process.env.NODE_ENV === 'development' ) {
        const assetsByChunkName = res.locals.webpackStats.toJson().assetsByChunkName;
        css = toArray( assetsByChunkName.main ).filter( path => path.endsWith( '.css' ) ).map( path => `<link rel="stylesheet" href="/css/${path}" />` ).join( '\n' );
        js = toArray( assetsByChunkName.main ).filter( path => path.endsWith( '.js' ) ).map( path => `<script src="/js/${path}"></script>` ).join( '\n' );
    }

    return callback( req, res ).then( PAGE => {
        return res.status( PAGE.status ).send(`<!DOCTYPE html><html class="no-js" lang="en">
            <head>
              <meta charSet="UTF-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <meta http-equiv="X-UA-Compatible" content="ie=edge" />
              <meta name="description" content="${ PAGE.description }" />
              <title>${ PAGE.title ? PAGE.title + ' | Kyle A. Carter' : 'Kyle A. Carter' }</title>
              <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
              <link href="https://fonts.googleapis.com/css?family=Roboto+Slab" rel="stylesheet" />
              <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
              ${css}
              <link href="/css/stylesheet.css" rel="stylesheet" />
            </head>
            <body class="${ PAGE.classList.join( ' ' ) }">
              ${ PAGE.content }
              <script>
                window.__APP_INITIAL_STATE__ = ${ JSON.stringify( PAGE.props ).replace( /</g, '\\u003c' ) };
                document.documentElement.className = document.documentElement.className.replace( 'no-js', 'js' );
              </script>
              ${js}
            </body>
        </html>`);
    });

});

// Server
APP.listen( PORT );
if ( process.env.NODE_ENV === 'production' ) {
    console.log( 'Application is running.' );
} else {
    console.log(`Application is listening at port ${PORT}.`);
}