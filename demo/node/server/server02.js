/**
 * Created by ziyu on 2016/2/13.
 */
var http = require('http');
var fs = require('fs');
//非阻塞调用

http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    response.write('<h1>test</h1>');
    fs.readFile('./input.txt',function(err,data){
        if(err){
            return console.error(err);
        }
        response.write(data.toString());
    })
}).listen(8888);
console.log('http://127.0.0.1:8888');