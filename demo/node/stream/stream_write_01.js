/**
 * Created by ziyu on 2016/2/13.
 */


var fs = require('fs');


//管道流
//创建一个可读流
var readerStream = fs.createReadStream('./input.txt');
//创建一个可写流
var writeStream = fs.createWriteStream('./output.txt');

//管道读写操作
//读取input.txt 文件内容到output.txt中
readerStream.pipe(writeStream);
console.log('程序执行完成');

//链式流
var zlib  = require('zlib');

//压缩 input.txt 文件为input.txt.gz
fs.createReadStream('./input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('./input.txt.gz'));
console.log('链式流操作，文件压缩完成');

//解压input.text.gz 为input.txt
fs.createReadStream('./input.txt.gz')
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('./input2.txt'));
console.log('文件解压完成');