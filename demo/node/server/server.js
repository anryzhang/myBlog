/**
 * Created by Think-ziyu on 2015/8/16.
 */
var http = require('http');
http.createServer(function(req,resp){
	resp.writeHead(200,{'Content-Type':'text/plain'});
	resp.end('hello world\n');
}).listen(8989);

console.log('http://127.0.0.1:8989');

var sys = require('sys');
console.log(sys);