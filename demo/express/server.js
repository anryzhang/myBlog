/**
 * Created by ziyu on 2016/2/15.
 */
var express = require('express');
var app = express();

//app.use(express.static('build'));

app.get('/index.html',function(request,response){
    response.sendFile(__dirname + '/index.html');
});

app.get('/process_get',function(request,response){
    var responses = {
        first_name:request.query.first_name,
        last_name:request.query.last_name
    };
    console.log(responses);
    response.end(JSON.stringify(responses));
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('http://%s:%s',host,port);
})