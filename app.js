const express = require('express');
const path = require('path');
const consolidate = require('consolidate');

let isDev = process.env.NODE_ENV !== 'production';
let app = express();
let port = 3000;

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(bodyParser.urlencoded({extended:false}));


app.use(cookieParser());

(function () {
    let keys = [];
    for(let i = 0; i<10000; i++){
        keys[i]='a_' + Math.random();
    }
    app.use(cookieSession({
        name:'sess_id',
        keys:keys,
        maxAge: 20*60*1000
    }));
})();

app.engine('html', consolidate.ejs);
app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, './template'));


// 所有视图的本地变量
app.locals.env = process.env.NODE_ENV || 'dev';
app.locals.reload = true;


if (isDev) {

    let webpack = require('webpack'),
        webpackDevMiddleware = require('webpack-dev-middleware'),
        webpackHotMiddleware = require('webpack-hot-middleware'),
        webpackDevConfig = require('./webpack.config.js');

    let compiler = webpack(webpackDevConfig);

    app.use(webpackDevMiddleware(compiler, {

        // public path should be the same with webpack config
        publicPath: webpackDevConfig.output.publicPath,
        noInfo: true,
        stats: {
            colors: true
        }
    }));
    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.join(__dirname,'static')));

    require('./server/routes')(app);

    // add "reload" to express, see: https://www.npmjs.com/package/reload
    let reload = require('reload');
    let http = require('http');

    let server = http.createServer(app);
    reload(server, app);

    server.listen(port, function () {
        console.log('App (dev) is now running on port 3000!');
    });
} else {

    // static assets served by express.static() for production
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.static(path.join(__dirname,'static')));
    require('./server/routes')(app);
    app.listen(port, function () {
        console.log('App (production) is now running on port 3000!');
    });
}
