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
<h3>apply方法</h3>
<p>
    apply方法与call方法的作用类似,也是改变this指向的对象.
    区别在于apply方法的第二个参数是一个数组,该数组的所有成员 依次作为参数,传入原函数.
    <pre style="color: #008000">
        fun.apply(context,[arg1,arg2,...]);

        function f(x,y){ console.log(x+y); }
        f.call(null,1,1) // 2
        f.apply(null,[1,1]) // 2

        //上面的f函数本来接受两个参数，
        使用apply方法以后，就变成可以接受一个数组作为参数
    </pre>
</p>
<p>
    利用apply这一点可以找出数组中最大元素的函数.
</p>
<pre style="color: #008000">
    //找出数组中最大元素
    var a = [10,2,3,4,15,16,9];
    Math.max.apply(null,a);
    // 16

    通过apply方法，利用构造函数Array将数组的空元素变成undefined。

    Array.apply(null, ["a",,"b"])
    // [ 'a', undefined, 'b' ]

    空元素与undefined的差别在于，数组的foreach方法会跳过空元素，
    但是不会跳过undefined。因此，遍历内部元素的时候，会得到不同的结果。

    var a = ["a",,"b"];

    function print(i) {
        console.log(i);
    }

    a.forEach(print)
    // a
    // b

    Array.apply(null,a).forEach(print)
    // a
    // undefined
    // b

    利用数组对象的slice方法，可以将一个类似数组的对象
    （比如arguments对象）转为真正的数组。但被处理的对象必须有length属性,
    以及相对应的数字键.

    Array.prototype.slice.apply({0:1,length:1})
    // [1]

    Array.prototype.slice.apply({0:1})
    // []

    Array.prototype.slice.apply({0:1,length:2})
    // [1, undefined]

    Array.prototype.slice.apply({length:1})
    // [undefined]
</pre>

<h3>bind方法</h3>
<p>
    bind 方法就是单纯了将函数体内的this绑定到某个对象,然后返回一个新函数,
    它他call方法和apply方法更进一步的是,除了绑定this以外,还可以绑定原函数的参数.
</p>
<pre style="color: #008000">
    var o1 = new Object();
    o1.p = 123;
    o1.m = function (){
        console.log(this.p);
    };

    o1.m() // 123

    var o2 = new Object();
    o2.p = 456;
    o2.m = o1.m;

    o2.m() // 456

    o2.m = o1.m.bind(o1);
    o2.m() // 123
</pre>
<p>
    上面代码使用bind方法将o1.m方法绑定到o1以后，在o2对象上调用o1.m的时候，o1.m函数体内部的this.p就不再到o2对象去寻找p属性的值了。

</p>
<p>
    如果bind方法的第一个参数是null或undefined，等于将this绑定到全局对象，函数运行时this指向全局对象（在浏览器中为window）。

</p>
<pre style="color: #008000">
    function add(x,y) { return x+y; }

    var plus5 = add.bind(null, 5);

    plus5(10) // 15
</pre>




















