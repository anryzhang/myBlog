/**
 * Created by ziyu on 2016/2/13.
 */
var http = require('http');
var url = require('url');


function start(route){
    function onRequest(request,response){
        var pathName = url.parse(request.url).pathname;
        console.log('request for ' + pathName + ' received');
        //route(pathName);

        response.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        response.write('<h1>test route</h1>');
        response.write('<a style="margin-right:20px" href="/">index</a>');
        response.write('<a href="/about">about</a>')
        if(pathName == '/'){
            response.write('<h1>index page</h1>');
        }else if(pathName == '/about'){
            response.write('<h1>about page</h1>')
        }
        response.end();

    }
    http.createServer(onRequest).listen(8888);
    console.log('server has started');
}

exports.start = start;