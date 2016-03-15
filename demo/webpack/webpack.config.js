/**
 * Created by ziyu on 2016/2/10.
 */
var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    //entry:'./entry_config.js',
    entry:{
        entry_config:'./entry_config.js',
        entry:'./entry.js'
    },
    output:{
        //path:__dirname,
        path:'build',
        filename:'[name].js',// 模版基于上边 entry 的 key
        chunkFilename:'[id].js'
    },
    module:{
        loaders:[
            {
                //.css 文件使用 style-loader 和 css-loader 来处理
                test:/\.css$/,
                //loader:'style-loader!css-loader'
                loader:ExtractTextPlugin.extract('style-loader','css-loader')
            },
            //.js 文件使用 jsx-loader 来编译处理
            //{
            //    test: /\.js$/,
            //    loader: 'jsx-loader?harmony'
            //},
            {
                //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
                test:/\.scss$/,
                //loader:'style!css!sass?sourceMap'
                loader:ExtractTextPlugin.extract('style-loader','css-loader!sass-loader')
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    resolve:{
      root:'./',//绝对路径
        extensions:['','.js','.json','.scss'],//自动扩展名后缀名，在require模块时可以省略不写后缀名
        alias:{//后续直接require('jQuery')即可
            jQuery:'node_modules/jquery/dist/jquery.js'
        }
    },
    plugins:[
        new webpack.BannerPlugin('this file is created by ziyu'),
        new  ExtractTextPlugin('[name].css')
    ]
};