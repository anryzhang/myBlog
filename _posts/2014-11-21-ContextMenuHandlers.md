---
layout: post
title: 右键菜单 ContextMenuHandlers
description: ContextMenuHandlers.
keywords: 右键菜单,ContextMenuHandlers.
---


<div class="entry-content clearfix">
    <h2>ContextMenuHandlers</h2>

            <pre class=" language-bash">
            #container {
                text-align : center;
                width : 500px;
                height : 500px;
                border : 1px solid blue;
                margin : 0 auto;

            }
            .skin {
                width : 100px;
                border : 1px solid gray;
                padding : 2px;
                visibility : hidden;
                position : absolute;
            }
            div.menuitems {
                margin : 1px 0;
            }
            div.menuitems a {
                text-decoration : none;
            }
            div.menuitems:hover {
                background-color : #c0c0c0;
            }
            </pre>
            <pre class=" language-bash">

            window.onload = function() {

                var EventHandler = (function(){
                    return {
                        cancelBubble:function(){
                            event.cancelBubble = true
                            event.returnValue = false;
                            return false
                        },
                        addListener:function(el,type,fn){
                            el.addEventListener? el.addEventListener(type, fn,false):el.attachEvent( 'on' + type,fn);
                        }
                    }
                })();

                var container = document.getElementById('container');
                var menu = document.getElementById('menu');

                /*显示菜单*/
                function showMenu() {

                    var evt = window.event || arguments[0];

                    /*获取当前鼠标右键按下后的位置，据此定义菜单显示的位置*/
                    var rightedge = container.clientWidth-evt.clientX;
                    var bottomedge = container.clientHeight-evt.clientY;

                    /*如果从鼠标位置到容器右边的空间小于菜单的宽度，就定位菜单的左坐标（Left）为当前鼠标位置向左一个菜单宽度*/
                    if (rightedge < menu.offsetWidth)
                        menu.style.left = container.scrollLeft + evt.clientX - menu.offsetWidth + "px";
                    else
                    /*否则，就定位菜单的左坐标为当前鼠标位置*/
                        menu.style.left = container.scrollLeft + evt.clientX + "px";

                    /*如果从鼠标位置到容器下边的空间小于菜单的高度，就定位菜单的上坐标（Top）为当前鼠标位置向上一个菜单高度*/
                    if (bottomedge < menu.offsetHeight)
                        menu.style.top = container.scrollTop + evt.clientY - menu.offsetHeight + "px";
                    else
                    /*否则，就定位菜单的上坐标为当前鼠标位置*/
                        menu.style.top = container.scrollTop + evt.clientY + "px";

                    /*设置菜单可见*/
                    menu.style.visibility = "visible";
                    EventHandler.addListener(menu,"contextmenu",EventHandler.cancelBubble);
                }
                /*隐藏菜单*/
                function hideMenu() {
                    menu.style.visibility = 'hidden';
                }
                EventHandler.addListener(container,"contextmenu",EventHandler.cancelBubble);
                EventHandler.addListener(container,"contextmenu",showMenu);
                EventHandler.addListener(document,"click",hideMenu);
            }
            </pre>

        <pre class=" language-bash">

        &lt;div id="menu" class="skin"&gt;
            &lt;div class="menuitems"&gt;
                &lt;a href="javascript:history.back();">后退 &lt;/a&gt;
            &lt;/div>
            &lt;div class="menuitems"&gt;
                &lt;a href="javascript:history.back();">前进 &lt;/a&gt;
            &lt;/div&gt;

        &lt;/div&gt;

         &lt;div id="container"&gt;
             &lt;p&gt;右键此区域 &lt;/p&gt;
                    &lt;/div&gt;
    </pre>

</div>