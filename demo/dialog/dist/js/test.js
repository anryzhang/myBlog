/**
 * Created by ziyu on 16/3/4.
 */

(function($){


    $(function(){
        $('.J_demo1').on('click',function(e){
            $.dialog({
                content:'test 的内容,不设置宽度,自动换行test 的内容,不设置宽度,自动换行test 的内容,不设置宽度,自动换行',
                ok:function(e){
                    console.log('ok');
                    return true;
                },
                cancel:function(){
                    console.log('cancel');
                }
            });
        });

        $('.J_demo2').on('click',function(e){
            $.dialog({
                content:'test 3秒 关闭',
                time:3000
            });
        });

        $('.J_demo3').on('click',function(e){
            $.dialog({
                ok:function(){
                    return true;
                }

            });
        });

    })
})(window.jQuery || window.Zepto);
