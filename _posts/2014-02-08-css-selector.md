---
layout: post
title: 30个进阶实用的CSS选择符
description: 30个进阶实用的CSS选择符
keywords: CSS选择符
---
<div class="articleCot">
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    所以你学会了基础的id，类和后代选择符，然后你就一直用它们了吗？如果是这样，你丢失了（css的）巨大的灵活性。在本文中提到的很多选择器属于CSS3规范的一部分，因此，只有在现代浏览器中才可使用。
</p>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    1.*
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">* </span>{<span style="color:#FF0000;line-height:1.5 !important;"> margin</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 0</span>;<span style="color:#FF0000;line-height:1.5 !important;"> padding</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 0</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    对于初学者，在学习更多高级选择器之前，最先了解的选择器。
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    星号选择器将匹配页面里的每一个元素。很多开发者使用这个技巧将外边距和内边距重置为零。虽然在快速测试时这确实很好用，但我建议你永远不要再生产代码中使用它。它给浏览器带来大量不必要的负担。
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    * 也能作为子选择符使用。
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">#container * </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    这将匹配#container div的每一个后代元素。再次强调，尽量不要使用这种技术。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE6+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    2.#X
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">#container </span>{<span style="color:#FF0000;line-height:1.5 !important;"> width</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 960px</span>;<span style="color:#FF0000;line-height:1.5 !important;"> margin</span>:<span style="color:#0000FF;line-height:1.5 !important;"> auto</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    井号前缀允许我们选择id。这是最常见的用法，不过应该慎重使用ID选择器。
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        反复问自己：我一定需要id来匹配要选择的元素吗？
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    id选择符是唯一的，不允许重复使用。如果可能的话，先尝试使用一个标签名称，一个新的HTML5元素，甚至是一个伪类。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE6+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    3. .X
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">.error </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    现在介绍的是类选择符。id和类的不同之处在于后者可以多次使用。当你想给一组元素应用样式的时候可以使用类选择符。另外，当你紧想给特殊元素应用样式的时候才使用id。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE6+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">4.&nbsp;</span>X Y
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">li a </span>{<span style="color:#FF0000;line-height:1.5 !important;"> text-decoration</span>:<span style="color:#0000FF;line-height:1.5 !important;"> none</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;下一个最常用的选择符是后代选择符。当你需要给你的选择符增加特殊性的时候你可以使用。例如，如果你只想匹配无序列表下的锚元素？此时后代选择符派上用场。
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        小贴士——如果你的选择符看起来像这样 X Y Z A B.error，那你就错了。时刻问自己使用这高的权重是否有必要。
    </p>
