---
layout: post
title: javascript函数表达式
description: 定义函数的方式有两种,一种是函数声明,一种是函数表达式.
keywords: javascript,函数,表达示,声明.
---
<h3>函数声明提升</h3>
<p>
    函数声明的重要特征就是
    <strong>
        函数声明提升
    </strong>
    在执行代码前会先读取函数声明.这样我们就可以把函数声明放在调用它的语句后面也不会报错.
</p>
<p>
    函数表达式必须在表达式声明后调用,不然会报错.
</p>
<h3>递归</h3>
<p>
    arguments.callee() 方法是指向一个正在执行的函数的指针.可以用来实现对函数的递归调用.如下:

</p>
<pre>
    function fact(num){
        if(num<=1){
            return 1;
        }else{
            return num * arguments.callee(num-1);
        }
    }

   console.log(fact(4)); // 24

</pre>
<h3>闭包</h3>
<p>
   在一个函数内部创建的另一个函数.
</p>
<p>
    当一个函数被 调用 时,会创建一个执行环境及想就在的作用域链.
    然后使用arguments和其他命名参数来初始化函数的活动对象.
    但在作用域链中,外部函数的活动对象始终牌第二位...直至作为作用域
    链终点的全局执行环境 .
</p>




























