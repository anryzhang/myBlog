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

console.log("=============================");

var buf = new Buffer(256);

len = buf.write('\u00bd + \u00bc = \u00be', 0);
console.log(len + 'bytes:'  + buf.toString('utf8',0,len));

console.log("=========将一个ascII字符串复制进buffer,每次一个字节====================");
var strT = 'node.js';
var bufT = new Buffer(strT.length);
var j ;
for(var i = 0; i < strT.length;i++){
	bufT[i] = strT.charCodeAt(i);
}
console.log(bufT);

console.log("=============在两个buffer之间执行内存拷贝=============");
var buf1 = new Buffer(26);
var buf2 = new Buffer(26);
var i;
 for(var i = 0; i < 26; i++){
	 buf1[i] = i + 97;
	 buf2[i] = 33;
 }
buf1.copy(buf2,8,16,20);
console.log(buf2.toString('ascii',0,25));



