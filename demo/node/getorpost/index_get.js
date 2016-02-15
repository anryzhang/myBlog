/**
 * Created by ziyu on 2016/2/14.
 */

var fs = require('fs');
var http = require('http');
var util = require('util');
var url = require('url');
//由于GET请求直接被嵌入在路径中，URL是完整的请求路径，包括了?后面的部分，因此你可以手动解析后面的内容作为GET请求的参数。
//node.js中url模块中的parse函数提供了这个功能。
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write(util.inspect(url.parse(request.url,true)));
    response.end();
}).listen(8888);

console.log('http://localhost:8888');
console.log('http://localhost:8888/tem/index.html?t=1s&t2=ss&t3=wew');