var webpack = require('webpack');
var path = require('path');

var publicPath = 'http://localhost:3000/';
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
let entry_config = require('./entry_config');
let isDev = process.env.NODE_ENV == 'dev';
console.log(isDev);
var devConfig = {
    entry:entry_config(hotMiddlewareScript,isDev),
    output: {
        filename: './[name].build.js',
        path: path.resolve(__dirname, './public'),
        publicPath: publicPath
    },
    devtool: 'eval-source-map',
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.(css|scss)$/,
            use: [
                'style-loader',
                'css-loader?sourceMap',
                'resolve-url-loader',
                'sass-loader?sourceMap'
            ]
        },{
            test: /\.js$/,
            exclude: '/node_modules/',
            use: [
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015'],
                    },
                },
            ]
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ]
};

module.exports = devConfig;
