/**
 * Created by ziyu on 2016/2/15.
 */

var express = require('express');
var app = express();

function nav(){
    var str = '<a href="/">首页</a><a href="/del_user" style="margin:0 20px">删除页面</a><a href="/list_user">用户列表</a><a href="/abcd" style="margin:0 20px">other</a><br>';
    return str;
}
// 主页输入 hello world
app.get('/',function(request,response){
    console.log('主页 get 请求');

    response.send(nav() + 'hello get');


});

//app.post('/',function(request,response){
//    console.log('主页 post 请求');
//    response.send(nav() + 'hello post');
//});

//del_user 页面响应
app.delete('/del_user',function(request,response){
    console.log('/del_user 响应 delete 请求');

    response.send(nav() + '删除页面');
});

// list_user 页面Get 请求

app.get('/list_user',function(request,response){
    console.log('/list_user Get 请求');

    response.send(nav() + '用户列表页面');
});

app.get('/ab*cd',function(request,response){
    console.log('/ab*cd get 请求');

    response.send(nav() + '正则匹配');
});

var server = app.listen(8081,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log('应用实例，问题地址为:http://%s:%s',host,port);
})
