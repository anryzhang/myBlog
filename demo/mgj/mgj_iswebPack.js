/**
 * Created by ziyu on 16/5/11.
 */
;require(['base/MoGu'],function(MoGu){
    // 获取当前时间
    var now = Date.now || function() {
            return new Date().getTime();
        };
    MoGu.getNowTime = now;

    // 判断浏览器是否支持webp 开始
    MoGu.isSupportWebp = false;
    var img = new Image();
    img.onload = function () {
        console && console.log && console.log('该浏览器支持webp');
        var result = (img.width > 0) && (img.height > 0);
        MoGu.isSupportWebp = true;
    };
    img.onerror = function () {
        console && console.log && console.log('该浏览器不支持webp');
        MoGu.isSupportWebp = false;
    };
    img.src = 'data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAsAAAABBxAREYiI/gcAAABWUDggGAAAADABAJ0BKgEAAQABABwlpAADcAD+/gbQAA==';


    // 处理返回正确webpUrl
    MoGu.getWebpUrl = function(imgUrl) {

        // png图片，非jpg和已经是webp的url，直接退出
        if( imgUrl.indexOf('.jpg') < 0 || imgUrl.indexOf('.gif') > 0 || imgUrl.indexOf('.webp') > 0 || imgUrl.indexOf('.png') > 0) return imgUrl;

        // 浏览器不支持，或传入图片为异常值，直接返回源地址
        if(!MoGu.isSupportWebp || !imgUrl ) {
            // 站内原图jpg做转译
            if( imgUrl.indexOf('.jpg_') < 0 && imgUrl.indexOf('.jpg') == (imgUrl.length - 4) ) {
                return imgUrl + '_999x999.v1c0.jpg';
            }
            return imgUrl;
        }

        // 对站内二次转译的jpg图片做格式变化
        if( imgUrl.indexOf('.jpg_') > 0 ) {
            var imgArr = imgUrl.split('.');
            // 最后判断一次是站内jpg
            if( imgArr[imgArr.length-1] == 'jpg' ) {
                imgArr[imgArr.length-1] = 'webp';
                return imgArr.join('.');
            }
        }

        // 站内原图jpg做转译
        if( imgUrl.indexOf('.jpg_') < 0 && imgUrl.indexOf('.jpg') == (imgUrl.length - 4) ) {
            return imgUrl + '_999x999.v1c0.webp';
        }

        return imgUrl;
    };


    // 预渲染容器防止小米bug
    document.body.clientHeight;
    // 是否为浏览器 ios >= 6，android >= 4
    MoGu.isOsHigh = false;
    if (($.os.iphone && $.os.version >= "6") || ($.os.android && $.os.version >= "4")) {
        MoGu.isOsHigh = true;
    }

    // 是否为高级浏览器 ios >= 7，android >= 5
    MoGu.isOsPre = false;
    if (($.os.iphone && $.os.version >= "7") || ($.os.android && $.os.version >= "5")) {
        MoGu.isOsHigh = true;
    }

    var ua = navigator.userAgent.toLowerCase();
    // 判断是否在mogujieApp里
    MoGu.isInMoguApp = ua.indexOf('mogujie') > 0;
    // 判断是否在番茄炒蛋里
    MoGu.isInEggApp = ua.indexOf('go4iphone') > 0 || ua.indexOf('go4android') > 0;
    // 判断是否可用新的native方法
    MoGu.isUseNative = ua.indexOf("nonative") < 0 && ua.indexOf("mogujie") > 0;
    // 判断是否在微信
    MoGu.isWechat = ua.indexOf("micromessenger") > 0;
    // 判断用户是否登入并跳转
    MoGu.login = function() {
        var _url = MoGu.isUseNative ?'mgj://login?a=1': 'http://portal.mogujie.com/login?redirect_url='+encodeURIComponent(location.href);
        window.location.href = _url;
    };

    // 判断是否是ios系统
    MoGu.isIos = $.os.iphone;
    // 给父容器添加ios样式
    if(MoGu.isIos) {
        $('body').addClass('J_ios_wrap');
    }
    // 给父容器添加APP标识
    if(MoGu.isUseNative) {
        $('body').addClass('J_app_wrap');
    }

    // 判断是否支持Sticky
    var _sticky;
    MoGu.isSupportSticky4all = !!((_sticky = $("<div></div>").appendTo($("body"))) && _sticky.css("position","-webkit-sticky") && /sticky/i.test(_sticky.css("position")) && _sticky.remove());
    // 判断是否支持IOS Sticky
    MoGu.isSupportSticky = MoGu.isIos && MoGu.isSupportSticky4all;


    // 获取蘑菇街版本号
    function getMgVersion() {

        if( MoGu.isInMoguApp ) {
            // 匹配url中的_av参数
            var urlParamReg = new RegExp("(^|[\?]|&)_av=([0-9]{3})", "i");
            var urlParamRst = window.location.search.match(urlParamReg);
            if( urlParamRst && urlParamRst[2] > 400 ) {
                return parseInt(urlParamRst[2]);
            }
            // 匹配ua参数
            var uaReg = '';
            var uaRst = '';
            if($.os.iphone) {
                uaReg = new RegExp("(mogujie4iphone).*/([0-9]{3})", "i");
                uaRst = ua.match(uaReg);
                console.log(uaRst);
                if( uaRst && uaRst[2] > 400 ) {
                    return parseInt(uaRst[2]);
                }
            }
            if($.os.android) {
                uaReg = new RegExp("(mogujie4android).*/([0-9]{3})", "i");
                uaRst = ua.match(uaReg);
                if( uaRst && uaRst[2] > 400 ) {
                    return parseInt(uaRst[2]);
                }
            }

        }

        return false;
    }
    // 蘑菇街版本，非蘑菇街内为false
    MoGu.mgVersion = getMgVersion();

    // 7以上的蘑菇街版本
    MoGu.isNewApp = MoGu.mgVersion > 700;

    // app指定class名新view打开link
    MoGu.openLinkView = function(className,parentObj) {
        parentObj = !!parentObj ? parentObj : $('body');
        // androidAPP native替换href 或者是否是番茄炒蛋
        if( (MoGu.isUseNative && MoGu.isNewApp) || MoGu.isInEggApp ) {
            parentObj.on('click', '.'+className , function(event) {
                /* Act on the event */
                var that = $(this);
                var  objUrl = that.attr('href');
                // 如果有保护样式直接退出 或 链接异常
                if(that.hasClass('J_link_protect') || !objUrl ) return false;

                // 不是绝对路径不让转
                if(objUrl.indexOf('http://') < 0 && objUrl.indexOf('https://') < 0 ) return;
                // native映射路径不让跳转
                if(objUrl.indexOf('x6/wall/book') > 0 || objUrl.indexOf('x6/shop') > 0 || objUrl.indexOf('.com/x6/detail') > 0 ) return;
                // 判断链接是否为正常的h5链接
                if( objUrl.indexOf('mgj://') < 0 && objUrl.indexOf('javascript') < 0 ) {
                    if (window.mgj && mgj.navigation && mgj.navigation.pushWindow) {
                        that.addClass('J_link_protect');
                        setTimeout(function(){ that.removeClass('J_link_protect'); },1000);
                        mgj.navigation.pushWindow(encodeURI(objUrl));
                        return false;
                    }
                }
            });
        }
    };

    setTimeout(function(){
        // 固定新开页面样式
        MoGu.openLinkView('J_open_window_cube');
    },100);

    // 直接触发打开新页面
    MoGu.openUrl = function(url) {
        if( MoGu.isUseNative && MoGu.isNewApp ) {
            window.location.href = 'mgj://web?url=' + encodeURIComponent(url);
        } else {
            window.location.href = url;
        }
    }

});

