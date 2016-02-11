/**
 * Created by Think-ziyu on 2015/8/12.
 */
//加载和使用一个JSON文件。
var rs = require('./node_01.json');

//导出了一个公有方法。
exports.alertJson = function(){
	var data = rs;
	console.log(data);
}


var i = 0;
function count(){
	return ++i;
}
exports.count = count;

//通过module对象可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。例如模块导出对象默认是一个普通对象，如果想改成一个函数的话，可以使用以下方式。
module.rs1 = function(){
	console.log('test');
}