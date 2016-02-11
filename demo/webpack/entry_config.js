/**
 * Created by ziyu on 2016/2/10.
 */
(function(){
    //require("!style!css!./style.css");
    require('./style.css');
    require('./test.scss');
    var $ = require('jQuery');

    document.write('it works');
   var content = require('./content.js');
    console.log(content);
    document.write(content);
    console.log(1);

    //var img = document.createElement('img');
    //img.src = require('./images/tel.jpg');
    var myModule = {
        init:function(){
            var self = this;
            self.J_body = $('body');

            self.eventHanding();
        },
        eventHanding:function(){
            var self = this;
            self.J_body.on('click',function(e){
                console.log(e.currentTarget)
            });
        }
    };
    $(function(){
        myModule.init();
    });
})();