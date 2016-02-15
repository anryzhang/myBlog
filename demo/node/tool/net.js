/**
 * Created by ziyu on 2016/2/14.
 */
var net = require('net');

var server = net.createServer(function(connection){
    console.log('客户端连接');
    connection.on('end',function(){
        console.log('客户端关闭连接');
    });
    connection.write('hello world!');
    connection.pipe(connection);
});

server.listen(8080,function(){
    console.log('server is listening');
});