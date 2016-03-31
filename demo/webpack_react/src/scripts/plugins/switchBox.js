/**
 * Created by ziyu on 16/3/27.
 */
import $ from 'jquery';

(function($,undefined){
    const SwitchBox = function(options) {
        this.settings = $.extend({},SwitchBox.defaults,options);
        this.init();
    };
    SwitchBox.defaults = {
        ele:'#J_switchBox',
        list:'.switch-cont',
        btn:'.switch-btn',
        btnAct:'active',
        nextBtn:'.switch-next',
        preBtn:'.switch-pre',
        currentIndex:0,
        imgLen:10,
        autoPlay:null,
        autoTime:3000,
        width:100

    };

    SwitchBox.prototype = {
        init(){
            const self = this;
            self.create();
        },
        create(){
            const self = this;
            self.switchObj = $(self.settings.ele);
            self.settings.width = self.switchObj.width();




            let J_item = self.switchObj.find('.switch-cont li');

            self.settings.imgLen = J_item.length;


            self.switchObj.find(self.settings.list).width(self.settings.imgLen * self.settings.width);

            let btn = '';
            let actClass = '';


            for(let i = 0, len = J_item.length; i < len; i++){

                actClass = (i==0) ? self.settings.btnAct : '';
                btn += '<i  data-index="' + i + '" class="' + actClass + '"></i>';
            }

            self.switchObj.find(self.settings.btn).empty().append(btn);

            let switchBtnML = '-' + self.switchObj.find(self.settings.btn).width()/2 + 'px';
            self.switchObj.find(self.settings.btn).css(self.settings.btn,switchBtnML);


            self.eventHanding();
        },
        eventHanding(){
            const self = this;


            self.autoChange();

            self.switchObj.find(self.settings.nextBtn).hover(function(){
                clearInterval(self.settings.autoChange);
            },function(){
                self.autoChange();
            });

            self.switchObj.find(self.settings.preBtn).hover(function(){
                clearInterval(self.settings.autoChange);
            },function(){
                self.autoChange();
            });

            self.switchObj.on('click',self.settings.nextBtn,function(e){
                e.preventDefault();
                self.settings.currentIndex = (self.settings.currentIndex < self.settings.imgLen - 1) ? (++self.settings.currentIndex) : 0;
                self.changeTo(self.settings.currentIndex);
            });

            self.switchObj.on('click',self.settings.preBtn,function(e){
                e.preventDefault();
               self.settings.currentIndex = (self.settings.currentIndex > 0) ? (--self.settings.currentIndex) : (self.settings.imgLen - 1);
                self.changeTo(self.settings.currentIndex);
            });

            self.switchObj.find(self.settings.btn).find('i').each(function(item){
                $(this).hover(function(){
                    clearInterval(self.settings.autoChange);
                    self.changeTo(item);
                    self.settings.currentIndex = item;
                },function(){
                    self.autoChange();
                });
            });


        },
        autoChange(){
            const self = this;
            self.settings.autoChange = setInterval(function(){



                  if(self.settings.currentIndex < self.settings.imgLen - 1){
                      self.settings.currentIndex ++;
                  }else{
                      self.settings.currentIndex = 0;
                  }

                self.changeTo(self.settings.currentIndex);
            },self.settings.autoTime)

        },
        changeTo(num){
            const self = this;
            let goLeft = num * self.settings.width;



            self.switchObj.find(self.settings.list).animate({
                left: "-" +  goLeft + 'px'

            },100);

            self.switchObj.find(self.settings.btn).find('i').removeClass(self.settings.btnAct).eq(num).addClass(self.settings.btnAct);

        }
    };

    const switchBox = function(options){
        return new SwitchBox(options);

    };

   $.switchBox = switchBox;

})($);