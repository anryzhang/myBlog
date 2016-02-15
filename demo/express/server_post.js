/**
 * Created by ziyu on 2016/2/15.
 */
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//app.use(express.static('build'));
var urlencodedParser = bodyParser.urlencoded({extended:false});

app.get('/index.html',function(request,response){
    response.sendFile(__dirname + '/index.html');
});

app.post('/process_get',urlencodedParser,function(request,response){
    var responses = {
        first_name:request.body.first_name,
        last_name:request.body.last_name
    };
    console.log(responses);
    response.end(JSON.stringify(responses));
});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('http://%s:%s',host,port);
})