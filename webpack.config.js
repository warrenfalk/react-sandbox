"use strict";
var path = require('path');
var argv = require('minimist')(process.argv.slice(2));

var config = {
    entry: ['./client.jsx'],
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: '/build/',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json-loader' },
            { test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx-loader?harmony' },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader?browsers=last 2 versions!less-loader' },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
        ],
    },
    resolve: {
        extensions: ["", ".js", ".jsx"],
        fallback: path.join(__dirname, "node_modules"),
        alias: {
            "react": path.join(__dirname, "node_modules", "react"),
            "react-dom": path.join(__dirname, "node_modules", "react-dom"),
        },
    },
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules"),
    },
    devtool: "eval",
};

var testsubject = argv.testsubject || process.env.TESTSUBJECT;

if (testsubject) {
    config.resolve.alias.testsubject = path.join(__dirname, testsubject);
}
else {
    /* eslint no-console: 0 */
    console.error("ERROR: No test subject specified, specify test subject with TESTSUBJECT env var or command line args: e.g. npm start -- --testsubject path/to/testsubject/component");
}

module.exports = config;
