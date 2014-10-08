---
layout: post
title: javascript真经
description: 对像本无树,类型亦无形,本来无一物,何处惹尘埃?
keywords: javascript,函数,表达示,对像,类型.
---
<h3>回归简单</h3>
<p>javascript 数据是很简洁的，简单的数据只有undefined,null,boolean,number,string这五种，复杂的只有一种object.</p>
 <p>
    javascript 中的代码只体现为一种形式：function
 </p>
 <strong>undefined</strong>
 <p>
     代表一切未知的事物,typeof undefined 返回的也是undefined
 </p>
<strong>null</strong>
<p>
    有那么一个概念,但没有东西,无中似有,有中还无, typeof null 返回的是object,但null并非object,具有null值的变量也并非是object
</p>
<strong>boolean</strong>
<p>
是就是,非就非   j
</p>
<strong>
    number
</strong>
<p>
    typeof NaN 和 typeof Infinity 都返回number,
    NaN参与任何数据计算的结果都是NaN,而且NaN != NaN.
    Infinity/Infinity = NaN
</p>
<strong>
    string
</strong>
 <p>
     面向人类的理性事物.
 </p>

<h3>javascript 函数就是对象的本质</h3>
<pre>
    <script>
        function sing(){
            console.log(sing.author + ":" + sing.poem);
        }

        sing.author = 'lb';
        sing.poem = "汉家秦地月,流影照明妃,一上玉关道,天涯去不归...";
        sing();

        sing.author = 'dd';
        sing.poem = '日出汉家天,月落阴山前,女儿琵琶怨,已唱三千年...';
        sing();
    </script>
</pre>

<strong>
    对象的自我意识
</strong>
<p>
    对象将世界划分为内外两部分.
    有一个人,在对象树下,整整想了九九八十一天,终于悟出了生命的痛苦来自于欲望,但究其欲望的根源是来自于自我意识.
</p>












