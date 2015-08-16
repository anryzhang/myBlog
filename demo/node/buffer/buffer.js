/**
 * Created by Think-ziyu on 2015/8/12.
 */
var str = 'hello';

//字符串转变二进制数据
var bin = new Buffer(str, 'utf-8');

console.log(bin);

var arrBin = [];
for(var i = 0; i < bin.length; i++){
	arrBin.push(bin[i]);
}

console.log(arrBin);

console.log(arrBin[0])

//二进制转字符串
var _str = bin.toString('utf-8');

console.log(_str);


