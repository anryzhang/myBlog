/**
 * Created by ziyu on 2017/9/12.
 * path by
 */
"use strict";

const $ = require('jquery');
const API = require('./../../apiList');

const adminIndexModule = {
    init(){
        let self = this;
        self.J_loginOut = $(document).find('.J_loginOut');
        self.handleing();
    },
    handleing(){
        let self = this;
        self.J_loginOut.on('click',(e)=>{
            e.stopPropagation();
            $.ajax({
                url: API.loginOut,
                method: 'post',
                success(res){
                    console.log(res);
                    if(res.status == 100){
                        location.reload(true);
                    }
                }
            })
        });
    }
};

$(()=>{
    adminIndexModule.init();
})