</blockquote>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE6+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    &nbsp;<span style="line-height:30px;">5.&nbsp;</span>X
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>; }<span style="color:#800000;line-height:1.5 !important;"> ul </span>{<span style="color:#FF0000;line-height:1.5 !important;"> margin-left</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 0</span>; }   </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    如果你想匹配页面上的所有的元素，根据他们的类型，而不是id或类名？显而易见，使用类型选择符。如果你需要选择所有的无序列表，请使用ul {}。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE6+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">6.&nbsp;</span>X:visited and X:link
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a:link </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>; }<span style="color:#800000;line-height:1.5 !important;"> a:visted </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> purple</span>; } </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    我们使用:link 伪类选择符选择所有已经被点击过的锚标签。
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    此外，我们也有:visited伪类选择符，正如你期望的，允许我们仅给页面上被点击过的或被访问过的锚标签应用样式。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">7.</span>&nbsp;X + Y
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul + p </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    这被称作相邻选择符。它将只选择紧贴在X元素之后Y元素。上面的例子，仅每一个ul之后的第一个段落元素的文本为红色。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">8.</span>&nbsp;X &gt; Y
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">div#container &gt; ul </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    X Y和X &gt; Y之间的不同点是后者只选择直接子代。例如，考虑如下的标记。
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">div </span><span style="color:#FF0000;line-height:1.5 !important;">id</span><span style="color:#0000FF;line-height:1.5 !important;">="container"</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span><span style="line-height:1.5 !important;"> List Item </span><span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> Child <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">div</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    选择符#container &gt; ul将只选择id为container的div的直接子代ul。它不匹配更深层的li的子代的ul。
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    因此，使用子代选择符有性能上的优势。事实上，这同样适用于基于css选择器的javascript引擎。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">9.</span>&nbsp;X ~ Y
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul ~ p </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;这是兄弟选择符和X + Y一样，然而，它没有约束。与相邻选择符（ul + li）仅选择前一个选择符后面的第一个元素比起来，兄弟选择符更宽泛。它会选择，我们上面例子中更在ul后面的任何p元素。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    &nbsp;<span style="line-height:30px;">10.</span>&nbsp;X[title]
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[title] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> green</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    被称为属性选择器，在我们上面的例子里，这只会选择有title属性的锚标签。没有此属性的锚标签将不受影像。但<span style="line-height:19px;">如果你需要更多的特性怎么办呢</span>？呵呵……
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">11.</span>&nbsp;X[href="foo"]
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[href="http://net.tutsplus.com"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> #1f6053</span>; <span style="color:#008000;line-height:1.5 !important;">/*</span><span style="color:#008000;line-height:1.5 !important;"> nettuts green </span><span style="color:#008000;line-height:1.5 !important;">*/</span> } </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    上面的代码段将给所有href属性为<span style="line-height:19px;color:#800000;">http://net.tutsplus.com</span>的锚标签添加样式；他们将会显示为我们的品牌绿色。所有其他的锚标签将不受影响。
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        注意我们将href值用引号包裹。记住，当使用javascript的css选择符引擎时也这么做。如果可能的话，尽可能使用css3选择符代替非官方的方法。
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    这工作的很好，但有点不够灵活。如果链接确实直接连接到Nettus+还好，但是，也许路径是到nettust的相对路径呢？在这种情况下，我们可以使用一点正则表达式语法。
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">12.</span>&nbsp;X[href*="nettuts"]
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[href*="tuts"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> #1f6053</span>; <span style="color:#008000;line-height:1.5 !important;">/*</span><span style="color:#008000;line-height:1.5 !important;"> nettuts green </span><span style="color:#008000;line-height:1.5 !important;">*/</span> } </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;<span style="line-height:19px;">来了不是~这就是我们需要的代码。*号指定了包含该属性的值必须包含定义的值。就是说，这句代码包含了href值为 nettuts.com，net.tutsplus.com或者tutsplus.com。&nbsp;</span><br>
    <span style="line-height:19px;">记住这个描述过于宽泛，如果是某个锚点标签链接到某个连接中带有tuts非Envato的网站（tutsplus属于Envato旗下网站）呢？因此你需要更多特性来限制，分别使用^和&amp;来限定字符串的开始和结束。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    &nbsp;<span style="line-height:30px;">13.&nbsp;</span>X[href^="http"]
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[href^="http"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> background</span>:<span style="color:#0000FF;line-height:1.5 !important;"> url(path/to/external/icon.png) no-repeat</span>;<span style="color:#FF0000;line-height:1.5 !important;"> padding-left</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 10px</span>;
}   </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">有没有想过某些网站是如何定义一个图标的链接的？我确定你肯定看到过。这些链接很容易让你跳转到另一个网站。&nbsp;</span><br>
    <span style="line-height:19px;">使用^(carat)符灰常简单啦。这个符号常常在正则表达式中表示字符串的开始。如果我们想指向所有以"http"开头的"href"属性的锚点的话，我们就可以使用类似于上面的那段代码啦。&nbsp;</span>
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        注意啦，我们不需要搜索"http://",完全没必要，因为我们还要包含以https://开头的链接呢。
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">如果我们想为所有链接到图片的链接定义样式咋办？这种情况下，我们得搜索字符串的结束了不是。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">14.&nbsp;</span>X[href$=".jpg"]
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[href$=".jpg"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">又来了，我们还是使用正则表达式符号，$(dolor)，来作为字符串的结束标记。这种情况下，我们就会搜索所有url以.jpg为结尾的锚点啦。记住记住这种情况下gif和png格式的图片不会被选择哦。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">15.</span>&nbsp;X[data-*="foo"]
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[data-filetype="image"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">回顾最近一条，我们如何能包含各种图片类型:png,jpeg,jpg,gif?很容易想到，我们能通过多个选择器来不是，像这样：</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[href$=".jpg"],
a[href$=".jpeg"],
a[href$=".png"],
a[href$=".gif"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;<span style="line-height:19px;">不过，这样很蛋疼，效率极低。另一个解决办法是使用自定义属性。如果我们加了一种自己的 data-filetype 属性给每一个链接到图片的锚点的话呢？</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;">    <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">a </span><span style="color:#FF0000;line-height:1.5 !important;">href</span><span style="color:#0000FF;line-height:1.5 !important;">="path/to/image.jpg"</span><span style="color:#FF0000;line-height:1.5 !important;"> data-filetype</span><span style="color:#0000FF;line-height:1.5 !important;">="image"</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> Image Link <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">a</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;<span style="line-height:19px;">这样关联后，我们就能使用标准的属性选择器来指定这些链接啦。看下面：</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a[data-filetype="image"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
}</pre>
</div>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">16.&nbsp;</span>X[foo~="bar"]
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;"> a[data-info~="external"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
}<span style="color:#800000;line-height:1.5 !important;"> a[data-info~="image"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这儿有个鲜为人知的特殊技巧，绝对让你印象时刻。~(tilda)符，它可以帮助我们指向那些以空格隔开多个值的属性的元素（真拗口，这翻译我自己都看不懂，水平问题）&nbsp;</span><br>
    <span style="line-height:19px;">以我们第15条的自定义属性为例，上面的代码中我们创建了 data-info属性，这个属性可以定义以空格分隔的多个值。这样，这个链接本身就是个icon，并且指向的也是一个图片链接，像下面这样。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">a </span><span style="color:#FF0000;line-height:1.5 !important;">href</span><span style="color:#0000FF;line-height:1.5 !important;">="path/to/image.jpg"</span><span style="color:#FF0000;line-height:1.5 !important;"> data-info</span><span style="color:#0000FF;line-height:1.5 !important;">="external image"</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> Click Me, Fool <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">a</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">有了这样适当的标记，通过使用 ~ 属性选择器的技巧，我们就可以指向任何具有着两种属性的任何一种啦。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#008000;line-height:1.5 !important;">/*</span><span style="color:#008000;line-height:1.5 !important;"> Target data-info attr that contains the value "external" </span><span style="color:#008000;line-height:1.5 !important;">*/</span><span style="color:#800000;line-height:1.5 !important;"> a[data-info~="external"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
} <span style="color:#008000;line-height:1.5 !important;">/*</span><span style="color:#008000;line-height:1.5 !important;"> And which contain the value "image" </span><span style="color:#008000;line-height:1.5 !important;">*/</span><span style="color:#800000;line-height:1.5 !important;"> a[data-info~="image"] </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;很棒，不是吗？
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">17.</span>&nbsp;X:checked
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">input[type=radio]:checked </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这种伪类只会匹配已经被选中的单选元素。就是这么简单。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        E9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">18.&nbsp;</span>X:after
</h2>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">before 和 after 伪类也很蛋疼。貌似人们每天都能找到或者发明一些新办法来有效地使用它们。它们很容易控制选择器周围的内容。&nbsp;</span><br>
    <span style="line-height:19px;">很多第一次使用是因为他们需要对clear-fix进行改进。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">.clearfix:after </span>{<span style="color:#FF0000;line-height:1.5 !important;"> content</span>:<span style="color:#0000FF;line-height:1.5 !important;"> ""</span>;<span style="color:#FF0000;line-height:1.5 !important;"> display</span>:<span style="color:#0000FF;line-height:1.5 !important;"> block</span>;<span style="color:#FF0000;line-height:1.5 !important;"> clear</span>:<span style="color:#0000FF;line-height:1.5 !important;"> both</span>;<span style="color:#FF0000;line-height:1.5 !important;"> visibility</span>:<span style="color:#0000FF;line-height:1.5 !important;"> hidden</span>;<span style="color:#FF0000;line-height:1.5 !important;"> font-size</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 0</span>;<span style="color:#FF0000;line-height:1.5 !important;"> height</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 0</span>;
    }<span style="color:#800000;line-height:1.5 !important;"> .clearfix </span>{<span style="color:#FF0000;line-height:1.5 !important;"> *display</span>:<span style="color:#0000FF;line-height:1.5 !important;"> inline-block</span>;<span style="color:#FF0000;line-height:1.5 !important;"> _height</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1%</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    这个改进使用了:after伪类元素来在元素后增加一个空间，然后清除它。这个牛X的技巧你应该收藏到工具包里，特别是当overflow:hidden方法无能为力的时候。&nbsp;<br>
    想看看其他创造性的用法：<a href="http://net.tutsplus.com/tutorials/html-css-techniques/quick-tip-getting-clever-with-css3-shadows/" target="_blank" style="color:#075DB3;">访问我滴创建阴影的窍门</a>
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        通过Css3选择器的标准说明书，你应该有技巧地使用这些伪类语法——双冒号::。不过为了兼容，浏览器会接受一个双引号。
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE8+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">19.&nbsp;</span>X:hover
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">div:hover </span>{<span style="color:#FF0000;line-height:1.5 !important;"> background</span>:<span style="color:#0000FF;line-height:1.5 !important;"> #e3e3e3</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">我去，这个你必须懂。典型的官方形式的用户触发伪类。听起来会有点迷惑，不过实际上并非如此。想在用户在某个元素上面悬停时定义个特别的样式？这个属性就是做这个的。</span>
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        记住啦，较old版本的IE，只能在锚点标签后使用这个hover。
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这个选择器你用得最多的情况，估计可能就是在锚点的悬停时加个border-bottom啦。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">a:hover </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border-bottom</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
}  </pre>
</div>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        &nbsp;小贴士： border-bottom:1px solid black;比 text-decoration:underline;好看一点哦。（真的？我去）
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE6+ (In IE6, :hover must be applied to an anchor element)
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">20.&nbsp;</span>X:not(selector)
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">div:not(#container) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> blue</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">not伪类灰常有用。例如我要选择所有的div，除了有id为container的。上面那个代码片段就能完美的实现。&nbsp;</span><br>
    <span style="line-height:19px;">如果我想选择除了p以外的所有元素，我可以这么做：</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">*:not(p) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> green</span>;
} </pre>
</div>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;
</p>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">21.&nbsp;</span>X::pseudoElement
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">p::first-line </span>{<span style="color:#FF0000;line-height:1.5 !important;"> font-weight</span>:<span style="color:#0000FF;line-height:1.5 !important;"> bold</span>;<span style="color:#FF0000;line-height:1.5 !important;"> font-size</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1.2em</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">我们可以使用伪元素（以::为表示）来定义元素的样式。例如第一行，第一个字符，记住啦，这种方法只能应用于同级元素才有效。</span>
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        伪元素由两个冒号组成：::
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>指定p的第一个字符的样式</strong>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">p::first-letter </span>{<span style="color:#FF0000;line-height:1.5 !important;"> float</span>:<span style="color:#0000FF;line-height:1.5 !important;"> left</span>;<span style="color:#FF0000;line-height:1.5 !important;"> font-size</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 2em</span>;<span style="color:#FF0000;line-height:1.5 !important;"> font-weight</span>:<span style="color:#0000FF;line-height:1.5 !important;"> bold</span>;<span style="color:#FF0000;line-height:1.5 !important;"> font-family</span>:<span style="color:#0000FF;line-height:1.5 !important;"> cursive</span>;<span style="color:#FF0000;line-height:1.5 !important;"> padding-right</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 2px</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这段代码会找到所有段落，然后再从中定义这些段落的第一个字符。&nbsp;</span><br>
    <span style="line-height:19px;">这常常使用在仿报纸的文章首字母样式。&nbsp;</span><br>
    <strong>指定p的首行样式&nbsp;</strong>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">p::first-line </span>{<span style="color:#FF0000;line-height:1.5 !important;"> font-weight</span>:<span style="color:#0000FF;line-height:1.5 !important;"> bold</span>;<span style="color:#FF0000;line-height:1.5 !important;"> font-size</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1.2em</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">同样，这个::first-line伪元素会像我们期望的那样，只定义段落的第一行的样式。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE6+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">22.&nbsp;</span>X:nth-child(n)
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">li:nth-child(3) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">想想那些没法从元素堆中选择元素的日子。nth-child伪类解决了这个问题。&nbsp;</span><br>
    <span style="line-height:19px;">请注意 nth-child接收整数和变量，不过不是从0开始的，如果你想选定第二个li，使用 li:nth-child(2).&nbsp;</span><br>
    <span style="line-height:19px;">我们甚至使用这个办法来选择任意的子元素。例如，我们可以用 li:nth-child(4n)来完成4为倍数的所有元素的选择。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox 3.5+
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">23.&nbsp;</span>X:nth-last-child(n)
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">li:nth-last-child(2) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">如果我有灰常多的li在ul里面，我只想要最后3个li怎么办？不必使用li:nth-child(397),你可以使用nth-last-child伪类。&nbsp;</span><br>
    <span style="line-height:19px;">这种技巧和第六条几乎一样有效，不过两者的不同之处在于它从结束开始收集，用回溯的方式进行。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox 3.5+
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">24.&nbsp;</span>X:nth-of-type(n)
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul:nth-of-type(3) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">你应该有很多时候想要元素类型来选择元素而不是通过孩子。&nbsp;</span><br>
    <span style="line-height:19px;">想象一下标记5个无序列表（UL）。如果你想定义第三个ul，并且没有一个唯一的id来找到它，你就可以使用 nth-of-type(3)伪类了。在上面这个代码段中，只有第三个ul才会有黑色的边框。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    兼容性
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox 3.5+
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">25.&nbsp;</span>X:nth-last-of-type(n)
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul:nth-last-of-type(3) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">没错，我们一样可以使用nth-last-of-type来从结束开始回溯这个选择器，来找到我们想要的元素</span>&nbsp;
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox 3.5+
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">26.&nbsp;</span>X:first-child
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul li:first-child </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border-top</span>:<span style="color:#0000FF;line-height:1.5 !important;"> none</span>;
}  </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这个结构的伪类让我们可以选择某个元素的第一个子孩子。你通常可以使用这个办法来删除第一个或者最后一个元素的边框。&nbsp;</span><br>
    <span style="line-height:19px;">例如，你有一系列的rows，每一个都有border-top 和border-bottom。这种情况下，第一行和最后一行看起来会灰常怪。&nbsp;</span><br>
    <span style="line-height:19px;">很多设计师会使用first和last类来弥补这个缺陷。相反，你可以使用这些伪类来解决这些问题。</span>&nbsp;
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE7+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">27.&nbsp;</span>X:last-child
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul &gt; li:last-child </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> green</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">与first-child相反，last-child会选择父节点的最后一个子节点。&nbsp;</span><br>
    <strong>例子：&nbsp;</strong><br>
    <span style="line-height:19px;">我们建立一些例子来示范这些类的可能的用法。我们会建立一种风格来展示。&nbsp;</span><br>
    <strong>标记</strong>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">没啥特别的，就是一个简单的序列。&nbsp;</span><br>
    <strong>Css&nbsp;</strong>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul </span>{<span style="color:#FF0000;line-height:1.5 !important;"> width</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 200px</span>;<span style="color:#FF0000;line-height:1.5 !important;"> background</span>:<span style="color:#0000FF;line-height:1.5 !important;"> #292929</span>;<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> white</span>;<span style="color:#FF0000;line-height:1.5 !important;"> list-style</span>:<span style="color:#0000FF;line-height:1.5 !important;"> none</span>;<span style="color:#FF0000;line-height:1.5 !important;"> padding-left</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 0</span>;
}<span style="color:#800000;line-height:1.5 !important;"> li </span>{<span style="color:#FF0000;line-height:1.5 !important;"> padding</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 10px</span>;<span style="color:#FF0000;line-height:1.5 !important;"> border-bottom</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid black</span>;<span style="color:#FF0000;line-height:1.5 !important;"> border-top</span>:<span style="color:#0000FF;line-height:1.5 !important;"> 1px solid #3c3c3c</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <img src="http://cms.9tech.cn/uploads/allimg/140106/0932144Z2-12.png" alt="">
</p>
<blockquote style="background-image:none;border-color:#EFEFEF;color:#333333;margin-left:25px;padding-right:10px;padding-left:10px;margin-top:10px;margin-bottom:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;font-size:13px;line-height:20.796875px;white-space:normal;">
    <p style="margin:10px auto;">
        这个样式会设置一个背景，删除浏览器默认的ul的padding值，并定义边框给每一个li来提供一点深度。
    </p>
</blockquote>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">如上图所示，唯一的问题是最上面的边框和最下面的边框看起来有点儿怪。让我们来使用:first-child和:last-child来解决这个问题。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">li:first-child </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border-top</span>:<span style="color:#0000FF;line-height:1.5 !important;"> none</span>;
}<span style="color:#800000;line-height:1.5 !important;"> li:last-child </span>{<span style="color:#FF0000;line-height:1.5 !important;"> border-bottom</span>:<span style="color:#0000FF;line-height:1.5 !important;"> none</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    &nbsp;<img src="http://cms.9tech.cn/uploads/allimg/140106/093214N25-15.png" alt="">
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">看上图，解决了不是。</span>
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <em>是滴，IE8支持 first-child 不过不支持last-child。</em>
</p>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">28.&nbsp;</span>X:only-child
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">div p:only-child </span>{<span style="color:#FF0000;line-height:1.5 !important;"> color</span>:<span style="color:#0000FF;line-height:1.5 !important;"> red</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">实话说，你很可能会发现你不会经常使用 only-child伪类。尽管如此，它确实有用，你应该需要它。&nbsp;</span><br>
    <span style="line-height:19px;">它可以帮助你选择是父节点的独生子（没别的孩子啦）的元素。例如，使用上面的代码，只有是div的唯一子孩子的p段落才会定义其颜色为red。&nbsp;</span><br>
    <span style="line-height:19px;">让我们来假定下面的标记。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">div</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;&lt;</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> My paragraph here. <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;&lt;/</span><span style="color:#800000;line-height:1.5 !important;">div</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">div</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> Two paragraphs total. <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> Two paragraphs total. <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">div</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这样，第二个div的p标签的内容不会被选中。只有第一个div的p才会被选中。</span>&nbsp;
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">29.&nbsp;</span>X:only-of-type
</h2>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">li:only-of-type </span>{<span style="color:#FF0000;line-height:1.5 !important;"> font-weight</span>:<span style="color:#0000FF;line-height:1.5 !important;"> bold</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这种结构的伪类有几种灰常聪明的用法。它可以选定在其父节点内没有兄弟节点的元素。例如，我们可以选择只有一个li作为其子孩子的ul。&nbsp;</span><br>
    <span style="line-height:19px;">首先，取决于你想怎样完成这一目标。你可以使用 ul li，不过，这回选择所有li元素。唯一的办法是使用only-of-type。</span>&nbsp;
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="line-height:1.5 !important;">ul &gt; li:only-of-type {
   font-weight: bold;
}</span></pre>
</div>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox 3.5+
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <span style="line-height:30px;">30.&nbsp;</span>X:first-of-type
</h2>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">first-of-type 伪类可以让你选择该类型的第一个兄弟节点。&nbsp;</span><br>
    <strong>一个测试&nbsp;</strong><br>
    <span style="line-height:19px;">为了更好地理解它，让我们来测试一下啊。拷贝下面的标记到你的编辑器。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
    <pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">div</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> My paragraph here. <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">p</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item 1 <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item 2 <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item 3 <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> List Item 4 <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">li</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">ul</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> <span style="color:#0000FF;line-height:1.5 !important;">&lt;/</span><span style="color:#800000;line-height:1.5 !important;">div</span><span style="color:#0000FF;line-height:1.5 !important;">&gt;</span> </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">现在，别急着往下读，试试看如何能只选择'LIST ITEM 2'?如果你搞定了（或者放弃了），继续读。&nbsp;</span>
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>解决办法1</strong>
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">有很多办法能搞定这个测试。我们回顾其中一小部分。以使用first-of-type开始。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul:first-of-type &gt; li:nth-child(2) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> font-weight</span>:<span style="color:#0000FF;line-height:1.5 !important;"> bold</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这个代码段本质上表示，“找到第一个无序列表，然后找到这里面的li，然后，继续使用过滤器直到找到第二个li。&nbsp;</span>
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>解决办法2</strong>
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">另一个可行的办法是毗邻选择器。</span>&nbsp;
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">p + ul li:last-child </span>{<span style="color:#FF0000;line-height:1.5 !important;"> font-weight</span>:<span style="color:#0000FF;line-height:1.5 !important;"> bold</span>;
} </pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">在这个方案中，我们找到p的临近节点ul，然后找到ul的li的最后一个孩子。&nbsp;</span>
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>解决办法3</strong>
</p>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">我们可以随心所欲滴选择这些选择器。</span>
</p>
<div class="cnblogs_code" style="background-color:#F5F5F5;border:1px solid #CCCCCC;padding:5px;overflow:auto;margin:5px 0px;line-height:20.796875px;white-space:normal;font-family:'Courier New' !important;font-size:12px !important;">
<pre style="margin-top:0px;margin-bottom:0px;white-space:pre-wrap;word-wrap:break-word;font-family:'Courier New' !important;font-size:12px !important;"><span style="color:#800000;line-height:1.5 !important;">ul:first-of-type li:nth-last-child(1) </span>{<span style="color:#FF0000;line-height:1.5 !important;"> font-weight</span>:<span style="color:#0000FF;line-height:1.5 !important;"> bold</span>;
}</pre>
</div>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">这次，我们取到第一个ul，然后找到第一个元素，不过是从最后一个开始数。哈哈。</span>&nbsp;
</p>

