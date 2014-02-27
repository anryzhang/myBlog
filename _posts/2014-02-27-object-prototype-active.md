---
layout: post
title: javascript原型的动态性
description: 原型中查找的过程是一次搜索,因此对原型对象所做的任何修改都能够从实例上反映出来.即使是先创建了实例后修改原型也照样如此.
keywords: javascript,原型,动态性
---

<p>
    原型中查找的过程是一次搜索,
    因此对原型对象所做的任何修改都能够从实例上反映出来.
    即使是先创建了实例后修改原型也照样如此.
</p>
<pre>
    function Person(){}
    Person.prototype = {
        name:"anry",
        age:27,
        sayName:function(){
            alert(this.name);
        }
    };
    var friend = new Person();
    Person.prototype.sayHi = function(){
        alert('hi ' + this.name);
    };
    friend.sayHi();
</pre>
<p>
    在Person.prototype中添加一个方法sayHi().即使Person实例是在添加新方法之前创建的,
    但它仍然可以访问这个新方法.
    其原因可以计功行封为实例与原型之间的松散连接关系.
    当我们调用Person.sayHi()时,首先会在实例里搜索名为sayHi的属性,在没找到的
    情况下,会继续搜索原型,因实例与原型之间只不过是一个指针,因此可以在原型中找到新的
    sayHi属性并返回保存在那里的函数.
    <strong>
        实例中的指针仅指向原型,而不指向构造函数.
    </strong>
</p>
<pre>
    function Person(){}

    var friend = new Person();
    Person.prototype.sayHi = function(){
        alert('hi ' + this.name);
    };
    friend.sayHi();// hi undefined

    Person.prototype = {
        name:"anry",
        age:27,
        sayName:function(){
            alert(this.name);
        }
    };
    friend.sayName();
    //Uncaught TypeError: Object #&gt;Person&lt; has no method 'sayName'
</pre>
<p>
    在上例子中,我们先创建了Person的一个实例,然后又重写了其原型对象.
    然后在调用friend.sayHi()时,name没有找.而friend.sayName()时出错误了.
    因为friend指向的原型中没有该名字的属性.
</p>

