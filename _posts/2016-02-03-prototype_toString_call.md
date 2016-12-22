---
layout: post
title: Object.prototype.toString.call区分数据类型
description: prototype js call
keywords: prototype call
---

<div class="entry-content clearfix">
	<h1>Object.prototype.toString.call区分数据类型</h1>
	<div class="content">
		<p>
		在 JavaScript 里使用 typeof 来判断数据类型，只能区分基本类型，即 “number”，”string”，”undefined”，”boolean”，”object” 五种。对于数组、函数、对象来说，其关系错综复杂，使用 typeof 都会统一返回 “object” 字符串。
		</p>
		<p>
		要想区别对象、数组、函数单纯使用 typeof 是不行的。或者你会想到 instanceof 方法，例如下面这样：
		</p>
		<pre>
		var a = {};
		var b = [];
		var c = function () {};

		//a b c 都是 Object 的实例
		console.log(a instanceof Object) //true
		console.log(b instanceof Object) //true
		console.log(c instanceof Object) //true

		//只有 Array 类型的 b 才是 Array 的实例
		console.log(a instanceof Array) //false
		console.log(b instanceof Array) //true
		console.log(c instanceof Array) //false

		//只有 Function 类型的 c 才是 Function 的实例
		console.log(a instanceof Function) //false
		console.log(b instanceof Function) //false
		console.log(c instanceof Function) //true
		从以上代码来看，要判断复合数据类型，可以如下判断：

		//对象
		(a instanceof Object) && !(a instanceof Function) && !(a instanceof Function)
		//数组
		(a instanceof Object) && (a instanceof Array)
		//函数
		(a instanceof Object) && (a instanceof Function)
			</pre>

		<p>
			更简便的方式，即是使用 Object.prototype.toString.call() 来确定类型，ECMA 5.1 中关于该方法的描述[1]是这样的：

		</p>
		<p>
			When the toString method is called, the following steps are taken:
			If the this value is undefined, return “[object Undefined]“.
			If the this value is null, return “[object Null]“.
			Let O be the result of calling ToObject passing the this value as the argument.
			Let class be the value of the [[Class]] internal property of O.
			Return the String value that is the result of concatenating the three Strings “[object ", class, and "]“.
			由于 JavaScript 中一切都是对象，任何都不例外，对所有值类型应用 Object.prototype.toString.call() 方法结果如下：

		</p>
		<pre>
			console.log(Object.prototype.toString.call(123)) //[object Number]
			console.log(Object.prototype.toString.call('123')) //[object String]
			console.log(Object.prototype.toString.call(undefined)) //[object Undefined]
			console.log(Object.prototype.toString.call(true)) //[object Boolean]
			console.log(Object.prototype.toString.call({})) //[object Object]
			console.log(Object.prototype.toString.call([])) //[object Array]
			console.log(Object.prototype.toString.call(function(){})) //[object Function]
		</pre>

		所有类型都会得到不同的字符串，几乎完美。

	</div>
</div>


