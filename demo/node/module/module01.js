/**
 * Created by ziyu on 2016/2/13.
 */

var hello = require('./m01.js');

hello.world();

console.log(hello);

hello.myModule.init();
var num = hello.myModule.addNum();

console.log(num);

var Hello = require('./m02.js');
console.log(Hello);
var h = new Hello();
h.setName('test');
h.sayHello();

