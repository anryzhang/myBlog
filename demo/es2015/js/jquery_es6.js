/**
 * Created by ziyu on 2016/2/12.
 */

(function($){

    function printInfo(){
        $('#info').append(`<p>测试</p>`)
    }

    printInfo();

    function* hexRange(start,stop,step){
        for(var i = start;i<stop;i+step){
            yield i;
        }
    }

    function printColors(){
        var content = $('#content');
        for(var hex of hexRange(900,999,10)){
            var newDiv = $('<div>').attr('class','color').css({'background-color':`#${hex}`})
                .append(`hex code:#${hex}`);
            content.append(newDiv);
        }
    }

    $(function(){
        printColors();
    })
})(jQuery);