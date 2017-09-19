/**
 * Created by ziyu on 2017/9/17.
 */
"use strict";

require('./index.scss');

const API = require('./../../apiList');
const $ = require('jquery');

const BlogModule = {
    init() {
        let self = this;
        self.J_blogFrom = $(document).find('.J_blogFrom');
        self.J_blogList = $(document).find('.J_blogList');

        self.result = [];

        self.handleing();
        self.getBlogList();
    },
    handleing() {
        let self = this;
        self.J_blogFrom.on('click', '.J_save', (e) => {
            e.preventDefault();
            e.stopPropagation();

            self.addBlogData(() => {
                self.getBlogList();
            });
        });

        self.J_blogList.on('click', '.J_del', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let id = $(e.currentTarget).attr('data-id');
            self.delBlogItem(id, () => {
                self.getBlogList();
            });

        });

        self.J_blogList.on('click', '.J_update', (e) => {
            e.preventDefault();
            e.stopPropagation();
            let id = $(e.currentTarget).attr('data-objId');
            console.log(id);
            let obj = {};

            for (let key in self.result) {
                if (self.result[key].id == id) {
                    obj = self.deepCopy(self.result[key]);
                    break;
                }
            }

            self.J_blogFrom.find('.J_title').val(obj.title);
            self.J_blogFrom.find('.J_summary').val(obj.summary);
            self.J_blogFrom.find('.J_content').val(obj.content);
            self.J_blogFrom.find('.J_save').attr('data-id', obj.id);
        });

        self.J_blogFrom.on('click', '.J_cancel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            self.J_blogFrom.find('.J_title').val('');
            self.J_blogFrom.find('.J_summary').val('');
            self.J_blogFrom.find('.J_content').val('');
            self.J_blogFrom.find('.J_save').removeAttr('data-id');

        });

    },
    delBlogItem(id, cb) {
        $.ajax({
            url: API.delBlog,
            method: 'post',
            data: {
                id: id
            },
            dataType: 'json',
            success(res) {
                console.log(res);
                if (res.status == 100) {
                    cb && cb();
                }
            }
        })
    },
    addBlogData(cb) {
        let self = this;
        let id = self.J_blogFrom.find('.J_save').attr('data-id');

        let _url = id ? API.updateBlog : API.addBlog;

        let _data = {
            title: self.J_blogFrom.find('.J_title').val(),
            picSrc: '',
            summary: self.J_blogFrom.find('.J_summary').val(),
            content: self.J_blogFrom.find('.J_content').val(),
            id:id
        };

        if (!_data.title || !_data.summary || !_data.content) {

            alert('检查表单内容!');
            return false;
        }

        $.ajax({
            url: _url,
            method: 'post',
            data: _data,
            dataType: 'json',
            success(res) {
                console.log(res);
                if (res.status == 100) {
                    self.J_blogFrom.find('.J_title').val('');
                    self.J_blogFrom.find('.J_summary').val('');
                    self.J_blogFrom.find('.J_content').val('');
                    self.J_blogFrom.find('.J_save').removeAttr('data-id');
                    cb && cb();
                }
            }
        });

    },
    deepCopy(obj) {
        let self = this;
        let result = obj;
        let isArray = Array.isArray;
        let isObject = function (obj) {
            let type = typeof obj;
            return type === 'function' || type === 'object' && !!obj;
        }
        if (isObject(obj)) {
            result = obj;
        }
        if (isArray(obj)) {
            result = obj.slice();
        }
        return result;
    },
    getBlogList() {
        let self = this;
        $.ajax({
            url: API.selectBlog,
            method: 'get',
            data: {
                t: $.now()
            },
            dataType: 'json',
            success(res) {
                // console.log(res);
                if (res.status == 100) {
                    let _html = '';
                    let data = res.result;
                    self.result = res.result;

                    data.forEach((cur) => {
                        _html += `<section class="row_item">
                                    <div class="item">${cur.id}</div>
                                    <div class="item">${cur.title}</div>
                                    <div class="item">${cur.summary}</div>
                                    ${self.returnFun(cur)}
                                </section>`;
                    });

                    self.J_blogList.empty().append($(_html));

                }else if(res.status == 400){
                    location.reload(true);
                }
            }
        });
    },
    returnFun(obj) {
        let self = this;

        if (obj.isOwner) {
            return `<div class="item"> 
                        <span  data-id="${obj.id}" class="J_del fun">删除</span> 
                        <span  data-objId="${obj.id}" class="J_update fun">更新</span>
                    </div>`;
        } else {
            return `<div class="item"></div>`
        }
    }
};

$(function () {

    BlogModule.init();

});