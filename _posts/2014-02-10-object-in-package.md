---
layout: post
title: JavaScript-封装
description: JavaScript-封装
keywords: JavaScript,封装
---
<h2>原型(protytype)对象</h2>
<div>
    <style type="text/css">
        pre{
            color: #008000;
            font-weight: bold;
        }
    </style>
</div>
<p>
    javascript通过构造函数生成新对象,因此,构造函数可以视为实例对像的模板,实例对象的属性和方法可以定义在构造函数内部.
</p>
<pre >
    //一般实例化对象的操作
    function create_obj(name){
        this.name = name;
        this.color = 'white';
    }
    var cat = new create_obj('co');
    cat.name // co
    cat.color //white
</pre>
<p>
    javascript还可以用prototype对象来定义实例对象的方法,且定义在它上面的属性与方法
    ,能被所有实例对象共享,一但修改prototype定义的属性或方法,实例对象也会跟着修改.
    总而言之，prototype对象的作用，就是定义所有实例对象共享的属性和方法，
    所以它也被称为实例对象的原型，而实例对象可以视作从prototype对象衍生出来的。
</p>
<pre>
    function create_obj(name){
        this.name = name;
    }

    create_obj.prototype.color = "小白";
    create_obj.prototype.eat = function(){
        console.log(this.name + '吃东西' + '他是' + this.color);
    };

    var cat1 = new create_obj('老大');
    var cat2 = new create_obj('老二');

    cat1.eat(); //老大吃东西他是小白
    cat2.eat(); //老二吃东西他是小白

</pre>
<h2>原型链</h2>
<p>
    javascript所有对象都有构造函数,
    而所有构造函数都有prototype发生,
    所以所有对象都有自己的prototype原型对象.
    因此,一个对象的属性和方法,有可能定义它自身上面,
    也有可能定义在它的原型对象上面.
    由于原型本身也是对象,又有自己的原型,所以形成了一条原型链(prototype chain).
    比如，a对象是b对象的原型，b对象是c对象的原型，以此类推。因为追根溯源，
    最源头的对象都是从Object构造函数生成（使用new Object()命令），
    所以如果一层层地上溯，所有对象的原型最终都可以上溯到Object.prototype。
    Object.prototype的原型是没有任何属性和方法的null<br>
    <strong>
        “原型链”的作用在于，当读取对象的某个属性时，
        JavaScript引擎先寻找对象本身的属性，
        如果找不到，就到它的原型去找，
        如果还是找不到，就到原型的原型去找。
        以此类推，如果直到最顶层的Object.prototype还是找不到，
        则返回undefined。
    </strong>
</p>
<div>
    举例来说，如果让某个函数的prototype属性指向一个数组，
    就意味着该函数可以用作数组的构造函数，
    因为它生生成的实例对象都可以通过prototype属性调用数组方法。
    <pre>
        function MyArray (){}

        MyArray.prototype = new Array();

        var mine = new MyArray();
        mine.push(1, 2, 3);

        mine.length // 3
        mine instanceof Array // true

        // 等同于

        Array in [
            MyArray.prototype.constructor, // 即MyArray
            Array.prototype.constructor, // 即Array
            Object.prototype.constructor // 即Object
        ]

    </pre>
    <p>
        上面代码的mine是MyArray的实例对象，
        由于MyArray的prototype属性指向一个数组，
        使得mine可以调用数组方法（这些方法其实定义在数组的prototype对象上面）。
        至于最后那行instanceof表达式，我们知道instanceof运算符用来比较一个对象
        是否为某个构造函数的实例，最后一行表示mine为Array的实例
    </p>
</div>

<h2>
    constructor属性
</h2>
<div>
    <p>
        prototype对象有一个constructor属性，默认指向prototype对象所在的构造
        函数。可以被所有实例对象继承。
    </p>
    <pre>
        var a = new Array();
        a.hasOwnProperty('constructor');
        //false
        a.constructor === Array.prototype.constructor
        //true
    </pre>

    <p>
        上面代码表示a是构造函数Array的实例对象，但是a自身没有contructor属性。
        该属性其实是读取原型链上面Array.prototype.contructor属性。
        可以用来分辨prototype对象到底定义在哪个构造函数上面。如下
    </p>
    <pre>
        function FOO(){}
        FOO.prototype.contructor === FOO;
        // true
    </pre>
</div>
<h3>Object.getPrototypeOf方法</h3>
<div>
    <p>
        getPrototypeOf方法返回一个对象的原型。
    </p>
    <pre>
        Object.getPrototypeOf({}) === Object.prototype
        //true
        function F(){}
        Object.getPrototypeOf(F) === Function.prototype
        //true

        var f = new F();
        Object.getPrototypeOf(f) === F.prototype
        // true

    </pre>
</div>
<h3>Object.create方法</h3>
<div>
    <p>
        Object对象的create方法用于生成新的对像。
        它接受一个原型对象作为参数，返回一个新对象，
        后者完全继承前者的属性。
    </p>
    <pre>
        var o1 = {p:1};
        var o2 = Object.create(o1);
        console.log(o2.p);
        //1
    </pre>

    <p>
        如果老式浏览器不支持Object.create方法，可以用下面代码代替
    </p>
    <pre>
        if(typeof Object.create !== 'function'){
            Object.create = function(o){
                function F(){}
                F.prototype = o;
                return new F();
            }
        }
        //Object.create方法实质是新建一个构造函数F，
        然后让F的prototype属性指向作为原型的对象o,
        最后返回一个F的实例，从而实现让实例继承o的属性。
    </pre>
    <P>
        Object.create方法使用的时候,必须提供对象原型,否则会报错.

    </P>
    <p>Object.create方法可以接受两个参数,第一个是对象的原型,
        第二个是描述属性的attributes对象.
    </p>
    <pre>
        //Object.create(prototype,propDescObj)

        var o = Object.create(Object.prototype,{
            p1:{value:123, enumerable:true},
            p2:{value:"abc", enumerable:true},
        });
        o.p1; //123
        o.p2; //"abc"
    </pre>
    <p>isPrototypeOf方法</p>
    <p>
        该方法用来判断一个对象是否是另一个对象的原型.
    </p>
    <pre>
        var o1 = {};
        var o2 = Object.create(o1);
        var o3 = Object.create(o2);

        console.log(o2.isPrototypeOf(o3));//true
        console.log(o1.isPrototypeOf(o1));//true
    </pre>
</div>
