<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <strong>兼容性</strong>
</p>
<ul style="margin-left:45px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    <li style="list-style:inherit !important;">
        IE9+
    </li>
    <li style="list-style:inherit !important;">
        Firefox 3.5+
    </li>
    <li style="list-style:inherit !important;">
        Chrome
    </li>
    <li style="list-style:inherit !important;">
        Safari
    </li>
    <li style="list-style:inherit !important;">
        Opera
    </li>
</ul>
<h2 style="margin-top:10px;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;line-height:20.796875px;white-space:normal;">
    结论
</h2>
<p style="margin:10px auto;font-family:Verdana, Geneva, Arial, Helvetica, sans-serif;letter-spacing:normal;line-height:20.796875px;white-space:normal;">
    <span style="line-height:19px;">如果你仍在为解决old浏览器的缺陷而纠结，如IE6。在使用这些新的选择器方面，你仍然需要非常小心。不过，别因为这个阻碍了你对这些新玩意儿的学习。别虐待自己。确保关注这里的兼容性列表。应一方面，你可以使用 Dean Edward's excellent IE9.js script 来为旧浏览器提供新的选择器支持。（我去。cool）&nbsp;</span><br>
    <span style="line-height:19px;">其次，当使用javascript库时，如流行的jQuery，最好尽可能使用这些css3本身的选择器而不是使用库的自定义方法/选择器。这能让你的代码更快哦，因为这些选择器引擎本身就能被浏览器解析，而不是用这些库选择器。&nbsp;</span><br>

</p>
</div>