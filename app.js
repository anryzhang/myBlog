/**
 * Created by ziyu on 2017/9/6.
 */
"use strict";

const express = require('express');
// const staticDir = require('express-static');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const cookieSession = require('cookie-session');
const consolidate = require('consolidate');


const app = express();
app.use(express.static(__dirname + '/static'));
app.use(express.static(__dirname + '/dist'));

(function () {


    let webpack = require('webpack');

    let webpackConfig = require('./webpack.config');
    let compiler = webpack(webpackConfig);
    // console.log(compiler);
    app.use(require('webpack-dev-middleware')(compiler,{
        noInfo: true, publicPath:webpackConfig.output.publicPath
    }));

    app.use(require('webpack-hot-middleware')(compiler,{
        log: console.log,
        path: '/__webpack_hmr',
        heartbeat:10*1000
    }));

})();


app.use(bodyParser.urlencoded({extended:false}));

// app.use(bodyParser.json());

let upload = multer({dest:'./static/uploads'});

app.use(upload.any());

app.use(cookieParser());

(function(){
    let keys = [];
    for(let i = 0;i < 10000;i++){
        keys[i] = 'a_' + Math.random();
    }
    app.use(cookieSession({
        name:'sess_id',
        keys:keys,
        maxAge: 20*60*1000
    }));

})();


app.engine('html',consolidate.ejs);
app.set('views','template');
app.set('view engine','ejs');




let index = require('./route/web/index');
app.use(['/','/index'],index());


app.get('/user/:id',function (req,res) {
    res.json({status:200,msg:'成功',id:req.params.id});
})

let admin = require('./route/admin/login');
app.use('/admin',admin);



app.listen(8090,function () {
    console.log('http://localhost:8090');
})
