/**
 * Created by ziyu on 16/4/8.
 */

import $ from 'jquery';

(function ($) {
    "use strict";

    const SearchPageModule = {
        init(){
            const self = this;


            self.J_searchInput = $('.J_searchInput');
            self.J_returnPage = $('.J_returnPage');//返回history


            self.J_historyBar = $('.J_historyBar');
            self.J_cleanHistory = self.J_historyBar.find('.J_cleanHistory'); // 清除

            self.localData = self.getAllData() || [];

            self.eventHanding();

        },
        eventHanding(){
            const self = this;

            self.renderHistory();

            self.J_searchInput.on('blur', (e) => {

                self.saveData();
            });

            self.J_returnPage.on('click', (e) => {
                e.preventDefault();
                window.history.back();
            });

            self.J_cleanHistory.on('click', (e)=> {
                e.preventDefault();

                self.cleanData();
            });


        },
        renderHistory(){
            const self = this;

            let _html = '';
            if(self.localData.length){
                let arr = self.localData.reverse();
                for(var i = 0,len = arr.length; i < len; i++){
                    _html += '<li><a href="">'+ arr[i].title +'</a></li>';
                }
                self.J_historyBar.find('ul').empty().append(_html);
            }

        },
        cleanData(){
            const self = this;
            localStorage.clear();
            let _str = '<li class="tips">已清空历史搜索</li>';
            self.J_historyBar.find('ul').empty().append(_str);
        },
        saveData(cb){
            const self = this;

            let _arr = localStorage.HGJ || [];
            let _item = {};

            let _val = $.trim(self.J_searchInput.val());
            if (!_val) {
                return false;
            }

            if (typeof _arr == 'string') {
                _arr = JSON.parse(_arr);
            } else {
                if (!localStorage.HGJ) {
                    _item = {
                        title: _val
                    };
                    _arr.push(_item);
                }

            }

            _item = {
                title: _val
            };

            _arr.push(_item);

            _arr = self.unique(_arr);

            localStorage.setItem('HGJ', JSON.stringify(_arr));


            if (cb) {
                cb();
            }

        },
        unique(array){
            const self = this;

            let obj = [];
            for (var i = 0, l = array.length; i < l; i++) {
                for (var j = i + 1; j < l; j++) {
                    if (array[i].title === array[j].title) {
                        j = ++i;
                    }
                }

                obj.push(array[i]);
            }
            return obj;
        },
        getAllData(){
            const self = this;

            let _obj=[];
            if (localStorage.length > 0) {
                if(localStorage.HGJ){
                    _obj = JSON.parse(localStorage.HGJ);
                }
            }

            return _obj;
        }

    };

    $(function () {
        SearchPageModule.init();
    });

})($);
