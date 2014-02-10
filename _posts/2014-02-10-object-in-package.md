---
layout: post
title: JavaScript-封装
description: JavaScript-封装
keywords: JavaScript,封装
---
<h2>原型(protytype)对象</h2>
<style>
    pre{
        color: #008000;
        font-weight: bold;
    }
</style>
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
    Object.prototype的原型是没有任何属性和方法的null
    <strong>
        “原型链”的作用在于，当读取对象的某个属性时，
        JavaScript引擎先寻找对象本身的属性，
        如果找不到，就到它的原型去找，
        如果还是找不到，就到原型的原型去找。
        以此类推，如果直到最顶层的Object.prototype还是找不到，
        则返回undefined。
    </strong>
</p>
<section>
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
    </pre>
    <p>
        上面代码的mine是MyArray的实例对象，
        由于MyArray的prototype属性指向一个数组，
        使得mine可以调用数组方法（这些方法其实定义在数组的prototype对象上面）。
        至于最后那行instanceof表达式，我们知道instanceof运算符用来比较一个对象
        是否为某个构造函数的实例，最后一行表示mine为Array的实例
    </p>
</section>




























