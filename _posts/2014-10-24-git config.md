---
layout: post
title: git config
description: git conig 前端构建工具.
keywords: git ,nodejs.
---


<div class="entry-content clearfix">
    <h2>git多颜色输出</h2>

    <p>git默认的输出是单一颜色的，不仅不够美观，也不容易阅读。实际上，git本身就支持用多种颜色来显示其输出的信息，只需在命令行中运行以下命令来修改git的设置，即可开启多颜色输出：</p>

<pre class=" language-bash"><code class=" language-bash">git config <span class="token operator">--</span>global color<span class="token punctuation">.</span>status auto
    git config <span class="token operator">--</span>global color<span class="token punctuation">.</span>diff auto
    git config <span class="token operator">--</span>global color<span class="token punctuation">.</span>branch auto
    git config <span class="token operator">--</span>global color<span class="token punctuation">.</span>interactive auto</code></pre>

    <p>执行以上命令后，git的status, diff和branch等诸命令的输出就都是带有颜色的了。见下图示例。</p>

    <p><img src="http://www.pureweber.com/wp-content/uploads/2013/09/git-status.png" alt="git-status" width="545" height="192" class="alignnone size-full wp-image-2401"></p>

    <h2>自定义log格式</h2>

    <p>完成上述步骤后，<code>git log</code> 命令的输出虽然有了点颜色，但还是显得枯燥(见下图)。</p>

    <p><img src="http://www.pureweber.com/wp-content/uploads/2013/09/git-default-output.png" alt="git-default-output" width="485" height="299" class="alignnone size-full wp-image-2399"></p>

    <p>不要紧，强大的git提供了自定义log格式的功能，尝试输入以下命令：</p>

<pre><code>git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset' --abbrev-commit
</code></pre>

    <p>你将看到类似下图的输出：</p>

    <p><img src="http://www.pureweber.com/wp-content/uploads/2013/09/git-pretty-log.png" alt="git-pretty-log" width="636" height="290" class="alignnone size-full wp-image-2400"></p>

    <p>怎么样，不赖吧？不过，每次查看log都输出这么一长串的命令，实在是不太现实。咱们来通过git的命令别名来解决这个问题。输入以下命令：</p>

    <pre><code>git config --global alias.lg "log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)&lt;%an&gt;%Creset'"</code></pre>

    <p>上述命令将创建一个命令别名 <code>lg</code>，每次你使用命令 <code>git lg</code> 就相当于输入了刚才那一长串命令。现在，如果想看美观的多颜色输出，就使用 <code>git lg</code>，如果想看普通的log输出，就使用 <code>git log</code>，二者互不干扰。</p>

    <p>如果你想让log输出某些特定的信息，可以自己调整 <code>--pretty</code> 参数的值，例如下面的命令将只显示commit的hash，提交时间，提交者姓名：</p>

    <pre><code>git log --pretty=format:'%h %ar %an'</code></pre>

    <p>把format后面单引号中的内容替换为你想要的格式，即可实现自定义的log输出格式。这里的<code>%h</code>, <code>%ar</code>等是一些git预定义的占位符，完整的列表如下：</p>

    <table class="table table-striped" style="margin-top:20px;">
        <tbody><tr><td>%H</td><td>commit hash</td></tr>
        <tr><td>%h</td><td>commit的短hash</td></tr>
        <tr><td>%T</td><td>tree hash</td></tr>
        <tr><td>%t</td><td>tree的短hash</td></tr>
        <tr><td>%P</td><td>parent hashes</td></tr>
        <tr><td>%p</td><td>parent的短hashes</td></tr>
        <tr><td>%an</td><td>作者名字</td></tr>
        <tr><td>%aN</td><td>mailmap中对应的作者名字 (.mailmap对应，详情参照git-shortlog(1)或者git-blame(1))</td></tr>
        <tr><td>%ae</td><td>作者邮箱</td></tr>
        <tr><td>%aE</td><td>作者邮箱 (.mailmap对应，详情参照git-shortlog(1)或者git-blame(1))</td></tr>
        <tr><td>%ad</td><td>日期 (–date= 制定的格式)</td></tr>
        <tr><td>%aD</td><td>日期, RFC2822格式</td></tr>
        <tr><td>%ar</td><td>日期, 相对格式(1 day ago)</td></tr>
        <tr><td>%at</td><td>日期, UNIX timestamp</td></tr>
        <tr><td>%ai</td><td>日期, ISO 8601 格式</td></tr>
        <tr><td>%cn</td><td>提交者名字</td></tr>
        <tr><td>%cN</td><td>提交者名字 (.mailmap对应，详情参照git-shortlog(1)或者git-blame(1))</td></tr>
        <tr><td>%ce</td><td>提交者 email</td></tr>
        <tr><td>%cE</td><td>提交者 email (.mailmap对应，详情参照git-shortlog(1)或者git-blame(1))</td></tr>
        <tr><td>%cd</td><td>提交日期 (–date= 制定的格式)</td></tr>
        <tr><td>%cD</td><td>提交日期, RFC2822格式</td></tr>
        <tr><td>%cr</td><td>提交日期, 相对格式(1 day ago)</td></tr>
        <tr><td>%ct</td><td>提交日期, UNIX timestamp</td></tr>
        <tr><td>%ci</td><td>提交日期, ISO 8601 格式</td></tr>
        <tr><td>%d</td><td>ref名称</td></tr>
        <tr><td>%e</td><td>encoding</td></tr>
        <tr><td>%s</td><td>commit信息标题</td></tr>
        <tr><td>%f</td><td>过滤commit信息的标题使之可以作为文件名</td></tr>
        <tr><td>%b</td><td>commit信息内容</td></tr>
        <tr><td>%N</td><td>commit notes</td></tr>
        <tr><td>%gD</td><td>reflog selector, e.g., refs/stash@{1}</td></tr>
        <tr><td>%gd</td><td>shortened reflog selector, e.g., stash@{1}</td></tr>
        <tr><td>%gs</td><td>reflog subject</td></tr>
        <tr><td>%Cred</td><td>切换到红色</td></tr>
        <tr><td>%Cgreen</td><td>切换到绿色</td></tr>
        <tr><td>%Cblue</td><td>切换到蓝色</td></tr>
        <tr><td>%Creset</td><td>重设颜色</td></tr>
        <tr><td>%C(…)</td><td>制定颜色, as described in color.branch.* config option</td></tr>
        <tr><td>%m</td><td>left, right or boundary mark</td></tr>
        <tr><td>%n</td><td>换行</td></tr>
        <tr><td>%%</td><td>a raw %</td></tr>
        <tr><td>%x00</td><td>print a byte from a hex code</td></tr>
        <tr><td>%w([&lt;w&gt;[,&lt;i1&gt;[,&lt;i2&gt;]]])</td><td>switch line wrapping, like the -w option of git-shortlog(1).</td></tr>
        </tbody></table>
</div>