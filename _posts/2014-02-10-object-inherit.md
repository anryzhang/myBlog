---
layout: post
title: JavaScript-继承
description: JavaScript-继承
keywords: JavaScript-继承,原型链
---
<h2>原型链</h2>
<p>
    原型链是JS继承的主要方法,利用原型让
    一个引用类型继承另一个引用类型的属性和方法.<br/>
    构造函数,原型,实例的关系:
    第个构造函数都有珍上原型对象(prototype),原型对象都包含一个
    指向构造函数的指针,而实例都包含一个指向原型对象的内部指针.如下:

</p>
<pre>
    function SuperType(){
        this.property = true;
    }
    SuperType.prototype.getSuperValue = function(){
        return this.property;
    };

    function SubType(){
        this.subproperty = false;
    }
    //继承了SuperType
    SubType.prototype = new SuperType();
    SubType.prototype.getSubValue = function(){
        return this.subproperty;
    };
    var instance = new SubType();
    alert(instance.getSuperValue());//true;
</pre>
<p>
    上面代码定义了两个类型:SuperType和SubType.SubType继承了SuperType,
    而继承是通过创建SuperType的实例,并奖该实例赋给SubType.prototype实现的.
    <strong>实现的本质是重写原型对象,代之以一个新类型的实例
    .原来存在于SuperType的实例中的所有属性和方法,现在也存在于SubType.prototype中.</strong>
    新原型不仅具有作为一个SuperType的实例所拥有的全部属性和方法,而且其 内部还有一个指针,指向了
    SuperType的原型.
</p>

<p>
    instance指向SubType的原型,SubType的原型又指向SuperType的原型.getSuperValue()方法仍然还在
    SuperType.prototype中,但property则位于SubType.prototype中.这是因为
    property是一个实例属性,而getSuperValue()则是一个原型方法.
    即然SubType.prototype现在是SuperType的实例,那么property当然就位于该实例中了.
    <strong>
        instance.constructor现在指向的是SuperType,这是因为原来SubType.prototype中的
        constructor被重写了的缘故.
    </strong>
</p>
<p>
    通过原型链实现继承的情况下,搜索过程就得以沿着原型链继续向上.上面的例子来说,调用
    instance.getSuperValue()会经历三个搜索步骤:1>搜索实例;2>搜索SubType.prototype;3>搜索SuperType.prototype,最
    后一步才会找到该方法.
</p>
<h3>谨慎地定义方法</h3>
<p>
    子类型有时候需要重写超类型中的某个方法,或者需要添加超类型中不存在的某个方法.
    <strong>
        给原型添加方法的代码一定要放在替换原型的语句之后.
    </strong>
    如下:
</p>
<pre>
   function SuperType(){
       this.property = true;
   }
    SuperType.prototype.getSuperValue = function(){
       return this.property;
    };
    function SubType(){
        this.subproperty = false;
    }
    //继承了SuperType
    SubType.prototype = new SuperType();
    //添加新方法
    SubType.prototype.getSubValue = function(){
        return this.subproperty;
    };
    //重写超类型中的方法,会屏蔽原型链中已经存在的那个方法.
    SubType.prototype.getSuperValue= function(){
        return false;
    };
    var instance = new SubType();
    alert(instance.getSuperValue());//false

    注意:在通过原型链实现继承时,不能使用对象字面量创建原型方法.因为这样做就会重写原型链.会报错.
</pre>
<pre>
//使用字面量添加新方法，会导致上一行代码无效
SubType.prototype = {
    getSubValue : function (){
        return this.subproperty;
    },
    someOtherMethod : function (){
        return false;
    }
};
var instance = new SubType();
alert(instance.getSuperValue()); //error!
</pre>

<h3>原型链的问题</h3>
<p>
    原型链很强大,可以用来实现继承,最主要的问题来自包含引用类型值的原型.
    包含引用类型的原型属性会被所有实例共享;而这也为什么要在构造函数中,而
    不是在原型对象中定义属性的原因.
</p>

<h3>借用构造函数</h3>
<p>
    在解决原型中包含引用类型值所带来问题的过程中,可以使用一种叫做借用构造函数的技术.
    (有时也叫做伪造对象或经典继承).
    <strong>
        在子类型构造函数的内部调用超类型构造函数.函数虽在特定环境中执行代码的对象,
        因此通过使用apply()和call()方法可以在(将来)新创建的对象上执行构造函数.
    </strong>
</p>
<pre>
    function SuperType(){
        this.colors = ['r','b','g'];
    }
    function SubType(){
        //继承了SuperType
        SuperType.call(this);
    }
    var instance1 = new SubType();
    instance1.colors.push('c');
    alert(instance1.colors);
    var instance2 = new SubType();
    alert(instance2.colors);
</pre>
<p>
    上代码中通过call()方法(或apply()方法)借调了超类型的构造函数.
    <strong>传递参数,可以在子类型构造函数中向超类型构造函数传递参数.如下:</strong>
</p>
<pre>
    function SuperType(name){
        this.name = name;
    }
    function subType(){
        //继承了SuperType ,同时还传递了参数
        SuperType.call(this,'anry');
        //实例属性
        this.age = 27;
    }

    var instance = new subType();
    alert(instance.name);//'anry'
    alert(instance.age); //27
</pre>
<h3>
    借用构造函数的问题
</h3>
<p>
    因为借用构造函数,方法都在构造函数中定义,因此函数就无法复用.而且在超类型的原型中定义 的方法,
    对子类型来说是不可见的,结果 所有类型都只能使用构造函数模式.因此,借用构造函数的技术 也是很少单独使用的.
