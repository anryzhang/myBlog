/**
 * Created by ziyu on 2017/9/11.
 */
"use strict";
require('./login.scss');
console.log('login');

const $ = require('jquery')
const API = require('./../../apiList');

const loginModule = {
    init(){
       let self = this;
       self.J_loginBox = $(document).find('.J_loginBox');
       self.J_name = self.J_loginBox.find('.J_name');
       self.J_password = self.J_loginBox.find('.J_password');

       self.handleing();
    },
    handleing(){
        let self = this;

        self.J_loginBox.on('click','.J_loginBtn',(e)=>{
            e.stopPropagation();
            console.log(e);
            let _data = {
                name: self.J_name.val(),
                password: self.J_password.val()
            }
            self.fetchData(API.login,'post',_data,(res)=>{
                console.log(res);
            });
        });
    },
    fetchData(url,method,parms,cb){
        method = method || 'get';
        $.ajax({
            url:url,
            method:method,
            data:parms,
            dataType:'json',
            success(res){
               cb&&cb(res);
            },
            error(error){
                cb&&cb(error);
            }
        })
    }
}

$(()=>{
    loginModule.init();
})