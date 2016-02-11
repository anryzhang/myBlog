'use strict';

/**
 * Created by anry on 2016/2/9.
 */
var a = {
    a1: 1,
    a2: 2
};
var c = a;
//object.is() 比较两个对象是否相等。
var b = Object.is(a, c);
console.log(b);
c.a3 = 3;
var d = { a1: 2 };

Object.assign(d, a, c);
console.log(d);

//增强对象的写法
var birth = function birth() {
    var t = new Date();

    return t.getFullYear() + '-' + (t.getMonth() + 1) + '-' + t.getDate();
};
var person = {
    name: '张三',
    birth: birth,
    hello: function hello() {
        console.log('我的名字叫', this.name);
    },
    setName: function setName(str) {
        this.name = str;
    }
};
console.log(person);