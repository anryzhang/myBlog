/**
 * Created by anry on 2015/7/6.
 */
(function($){
    var Module = {
        init:function(){
            var self = this;

            self.size = 10;
            self.num = 2;

            self.EventHanding();
        },
        EventHanding:function(){
            var self = this;

            $(window).on('scroll',function(e){
                self.getValue();
            })
        },
        getValue:function(){
            var self = this;
            self.size++;
            console.log(self.size);
        }

    };

    $(function(){
        Module.init();

    })
})(jQuery)