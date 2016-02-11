/**
 * Created by anry on 2015/7/8.
 */
(function($){
    $(function(){
        $('#J_test').on('touchstart',function(e){
            var ua = window.navigator.userAgent;
            var cw = $(window).width();
            var ch = $(window).height();
            var bw = $(document).width();
            var bh = $(document).height();
            alert("cw:" + cw + ' ch:' + ch + ' bw:' + bw + ' bh:' + bh);

        });

        $('li').add('span').css('background-color', 'red');
        $('li').css({
            backgroundColor:'green'
        })
        var li = $('li');
        $.each(li,function(index,item){
            console.log(index,item);
            $(item).html($(this).html() + index);
        });
        $('ul').addClass('t1').after('<div>testds</div>').append('<li>ts</li>')
        console.log($($('li').get(0)).css('background-color','red'));

        console.log($('ul').hasClass('t1'))
    })
})(Zepto);