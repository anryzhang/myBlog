/**
 * Created by ziyu on 2016/2/5.
 */

function codePointLength(text){
    var result = text.match(/[\s\S]/gu);
    return result ? result.length:0;
}

var s = '测b试a';
console.log(s.length);
console.log(codePointLength(s));

console.log(s.startsWith('b'));
console.log(s.endsWith('a'));
//console.log(s.contains('b'));

var b = 'x';
console.log(b.repeat(3));

var name = 'bob',time = 'today';
var d = `hello ${name} , how are you ${time}`;
console.log(d);