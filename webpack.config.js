// Node Modules
var UglifyJsPlugin = require( 'uglifyjs-webpack-plugin' );
var path = require( 'path' );

var config = {
    mode: process.env.NODE_ENV,
    entry: './src/router/index.js',
    module: {
        rules: [
            {
                test: [ /\.jsx*$/ ],
                use: { loader: 'babel-loader' },
                exclude: /node_modules/
            }
        ]
    }
};

if ( process.env.NODE_ENV === 'development' ) {
    config.devtool = 'inline-source-map';
}

if ( process.env.NODE_ENV === 'porduction' ) {
    config.plugins = [
        new UglifyJsPlugin()
    ];
}

module.exports = config;