</p>

<h3>组合继承</h3>
<p>
    指是的将原型链和借用构造函数的技术 组合到一块,从而发挥二者一种继承模式.
    使用原型链视而不见对原型要属性和方法的继承,而通过借用构造函数来实现对
    实例属性的继承.这样即通过在原型上定义方法实现了函数利用,又能够保证每个实例都有它自己的属性.
    如下:

</p>

<pre>
    function SuperType(name){
        this.name = name;
        this.colors = ['r','b','g'];
    }
    SuperType.prototype.sayName = function(){
        alert(this.name);
    };

    function SubType(name,age){
        //继承了SuperType ,同时还传递了参数
        SuperType.call(this,name);
        //实例属性
        this.age = age;
    }
    //继承方法
    SubType.prototype = new SuperType();
    SubType.prototype.constructor = SubType;
    SubType.prototype.sayAge = function(){
        alert(this.age);
    };

    var instance1 = new SubType('anry',27);
    instance1.colors.push('c');

    alert(instance1.colors);//r,b,g,c
    instance1.sayName();//anry
    instance1.sayAge();//27

    var instance2 = new SubType('co',23);
    alert(instance2.colors);//r,b,g
    instance2.sayName();//co
    instance2.sayAge();//23

</pre>

<p>
    组合继承避免了原型链和借用构造函数的缺陷,成为javascript中最常用的继承模式.

</p>

<h3>原型式继承</h3>
<p>
    没有使用严格意义上的构造函数,借助原型可以基于已有的对象创建新对象,现时还不必因此创建自定义类型.

</p>
<pre>
    function object(o){
        function F(){}
        F.prototype = o;
        return new F();
    }
</pre>
<p>
    Object.create()方法规范了原型式继承,这个方法接收两个参数,一个是用作新对象原型的对象和
    (可选的)一个为新对象定义额外属性的对象.
</p>

<pre>
    var person = {
        name: "Nicholas",
        friends: ["Shelby", "Court", "Van"]
    };
    var anotherPerson = Object.create(person);
    anotherPerson.name = "Greg";
    anotherPerson.friends.push("Rob");
    var yetAnotherPerson = Object.create(person);
    yetAnotherPerson.name = "Linda";
    yetAnotherPerson.friends.push("Barbie");
    alert(person.friends); //"Shelby,Court,Van,Rob,Barbie"
</pre>
<p>
    Object.create()方法的第二个参数与Object.defineProperties()方法的第二个参数格式 相同 .
    每个属性都是通过自己的描述符定义的,<strong>
    以这种方式指定的任何属性都会覆盖原型对象上的同名属性,如下
    </strong>
</p>
<pre>
    var person={
        name:'anry',
        friends:['r','b','g']
    }
    var anothPerson = Object.create(person,{
        name:{
            value:'co'
        }
    }
    alert(anothPerson.name);//co
</pre>
<h3>寄生组合式继承</h3>
<p>
    组合继承最大的问题就是无论在什么情况下,都会调用 两次超类型构造函数:一次是在创建子类型原型时候.
    另一次是在子类型构造函数内部.
    如下:
</p>
<pre>
    function SuperType(name){
        this.name = name;
        this.colors = ["r", "b", "g"];
    }
    SuperType.prototype.sayName = function(){
        console.log(this.name);
    };
    function SubType(name, age){
        SuperType.call(this, name); //第二次调用SuperType()
        this.age = age;
    }
    SubType.prototype = new SuperType(); //第一次调用SuperType()
    SubType.prototype.constructor = SubType;
    SubType.prototype.sayAge = function(){
        console.log(this.age);
    };

    var instance = new SubType('anry','27');
    instance.sayName();
    instance.sayAge();
    console.log(instance.colors);
</pre>
<p>
    <strong>
        所谓寄生组合继承,即通过借用构造函数来继承属性,通过原型链的混成形式来继承方法.

    </strong>
   基本模式如下:
</p>
<pre>
    function inPrototype(subType,superType){
        var prototype = object(supType.prototype);//创建对象
        prototype.constructor = subType;//增强对象
        subType.prototype = prototype;//指定对象
    }
</pre>
<p>
    在函数内部,第一部是创建超类型原型的一个副本.
    第二部是为创建的副本添加constructor属性,从而弥补因重写原型而失去的默认的
    constructor属性.
    最后一步,将新创建的对象(即副本)赋值给子类型的原型.
    这样就可以用inPrototype()函数的语句,去替换前羰例子中为子类型原型赋值的语句了.如下:
</p>
<pre>
    function inPrototype(Sub,Sup){
        var prototype = Object(Sup.prototype);
        prototype.constructor = Sub;
        Sub.prototype = prototype;
    }
    function SuperType(name){
        this.name = name;
        this.colors = ["r", "b", "g"];
    }
    SuperType.prototype.sayName = function(){
        console.log(this.name);
    };
    function SubType(name, age){
        SuperType.call(this, name); //第1次调用SuperType()
        this.age = age;
    }

    inPrototype(SubType,SuperType);

    SubType.prototype.sayAge = function(){
        console.log(this.age);
    };

    var instance = new SubType('anry','27');
    instance.sayName();
    instance.sayAge();
    console.log(instance.colors);
</pre>
<p>
   上例中的高效率体现在它只调用了一次SuperType构造函数,与此同时,原型链还能保持
    不变,因此,还能够正常使用instanceof和isPrototypeOf().寄生组合式继承是引用
    类型最理想的继承范式.
</p>




<h2>__proto__属性</h2>

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



