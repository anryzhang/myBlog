---
layout: post
title: javascript 面向对象编程
description: javascript 面向对象编程
keywords: javascript 面向对象编程
---

 <h2>实物的抽象--对象</h2>
 <p>当实物抽象成"对象",实物之间的关系 就变成了"对象"之间的关系</p>
<h2>对象是一个模型,封装了"属性"(property)和"方法"(method)</h2>
<p>所谓"属性"就是对象的状态,所谓"方法"就是对象的行为</p>
<h2>类各构造函数</h2>
<p>面向对象就是要生成对象,生成对象就需要一个模板,用来表示某一类实物的共同特征,然后"对象"根据这个模板生成实例."类"就是对象 的模板,对象就是"类"的实例.</p>
<p>javascript没有"类",只有用构造函数(constructor)作为对象的模板.构造函数的最大特点就是函数体内使用了this关键字,代表了所要生成的对象实例.生成对象 的时候,必需用new命令,调用 构造函数.</p>
<p>用构造函数生成一个对象实例后, 构造函数内部的this代表被生成的实例对象.</p>

<h2>基本用法</h2>
<pre style="color: #008000">
    //构造函数
    var con_obj = function(){
        this.speed = 100;
    };
    //实例化对象
    var v = new con_obj();
    console.log(v.speed);//100
</pre>
<p>注意:如果不使用new而直接调用构造函数,this代表的是全局对象,构造函数就变成了普通函数,并不会生成实例对象.</p>

<h3>instanceof运算符</h3>
<p>运算符用来确定一个对象是否为某个构造函数的实例.</p>
<pre style="color: #008000">
    //构造函数
    var con_obj = function(){
        this.speed = 100;
    };
    //实例化对象
    var v = new con_obj();
    console.log(v instanceof con_obj);//true
</pre>
<p>instanceof运算符的左边放置对象,右边放置构造函数.在javascript中,只要是对象,就有对应的构造函数.因此,instanceof运算符可以用来判断值的类型.</p>
<pre style="color: #008000">
    [] instanceof Array //true
    ({}) instanceof Object //true
</pre>
<p>注意:原始类型的值不是对象,所以不能用instanceof运算符来判断类型,但可以用 typeof 可判断.</p>
<p>instanceof运算符实质就是找出instanceof运算符左侧的实例对象的原型键上各个原型的constructor属性,然后确定这些属性中是否包含instanceof运算符右侧的构造函数.</p>












