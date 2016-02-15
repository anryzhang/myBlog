/**
 * Created by ziyu on 2016/2/15.
 */
var express = require('express');
var app = express();

app.use(express.static('build'));

app.get('/',function(request,response){
    response.send('hello word' + '<img src="' + '/logo.png' +'">');
});

var server = app.listen(8080,function(){
    var host = server.address().host;
    var port = server.address().port;
    console.log('应用实例：http:%s:%s',host,port);
});
