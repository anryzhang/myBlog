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

<h3>this</h3>
<p>javascript允许动态调用对象的属性.如果a对象和b对象都有一个m属性,javascript在调用m时,会动态切换,这时可能会属a也可以属b,这就要靠this来办到.</p>
<p>如果处在全局环境,this就指顶层对象 (window),如果不处在全局环境,this就指对属性求值时所在的对象.</p>
<h4>全局环境</h4>
<pre>
    this === window //true
</pre>
<h4>构造函数</h4>
<p>构造函数中的this,指的是实例对象</p>
<pre style="color: #008000">
    var con_obj = function(p){
        this.p = p;
    }

    con_obj.prototype.m = function(){
        return this.p;
    }

    var test_o = new con_obj('test');
    test_o.p //test
    test_o.m() // test
</pre>
<p>上面代码定义了构造函数con_obj.由于this指向实例对象,所以在构造函数内部定义了this.p.就相当于定义的实例对象里有一个p属性,然后m方法就可以返回这个实例化的P属性.</p>

<h4>普通函数</h4>
<p>普通函数内部的this,指的是函数运行时所在的对象.</p>
<pre style="color: #008000">
    function f(){
        console.log(this.m);
    }
    var m = 1;
    f(); //1

    //函数f是在全局环境中运行的,this指向的就是全局对象window,所以可以读取全局变量m的值.
</pre>

<pre style="color: #008000">
    function f(){
        console.log(this.m);
    }

    var obj = {m:1};
    obj.f = f;
    obj.f() //1

    var obj2 = {m : 2};
    obj2.f = f;
    obj2.f() //2

    //当f在obj下运行时,this指向的是obj, 当在obj2下运行时,this指向的是obj2.
</pre>

<p>有时,某个方法m位于多层对象的内部,为了避免this指向全局对象,可以只将m函数所在的对象赋值给上层对像.如下</p>
<pre style="color: #008000">
    var a = {
        b:{
            m:function(){
                console.log(this.p)
            },
            p:'test'
        }
    };

    var h = a.b;
    h.m();//test
</pre>
<h4>结论</h4>
<p>
    如果是在全局环境下运行,就代表全局对象window;
    如果是在某个对象中运行,就代表该对象.
    函数中使用多个this的方法如下:
</p>
<pre style="color: #008000">
    var o = {
        f1: function(){
            console.log(this);//object
            var that = this;
            var f2 = function(){
                console.log(that);//object
            }();
        }
    }

    o.f1();

    //上面代码定义了变量that,固定指向外层的this,
    然后在内层使用that,就不会发生this的改变.
</pre>

<h3>call 方法</h3>
<p>
    函数的call方法可以改变this指向的对象.然后再调用该函数.
</p>
<pre style="color: #008000">
    fun.call(contest,[arg1],[arg2],...);

    //call方法的第一个参数就是this所要指向的那个对象,
    后面的参数则是函数调用时所需要的参数,
    如果this所要指向的那个对象,
    设定为null或undefined,则等同指定全局对象.

    var n = 123;

    var o = { n : 456 };

    function a() {
        console.log(this.n);
    }

    a.call() // 123
    a.call(null) // 123
    a.call(undefined) // 123
    a.call(window) // 123
    a.call(o) // 456

</pre>











