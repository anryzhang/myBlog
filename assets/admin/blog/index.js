/**
 * Created by ziyu on 2017/9/17.
 */
"use strict";

require('./index.scss');

const API = require('./../../apiList');
const $ = require('jquery');


$(function () {

    let J_blogFrom = $(document).find('.J_blogFrom');
    
    let _addBlogData = function (cb) {
        let _data = {
            title:J_blogFrom.find('.J_title').val(),
            picSrc: '',
            summary: J_blogFrom.find('.J_summary').val(),
            content: J_blogFrom.find('.J_content').val()
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
                    J_blogFrom.find('.J_title').val('');
                    J_blogFrom.find('.J_summary').val('');
                    J_blogFrom.find('.J_content').val('');
                    cb&&cb();
                }
            }
        });

    }

    let _getBlogList = function () {

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

                    let J_blogList = $(document).find('.J_blogList');
                    let _html = '';
                    let data = res.result;


                    data.forEach((cur)=>{
                        _html += `<div class="item"><span>${cur.id}</span>
                                <span>${cur.title}</span>
                                <span>${cur.summary}</span>
                                </div>`;
                    })


                    J_blogList.empty().append($(_html));

                }
            }
        });
    }

    _getBlogList();

    J_blogFrom.on('click','.J_save',(e)=>{
        e.preventDefault();
        e.stopPropagation();

        _addBlogData(()=>{
            _getBlogList();
        });
        

    });

});