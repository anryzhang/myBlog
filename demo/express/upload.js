/**
 * Created by ziyu on 2016/2/15.
 */
var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');
var multer = require('multer');

app.use(bodyParser.urlencoded({extended:false}));
app.use(multer({dest:'/tmp/'}).array('image'));

app.get('/index_upload.html',function(req,res){
    res.sendFile(__dirname + '/index_upload.html');
});

app.post('/file_upload',function(req,res){
    console.log(req.files[0]);

    var des_file = __dirname + '/' + req.files[0].originalname;

    fs.readFile(req.files[0].path,function(err,data){
        console.log(data);
        fs.writeFile(des_file, data,function(err){
            if(err){
                console.log(err);
            }else{
                var response = {
                    message:'file uploaded success',
                    filename:req.files[0].originalname
                };
            }
            console.log(response);
            res.end(JSON.stringify(response));
        });
    });

});

var server = app.listen(8080,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('http://%s:%s',host,port);
});