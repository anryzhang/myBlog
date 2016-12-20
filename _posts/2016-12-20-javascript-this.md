---
layout: post
title: this 的值到底是什么？
description: javascript js this.
keywords: this.
---


<div class="entry-content clearfix">
	<p class="container entry-view">
		<h1>this 的值到底是什么？</h1>

		<div class="post-content-container">
			<div class="entry-content post-content">
				<p>你可能遇到过这样的 JS 面试题：</p>
				<pre><code class="hljs javascript"><span class="hljs-keyword">var</span> obj = {
  <span class="hljs-attr">foo</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span
							class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
  }
}

<span class="hljs-keyword">var</span> bar = obj.foo
obj.foo() <span class="hljs-comment">// 打印出的 this 是 obj</span>
bar() <span class="hljs-comment">// 打印出的 this 是 window</span></code></pre>
				<p>请解释最后两行函数的值为什么不一样。</p>
				<hr>
				<p>初学者关于 this 的理解一直很模糊。今天这篇文章就要一次讲清楚了。</p>
				<p>而且这个解释，你在别的地方看不到。看懂这篇文章，所有关于 this 的面试题，都是小菜。</p>
				<h1 id="-">函数调用</h1>
				<p>首先需要从函数的调用开始讲起。</p>
				<p>JS（ES5）里面有三种函数调用形式：</p>
				<pre><code class="hljs javascript">func(p1, p2)
obj.child.method(p1, p2)
func.call(context, p1, p2) <span class="hljs-comment">// 先不讲 apply</span></code></pre>
				<p>一般，初学者都知道前两种形式，而且认为前两种形式「优于」第三种形式。<br>从看到这篇文章起，你一定要记住，第三种调用形式，才是正常调用形式：</p>
				<pre><code class="hljs javascript">func.call(context, p1, p2)</code></pre>
				<p>其他两种都是语法糖，可以等价地变为 call 形式：</p>
				<pre><code class="hljs javascript">func(p1, p2) 等价于
func.call(<span class="hljs-literal">undefined</span>, p1, p2)

obj.child.method(p1, p2) 等价于
obj.child.method.call(obj.child, p1, p2)</code></pre>
				<p>请记下来。（我们称此代码为「转换代码」，方便下文引用）</p>
				<p>至此我们的函数调用只有一种形式：</p>
				<pre><code class="hljs javascript">func.call(context, p1, p2)</code></pre>
				<h1 id="-this-">这样，this 就好解释了</h1>
				<p>this，就是上面代码中的 context。就这么简单。</p>
				<p>this 是你 call 一个函数时传的 context，由于你从来不用 call 形式的函数调用，所以你一直不知道。</p>
				<hr>
				<p><strong>先看 func(p1, p2) 中的 this 如何确定：</strong></p>
				<p>当你写下面代码时</p>
				<pre><code class="hljs javascript"><span class="hljs-function"><span
						class="hljs-keyword">function</span> <span class="hljs-title">func</span>(<span
						class="hljs-params"></span>)</span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
}

func()</code></pre>
				<p>等价于</p>
				<pre><code class="hljs javascript"><span class="hljs-function"><span
						class="hljs-keyword">function</span> <span class="hljs-title">func</span>(<span
						class="hljs-params"></span>)</span>{
  <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
}

func.call(<span class="hljs-literal">undefined</span>) <span
							class="hljs-comment">// 可以简写为 func.call()</span></code></pre>
				<p>按理说打印出来的 this 应该就是 undefined 了吧，但是浏览器里有一条规则：</p>
				<p>如果你传的 context 就 null 或者 undefined，那么 window 对象就是默认的 context（严格模式下默认 context 是 undefined）<br>因此上面的打印结果是
					window。</p>
				<p>如果你希望这里的 this 不是 window，很简单：</p>
				<pre><code class="hljs javascript">func.call(obj) <span
						class="hljs-comment">// 那么里面的 this 就是 obj 对象了</span></code></pre>
				<hr>
				<p><strong>再看 obj.child.method(p1, p2) 的 this 如何确定</strong></p>
				<pre><code class="hljs javascript"><span class="hljs-keyword">var</span> obj = {
  <span class="hljs-attr">foo</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span
							class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
  }
}

obj.foo()</code></pre>
				<p>按照「转换代码」，我们将 obj.foo() 转换为</p>
				<pre><code class="hljs javascript">obj.foo.call(obj)</code></pre>
				<p>好了，this 就是 obj。搞定。</p>
				<p>回到题目：</p>
				<pre><code class="hljs javascript"><span class="hljs-keyword">var</span> obj = {
  <span class="hljs-attr">foo</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span
							class="hljs-params"></span>)</span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>)
  }
}

<span class="hljs-keyword">var</span> bar = obj.foo
obj.foo() <span class="hljs-comment">// 转换为 obj.foo.call(obj)，this 就是 obj</span>
bar()
<span class="hljs-comment">// 转换为 bar.call()</span>
<span class="hljs-comment">// 由于没有传 context</span>
<span class="hljs-comment">// 所以 this 就是 undefined</span>
<span class="hljs-comment">// 最后浏览器给你一个默认的 this —— window 对象</span></code></pre>
				<p>总结</p>
				<ol>
					<li>this 就是你 call 一个函数时，传入的 context。</li>
					<li>如果你的函数调用形式不是 call 形式，请按照「转换代码」将其转换为 call 形式。</li>
				</ol>
				<p>以后你遇到所有跟 this 有关的笔试题，都不会有疑问了。</p>

			</div>
		</div>



	</div>
</div>