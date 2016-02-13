/**
 * Created by ziyu on 2016/2/13.
 */
var fs = require('fs');

//创建目录
//语法
//以下为创建目录的语法格式：
//fs.mkdir(path[, mode], callback)
//参数
//参数使用说明如下：
//path - 文件路径。
//mode - 设置目录权限，默认为 0777。
//callback - 回调函数，没有参数。
//实例

console.log('创建目录 ./temp');

fs.mkdir('./temp',0777,function(err){
    if(err){
        return console.error(err);
    }
    console.log('目录创建成功');
});

//读取目录
//语法
//以下为读取目录的语法格式：
//fs.readdir(path, callback)
//参数
//参数使用说明如下：
//path - 文件路径。
//callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。
//实例

fs.readdir('./',function(err,files){
    if(err){
        console.error(err);
    }
    console.log(files.length,files);

    console.log('读取目录成功');

    files.forEach(function(file,index){
        console.log(index,file);
        if(file.indexOf('temp') > -1){
            console.log(file);
            console.log('准备删除' + file);
            fs.rmdir(file,function(err){
                if(err){
                    console.error(err);
                }

                fs.readdir('./',function(err,files){
                    if(err){
                        console.log(err);
                    }
                    console.log('读取删除操作后的目录');
                    files.forEach(function(file,index){
                        console.log(index,file);
                    })
                })

            })
        }
    })

});

//删除目录
//语法
//以下为删除目录的语法格式：
//fs.rmdir(path, callback)
//参数
//参数使用说明如下：
//path - 文件路径。
//callback - 回调函数，没有参数。
//实例


