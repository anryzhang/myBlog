---
layout: post
title: JavaScript-继承
description: JavaScript-继承
keywords: JavaScript-继承
---

<h2>__proto__属性</h2>
<style type="text/css">
    .main-article pre{
        color: #008000;
        font-weight: bold;
    }

</style>
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
</pre>
