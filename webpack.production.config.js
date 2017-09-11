var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var hotMiddlewareScript = 'webpack-hot-middleware/client?reload=true';
let entry_config = require('./entry_config');
let isDev = process.env.NODE_ENV == 'dev';
console.log(isDev);
var productionConfig = [{
    entry:entry_config(hotMiddlewareScript,isDev),
    output: {
        filename: './[name].build.js',
        path: path.resolve(__dirname, './public'),
        publicPath: '/'
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            use: 'url-loader?limit=8192&context=client&name=[path][name].[ext]'
        }, {
            test: /\.(css|scss)$/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader', 'resolve-url-loader', 'sass-loader?sourceMap']
            })
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
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['public']),
        new ExtractTextPlugin({
            filename: './[name].build.css',
            allChunks: true
        })
    ]
}];

module.exports = productionConfig;
