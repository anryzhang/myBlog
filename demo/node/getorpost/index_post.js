/**
 * Created by ziyu on 2016/2/14.
 */
var http = require('http');
var util = require('util');
var querystring = require('querystring');

//POST请求的内容全部的都在请求体中，http.ServerRequest并没有一个属性内容为请求体，原因是等待请求体传输可能是一件耗时的工作。
//比如上传文件，而很多时候我们可能并不需要理会请求体的内容，恶意的POST请求会大大消耗服务器的资源，所有node.js默认是不会解析请求体的， 当你需要的时候，需要手动来做。

http.createServer(function(request,response){
    //定义了一个post变量，用于暂存请求体的信息

    var post = '';

    //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中

    request.on('data',function(chunk){
        post += chunk;
    });



    //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
    request.on('end',function(){
        post  = querystring.parse(post);
        response.end(util.inspect(post));
    });

    //response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});

    //response.write(util.inspect(url.parse(request.url,true)));
    //response.end();
}).listen(8888);

console.log('http://localhost:8888');