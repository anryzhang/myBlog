/**
 * Created by ziyu on 2017/9/7.
 */
"use strict";
const path = require('path');
const webpack = require('webpack');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const common = {
    src: __dirname + '/src/',
    dest: __dirname + '/dist'

};
const ISDEV = process.env.ISDEV?true:false;
// console.log(ISDEV);
let HotMiddleWareConfig ='webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000';
let extractCss = new ExtractTextPlugin('[name].build.css');

const config = {
    entry:  {
        admin_common:ISDEV?[
            HotMiddleWareConfig,
            common.src + 'common/admon_common.js'
        ]:[common.src + 'common/admon_common.js'],
        admin:ISDEV?[
            HotMiddleWareConfig,
            common.src + 'admin/js/common.js'
        ]:[common.src + 'admin/js/common.js']
    },
    output: {
        filename: './[name].build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: "/"
    },
    devtool: ISDEV ?'eval':false,
    module: {
        rules: [
            {
                test:/\.(png|jpg)$/,
                use:[{
                    loader: 'url-loader',
                    options:{
                        limit:8192
                    }
                }]
            },
            {
                test:/\.(css|scss)$/,
                use:ISDEV?[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'sass-loader'}
                ]:
                    extractCss.extract({
                        fallback:'style-loader',
                        use:['css-loader','sass-loader']
                    })
            },
            {
                test:/\.js$/,
                exclude:'/node_modules/',
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
    plugins: ISDEV?[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()

    ]:[
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        extractCss
    ]
};

// console.log(JSON.stringify(config,null,2));

module.exports = config;