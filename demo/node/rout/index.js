/**
 * Created by ziyu on 2016/2/13.
 */
var server = require('./server.js');
var router = require('./router.js');
console.log(router.route)
server.start(router.route);

//__filename 表示当前正在执行的脚本主文件名，它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。如果在模块中，返回的值 是模块文件的路径


console.log(__filename);
console.log(__dirname);