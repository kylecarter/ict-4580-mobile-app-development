'use strict'

// Node Modules
import { matchPath } from 'react-router-dom'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import underscore from 'underscore'
import slugify from 'slugify'
import React from 'react'

// Src > Router
import Routes from './index'
import ROUTES from './routes'

// Application > Services
import GetApi from '../server/get-api'

const _ = underscore;

export default ( req, res )=> {
  const MATCH = ROUTES.reduce( ( acc, route )=> matchPath( req.url, { path: route, exact: true } ) || acc, null );
  const DJANGO = req.protocol + '://' + process.env.DJANGO_HOST + ':' + process.env.DJANGO_PORT;
  let page = {
      description: "Welcome to the class project site for Kyle A. Carter.",
      classList: [],
      status: 200,
      title: null,
      api: null
  };

  if ( !MATCH ) page.status = 404;

  let api = null;
  switch( true ) {
    case MATCH && MATCH.url && MATCH.url === '/':
      page.title = 'ICT 4580 Mobile Application Development with Web Standards (online) | Spring 2018';
      page.classList = [ 'front' ];
      break;
    default:
      page.classList = [ 'four-oh-four' ];
      page.title = "Page Not Found";
      break;
  }

  return GetApi.handler( req, res, api ).then( resp => {
    const PROPS = _.extend( {}, resp.data );
    let context = {};

    page.props = PROPS;
    page.content = ReactDOMServer.renderToString(
      <StaticRouter context={ context } location={ req.url }>
        <Routes { ...PROPS } />
      </StaticRouter>
    );

    return page;
  }).catch( err => {
    console.log( err );
    page.status = 503;
    page.title = '503, internal server error' ;
    page.content = 'We are having trouble processing your request. Please try again later.';
  });

}