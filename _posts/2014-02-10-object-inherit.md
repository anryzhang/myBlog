---
layout: post
title: JavaScript-继承
description: JavaScript-继承
keywords: JavaScript-继承
---

<h2>__proto__属性</h2>
<div>
    <style type="text/css">
        .main-article pre{
            color: #008000;
            font-weight: bold;
        }

    </style>
</div>
<p>
    每个对象都 有一个内部属性__proto__,
    指向这个对象的原型对象,
    通过这个内部属性,可以从实例对象读取原型对象的属性.
</p>
<p>
    正常情况下,__proto__属性的指向与constructor.prototype属性是一致的.
</p>
<pre>
    Array.prototype.p = 'abc'
    var a = new Array();
    console.log(a.__proto__.p);//abc
    console.log(a.constructor.prototype.p); //abc
    //都是用来读取原型对象,__proto__更简洁
</pre>
<p>
    __proto__ 目前还不是标准,但我们有时可以用来帮助理解继承

</p>

<pre>
    var a = {x:1};
    var b = {__proto__:a};
    b.x
    //1

    //b对象本身并没有x属性,
    但是javascript引擎通过__proto__属性,
    找到它的原型对象a,
    然后读取a的x属性.

</pre>
<pre>
    //原型对象自己的__proto__属性,也可以指向其它对象,
    从而一级一级地形成"原型链"(prototype chain);

    var a = {x:1};
    var b = {__proto__:a}
    var c = {__proto__:b}

    c.x
    //1

    //空对象的__proto__属性，默认指向Object.prototype.

    var a = {};
    a.__proto__ === Object.prototype;
    //true

    //通过构造函数生成实例对象时，实例对象的__proto__属性
    自动指向构造函数的prototype对象。

    var f = function(){};
    var a = {};
    f.prototype = a;
    var o = new f();
    o.__proto__ === a;
    //true
</pre>

<h3>属性的继承</h3>
<p>
    属性的继承有两种，一种是对象自身的原生属性，
    另一种是继承自原型的继承属性。
</p>
<h4>对象的原生属性</h4>
<p>
    对象的本身的所有属性，
    可以用Object.getOwnPrototyNames方法获得。

</p>
<pre>
    Object.getOwnPropertyNames(Date);
//["length", "name", "arguments", "caller", "prototype", "UTC", "parse", "now"]
</pre>
<p>
    对象本身的属性中，有的是可以枚举的（enumberable），
    有的是不可以枚举的,只获取那些可以枚举的属性,可以使用
    Object.keys()方法
</p>
<pre>
    Object.keys(Date);
    // []

    //判断对象是否具有某个属性,使用hasOwnProperty方法
    Date.hasOwnProperty("length");
    //true

    Array.hasOwnProperty('length');
    //true
</pre>

<h4>对象的继承属性</h4>
<p>
    用Object.create方法创造的对象,会继承所有的原型对象的属性
</p>
<pre>
    var proto = {p1: 123};
    var o = Object.create(proto);

    o.p1; //123

    o.hasOwnProperty("p1");
    //false
    //o对象本身没有p1属性
</pre>
<h3>获取所有属性</h3>
<p>
    判断一个对象是否具有某个属性(不管是自身的还是继承的),可以使用in运算符.
</p>
<pre>
    'lenght' in Date;
    //true

    "toString" in Date;
    //true
</pre>
<p>
    获得对象的所有可枚举属性(不管是自身的还是继承的),可以使用
    for-in循环

</p>
<pre>
    var o1 = {p1:123};
    var o2 = Object.create(o1,{
        p2:{value: "abc", enumerable: true}
    });

    for(p in o2){console.log(p);}
    //p2
    //p1
</pre>
<p>
    为了在for...in 循环中获得对象自身的属性,可以采用hasOwnProperty方法判断一下.
</p>
<pre>
    for(var name in Object){
        if(Object.hasOwnProperty(name)){
            console.log(name);
        }
    }
</pre>
<p>
    获得对象的所有属性(不管是自身的还是继承的,以及是否可枚举),
    可以使用下面的函数.
</p>
<pre>
    function get_proper_name(obj){
        var props = {};
        while(obj){
            Object.getOwnPropertyNames(obj).forEach(function(p){
                props[p] = true;
            });
            obj = Object.getPrototypeOf(obj);
        }
        return Object.getOwnPropertyNames(props);
    }

    get_proper_name({a:1,b:2,c:3});

["a", "b", "c", "constructor", "toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "__defineGetter__", "__lookupGetter__", "__defineSetter__", "__lookupSetter__"]

    get_proper_name(Date);

["__lookupSetter__", "__lookupGetter__", "arguments", "valueOf", "prototype", "length", "propertyIsEnumerable", "hasOwnProperty", "toString", "constructor", "parse", "isPrototypeOf", "UTC", "bind", "__defineSetter__", "apply", "__defineGetter__", "toLocaleString", "caller", "call", "name", "now"]
</pre>


