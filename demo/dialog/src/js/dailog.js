/**
 * Created by ziyu on 16/3/4.
 */
(function($,undefined){
    var count = 1,
        isLock = false;

    var Dialog = function(options){
        this.settings = $.extend({},Dialog.defaults,options);
        this.init();
    };

    Dialog.defaults = {
        content:'内容',
        title:'tip',
        width:'auto',
        height:'auto',
        maxWidth:'60%',
        ok:null,
        cancel:null,
        okText:'确定',
        cancelText:'取消',
        time:null,
        lock:true,
        zIndex:9999

    };

    Dialog.prototype = {
        init:function(){
            var self = this;
            self.create();
            if(self.settings.lock){
                self.lock();
            }
            if(!isNaN(self.settings.time) && self.settings.time != null){
                self.time();
            }



        },
        create:function(){
            var self = this;
            var divHeaer = (self.settings.title == null)?'':'<div class="dialog-header ' + self.settings.title + '"></div>';
            var temp = ['<div class="dialog-warp">',
                            divHeaer,
                            '<div class="dialog-content">',
                                self.settings.content,
                            '</div>',
                            '<div class="dialog-footer"></div>',
                        '</div>'
            ];
            self.dialog = $('<div>').addClass('dialog').css({
                zIndex:self.settings.zIndex + (count++)
            }).html(temp.join('')).prependTo('body');

            if($.isFunction(self.settings.ok)){
                self.ok();
            }

            if($.isFunction(self.settings.cancel)){
                self.cancel();
            }


            self.size();
            self.position();

        },
        ok:function(){
            var self = this;
            var footer = self.dialog.find('.dialog-footer');
            $('<a>',{
                href:'javascript:;',
                text:self.settings.okText
            }).on('click',function(e){
                e.preventDefault();
                var okCallBack = self.settings.ok();
                if(okCallBack == undefined || okCallBack){
                    self.close();
                }
            }).addClass('dialog-ok').prependTo(footer);

        },
        cancel:function(){
            var self = this;
            var footer = self.dialog.find('.dialog-footer');
            $('<a>',{
                href:'javascript',
                text:self.settings.cancelText
            }).on('click',function(e){
                e.preventDefault();
                var cancelCallback = self.settings.cancel();
                if(cancelCallback == undefined || cancelCallback){
                    self.close();
                }

            }).addClass('dialog-cancel').appendTo(footer);

        },
        size:function(){
            var self = this;
            var content = self.dialog.find('.dialog-content');

            content.css({
                width: self.settings.width,
                height: self.settings.height
            });

        },
        position:function(){
            var self = this;
            var winWidth = $(window).width();
            var winHeight = $(window).height();
            var scrollTop = 0;
            self.dialog.css({
                left:(winWidth - self.dialog.width())/2,
                top:(winHeight - self.dialog.height())/2 + scrollTop

            });
        },
        lock:function(){
            var self = this;
            if(isLock){
                return false;
            }
            self.lock = $('<div>').css({
                zIndex: self.settings.zIndex
            }).addClass('dialog-mask');
            self.lock.appendTo('body');
            isLock = true;


        },
        unlock:function(){
            var self = this;
            if(self.settings.lock){
                if(isLock){
                    self.lock.remove();
                    isLock = false;
                }
            }
        },
        close:function(){
            var self = this;
            self.dialog.remove();
            self.unlock();
        },
        time:function(){
            var self = this;
            self.closeTimer = setTimeout(function(){
                self.close();
            },self.settings.time);
        }

    };

    var objDialog = function(options){
        return new Dialog(options);
    };

    window.Dialog = $.dialog =  objDialog;


})(window.jQuery || window.Zepto);