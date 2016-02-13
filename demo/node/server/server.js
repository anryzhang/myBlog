/**
 * Created by Think-ziyu on 2015/8/16.
 */
var http = require('http');
var fs = require('fs');
http.createServer(function(request,response){
    //发送HTTP头部
    //Http 状态值：200
    //内容类型：text/plain 设置为文本
    response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'});
    var data = fs.readFileSync('./input.txt');

    response.write('<h1>hello world</h1>');
    response.write(data.toString());

    response.end('<h2>test</h2>');
}).listen(8888);

console.log('server running at http://127.0.0.1:8888');



//node server.js