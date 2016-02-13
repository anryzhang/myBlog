/**
 * Created by ziyu on 2016/2/13.
 */
//截取文件
var fs = require('fs');
var buf = new Buffer(1024);
//语法
//以下为异步模式下截取文件的语法格式：
//fs.ftruncate(fd, len, callback)
//该方法使用了文件描述符来读取文件。
//参数
//参数使用说明如下：
//fd - 通过 fs.open() 方法返回的文件描述符。
//len - 文件内容截取的长度。
//callback - 回调函数，没有参数。
fs.open('./input.txt','r+',function(err,fd){
    if(err){
        return console.error(err);
    }
    console.log('打开文件成功');

    fs.ftruncate(fd,10,function(err){
        if(err){
            return console.error(err);
        }
        console.log('开始截取10个字节的内容 ');
        fs.read(fd,buf,0,buf.length,0,function(err,bytes){
            if(err){
                return console.error(err);
            }
            console.log('开始读取文件');
            if(bytes > 0){
                console.log(buf.slice(0,bytes).toString());

            }
        });
        fs.close(fd,function(err){
            if(err){
                return console.error(err);
            }
            console.log('文件关闭成功');
            console.log('准备删除文件');
            fs.unlink('./input.txt',function(err){
                if(err){
                    return console.error(err);
                }
                console.log('文件删除成功');
            });
        });
    });


});

