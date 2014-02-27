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

<h3>原生对象的原型</h3>
<p>
    所有的原生引用类型(Object,Array,String)都在其构造函数的原型上定义了方法.

</p>
<p>
    通过原生对象的原型,不仅可以取得所有默认方法的引用,而且也可以定义新方法.
    可以像修改自定义对象的原型一样修改原生对象的原型,因此可以随时添加方法,如:
    给基本包装类型String添加一个名这startsWith()方法
</p>
<pre>
        String.prototype.startsWith = function(text){
            return this.indexOf(text) == 0;
        }
        var msg = 'hello world!';
        alert(msg.startsWith('he'));
        //true

</pre>

<h3>原型对象的问题</h3>
<p>
    原型中所有属性是被很多实例共享的,这种共享对于函数很合适,然而.
    对于包含引用类型的属性来说,问题就比较突出.如下例子:
</p>
<pre>
function Preson(){}
    Preson.prototype={
        constructor:Preson,
        name:'anry',
        age:27,
        job:'web',
        friends:['coco','keke'],
        sayName:function(){
            alert(this.name);
        }
    };
    var p1 = new Preson();
    var p2 = new Preson();
    p1.friends.push('test');
    console.log(p1.friends);//["coco", "keke", "test"]
    console.log(p2.friends);//["coco", "keke", "test"]
    console.log(p1.friends == p2.friends);//true
</pre>
<p>如果p1,p2都是各有自己的friends,那上面的代码就有问题了.所以很少有人单独使用原型模式.</p>
<h3>组合使用构造函数模式和原型模式</h3>
<p>
    创建自定议类型的最常见方式,就是组合使用构造函数模式与原型模式.
    <strong>
        构造函数模式用于定义实例属性,原型模式用于定义方法与共享属性.
    </strong>
    这种混合模式还支持向构造函数传递参数:如下:
</p>
<pre>
    function Person(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
        this.friends = ['co','ke'];
    }

    Person.prototype = {
        constructor: Person,
        sayName:function(){
            alert(this.name);
        }
    };

    var p1 = new Person('anry',29,'web');
    var p2 = new Person('test',23,'test');
    p1.friends.push('vi');
    console.log(p1.friends);//["co", "ke", "vi"]
    console.log(p2.friends);//["co", "ke"]
    console.log(p1.friends === p2.friends);//false
    console.log(p1.sayName === p2.sayName);//true
</pre>

<h3>
    动态原型模式
</h3>
<p>
    动态原型模式把所有信息都封装在了构造函数中,而非 通过 在通过在构造函数
    中初始化原型(仅在必要的情况下),又保持 了同时使用构造函数各原型的优点.
    换句话说,可以通过检查某个应该存在的方法是否有效,来决定 是否需要初始化原型.如下:
</p>

<pre>
function Person(name,age,job){
        this.name = name;
        this.age = age;
        this.job = job;
        //方法
        if(typeof this.sayName != 'function'){
            Person.prototype.sayName = function(){
                alert(this.name);
            }
        }
    }

    var friend = new Person('anry',27,'web');
    friend.sayName();
</pre>
<p>
    这里只在sayName()方法不存在的情况下,才会将它添加到原型中.
    还可以使用instanceof操作符确定它的类型.但在使用动态原型模式时,不能使用对象
    字面量重写原型,原因是如果在已经创建了实例的情况下重写原型,那么就会切断现有实例与新原型之间的联系.
</p>






















