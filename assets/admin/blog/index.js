/**
 * Created by ziyu on 2017/9/17.
 */
"use strict";

require('./index.scss');

const API = require('./../../apiList');
const $ = require('jquery');

const BlogModule = {
    init(){
        let self = this;
        self.J_blogFrom = $(document).find('.J_blogFrom');
        self.J_blogList = $(document).find('.J_blogList');


        self.handleing();
        self.getBlogList();
    },
    handleing(){
        let self = this;
        self.J_blogFrom.on('click','.J_save',(e)=>{
            e.preventDefault();
            e.stopPropagation();

            self.addBlogData(()=>{
                self.getBlogList();
            });
        });

        self.J_blogList.on('click','.J_del',(e)=>{
            e.preventDefault();
            e.stopPropagation();
            let id = $(e.currentTarget).attr('data-id');
            self.delBlogItem(id,()=>{
                self.getBlogList();
            });

        })

    },
    delBlogItem(id,cb){
        $.ajax({
            url:API.delBlog,
            method:'post',
            data:{
                id:id
            },
            dataType:'json',
            success(res){
                console.log(res);
                if(res.status == 100){
                    cb&&cb();
                }
            }
        })
    },
    addBlogData(cb){
        let self = this;
        let _data = {
            title:self.J_blogFrom.find('.J_title').val(),
            picSrc: '',
            summary: self.J_blogFrom.find('.J_summary').val(),
            content: self.J_blogFrom.find('.J_content').val()
        };

        if(!_data.title || !_data.summary || !_data.content ){

            alert('检查表单内容!');
            return false;
        }

        $.ajax({
            url: API.addBlog,
            method: 'post',
            data: _data,
            dataType:'json',
            success(res){
                console.log(res);
                if(res.status == 100){
                    self.J_blogFrom.find('.J_title').val('');
                    self.J_blogFrom.find('.J_summary').val('');
                    self.J_blogFrom.find('.J_content').val('');
                    cb&&cb();
                }
            }
        });

    },
    getBlogList(){
        let self = this;
        $.ajax({
            url: API.selectBlog,
            method:'get',
            data:{
                t:$.now()
            },
            dataType: 'json',
            success(res){
                console.log(res);
                if(res.status == 100){
                    let _html = '';
                    let data = res.result;
                    data.forEach((cur)=>{
                        _html += `<div class="item">
                                <span>${cur.id}</span>
                                <span>${cur.title}</span>
                                <span>${cur.summary}</span>
                                ${self.returnFun(cur)}
                                </div>`;
                    });

                    self.J_blogList.empty().append($(_html));

                }
            }
        });
    },
    returnFun(obj){
        let self = this;
        if(obj.isOwner){
            return `<span data-id="${obj.id}" class="J_del fun">删除</span>`;
        }else{
            return `<span></span>`
        }
    }
};

$(function () {

    BlogModule.init();

});