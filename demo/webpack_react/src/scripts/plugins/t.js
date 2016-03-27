/**
 * Created by ziyu on 16/3/27.
 */


(function ($, undefined) {

    var Dialog = function (options) {
        this.settings = $.extend({}, Dialog.defaults, options);
        this.init();
    };

    Dialog.defaults = {
        screen: '.J_hydScreen',
        listBox: '.J_hydList',
        url: '',
        data: {
            "itemLib.title": '',
            "itemLib.barcode": '',
            currentPage: 0,
            pageSize: 12
        },
        type: 'get',
        ok: null,
        cancel: null,
        resData: [],
        content: [],
        totalPage: 0
    };

    Dialog.prototype = {
        init: function () {
            var self = this;
            self.getListData();

        },
        getListData: function (cb) {
            var self = this;
            $.ajax({
                url: self.settings.url,
                type: self.settings.type,
                data: self.settings.data,
                dataType: 'json',
                success: function (rs) {
                    if (rs && rs.status == 200) {
                        self.settings.content = rs.data;
                        self.settings.totalPage = rs.data[0].totalPage;
                        var _html = '';
                        for (var i = 0, len = rs.data.length; i < len; i++) {
                            _html += '<dl class="J_item bor_non">' +
                                '<dt>' +
                                '<img src="http://img001.meitianhui.com/' + rs.data[i].itemLib.sUrl + '" alt="">' +
                                '</dt>' +
                                '<dd>' + rs.data[i].itemLib.title + '</dd>' +
                                '</dl>';

                        }

                        self.settings.totalPage = rs.data[0].totalPage;

                        self.create(_html);

                        var J_imgCont = self.dialog.find('.J_item');
                        for (var j = 0; j < J_imgCont.length; j++) {
                            J_imgCont.eq(j).data('data', rs.data[j]);
                        }

                        if (cb) {
                            cb();
                        }
                    }
                },
                error: function (jx, ts, err) {
                    console.log(err);
                }
            });
        },
        create: function (html) {
            var self = this;

            var screen = '<div class="J_hydScreen screen"></div>';
            var temp = [
                screen,
                '<div class="J_hydList list">',
                '<p class="title">选择商品</p>',
                '<p class="cou"><label class="s-label">标题</label> <input type="text" placeholder="输入标题" class="J_hydSearchT1"><label class="s-label">条形码</label><input type="text" class="J_hydSearchT2" placeholder="输入条形码"> <button class="J_hydSearchBtn">搜索</button>',
                ' <a href="#" class="J_PageNext">下一页</a><span class="J_PagePre"></span>',
                '</p>',
                '<div class="J_imgCont img_cou">',
                html,
                '</div>',
                '<p class="btn_cou">',
                '<button type="reset" class="J_reset reset">取消</button>',
                '<button class="J_mSure msure">确定</button>',
                '<span>(已选择<i class="J_num">0</i>款商品)</span>',
                '</p>',
                '</div>'

            ];

            $('body').append(temp.join(''));

            self.dialog = $(self.settings.listBox);
            self.dialog.show();
            $(self.settings.screen).show();
            if ($.isFunction(self.settings.ok)) {
                self.ok();
            }

            if ($.isFunction(self.settings.cancel)) {
                self.cancel();
            }

            self.eventHanding();

        },
        eventHanding: function () {
            var self = this;

            self.dialog.on('click', '.J_item', function (e) {
                e.preventDefault();

                var _num = Number(self.dialog.find('.J_num').html());
                if ($(this).hasClass('bor_ff50')) {
                    $(this).removeClass('bor_ff50');
                    $(this).addClass('bor_non');
                    _num--;
                    self.dialog.find('.J_num').html(_num);
                } else {
                    $(this).removeClass('bor_non');
                    $(this).addClass('bor_ff50');
                    _num++;
                    self.dialog.find('.J_num').html(_num);
                }
                self.getCheckData();
            });

            //下一页
            self.dialog.on('click', '.J_PageNext', function (e) {
                e.preventDefault();
                var _data = {
                    "itemLib.title": (function () {
                        var _str = $.trim(self.dialog.find('.J_hydSearchT1').val());
                        return _str ? _str : '';
                    })(),
                    "itemLib.barcode": (function () {
                        var _str = $.trim(self.dialog.find('.J_hydSearchT2').val());
                        return _str ? _str : '';
                    })(),
                    currentPage: ++self.settings.data.currentPage,
                    pageSize: 12
                };

                if (_data.currentPage > self.settings.totalPage) {
                    return false;
                }

                self.getPageData(_data, self.settings.type, self.settings.url)

            });
            //上一页
            self.dialog.on('click', '.J_PagePre', function (e) {
                e.preventDefault();
                var _data = {
                    "itemLib.title": (function () {
                        var _str = $.trim(self.dialog.find('.J_hydSearchT1').val());
                        return _str ? _str : '';
                    })(),
                    "itemLib.barcode": (function () {
                        var _str = $.trim(self.dialog.find('.J_hydSearchT2').val());
                        return _str ? _str : '';
                    })(),
                    currentPage: --self.settings.data.currentPage,
                    pageSize: 12
                };

                if (_data.currentPage < 0) {
                    return false;
                }

                self.getPageData(_data, self.settings.type, self.settings.url)

            });

            //搜索
            self.dialog.on('click', '.J_hydSearchBtn', function (e) {
                e.preventDefault();
                var _data = {
                    "itemLib.title": (function () {
                        var _str = $.trim(self.dialog.find('.J_hydSearchT1').val());
                        return _str ? _str : '';
                    })(),
                    "itemLib.barcode": (function () {
                        var _str = $.trim(self.dialog.find('.J_hydSearchT2').val());
                        return _str ? _str : '';
                    })(),
                    currentPage: self.settings.data.currentPage = 0,
                    pageSize: 12
                };

                self.getPageData(_data, self.settings.type, self.settings.url)

            });


        },
        getPageData: function (data, type, url, cb) {
            var self = this;

            $.ajax({
                url: url,
                data: data,
                type: type,
                success: function (rs) {

                    if (rs.status == 200 && rs.data.length) {
                        self.renderHtml(rs.data);
                        self.settings.totalPage = rs.data[0].totalPage;
                    }
                    if (cb) {
                        cb(rs.data);
                    }
                }

            });

        },
        renderHtml(rs){
            const self = this;
            var _html = '';
            for (var i = 0, len = rs.length; i < len; i++) {
                _html += '<dl class="J_item bor_non">' +
                    '<dt>' +
                    '<img src="http://img001.meitianhui.com/' + rs[i].itemLib.sUrl + '" alt="">' +
                    '</dt>' +
                    '<dd>' + rs[i].itemLib.title + '</dd>' +
                    '</dl>';

            }


            self.dialog.find('.J_num').html(0);
            self.dialog.find('.J_imgCont').empty().append(_html);


            var J_imgCont = self.dialog.find('.J_item');
            for (var j = 0; j < J_imgCont.length; j++) {
                J_imgCont.eq(j).data('data', rs[j]);
            }


        },
        getCheckData: function () {
            var self = this;
            var J_selectEle = self.dialog.find('.bor_ff50');
            var _item = [];
            for (var i = 0, len = J_selectEle.length; i < len; i++) {
                _item.push(J_selectEle.eq(i).data('data'));
            }
            self.settings.resData = _item;

        },
        ok: function () {
            var self = this;

            self.dialog.on('click', '.J_mSure', function (e) {
                e.preventDefault();
                var okCallBack = self.settings.ok;
                if (okCallBack == undefined || okCallBack) {
                    self.settings.ok(self.settings.resData);
                    self.close();
                }
            });


        },
        cancel: function () {
            var self = this;

            self.dialog.on('click', '.J_reset', function (e) {
                e.preventDefault();
                var cancelCallback = self.settings.cancel();
                if (cancelCallback == undefined || cancelCallback) {
                    self.close();
                }

            });

        },
        close: function () {
            var self = this;
            self.dialog.remove();
            $(self.settings.screen).remove();
        }

    };

    var objDialog = function (options) {
        return new Dialog(options);
    };

    window.hydDialog = $.hydDialog = objDialog;


})(window.jQuery);

