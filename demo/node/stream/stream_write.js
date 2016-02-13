/**
 * Created by ziyu on 2016/2/13.
 */
var fs = require('fs');
var data = 'www.diy1818.com<div>test</div>';

//创建一个可以写入的流，写入到文件output.txt中
var writerStream = fs.createWriteStream('./output.txt');
//使用utf8编码写入数据
writerStream.write(data,'utf8');
//标记文件末尾
writerStream.end();

//处理事件流
writerStream.on('finish',function(){
    console.log('写入完成');
});
writerStream.on('error',function(){
    console.log(err.stack);
});
console.log('程序执行完成');