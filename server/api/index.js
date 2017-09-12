/**
 * Created by ziyu on 2017/9/11.
 * path by
 */
"use strict";

const express = require('express');
const DB = require('./DB');
const util = require('./util');

let router = express.Router();
router.post('/login',(req,res,next)=>{
    // console.log(req.body);
    let _data = {
        name: req.body.name,
        password: util.md5(req.body.password)
    };
    if(!req.body.name || !req.body.password){
        res.status(200).json({status:400,msg:'name and password is required'});
        return false;
    }
    DB.query(`select * from admin_table where username = '${_data.name}'`,function(err,result){
        if(err){
            res.status(200).json({status:500,msg:'mysql error'});
        }else{
            let isUser = false;
            let id = '';
            for(let key in result){
                if(result[key].username == _data.name && result[key].password == _data.password){
                    isUser = true;
                    id = result[key].id;
                    break;
                }
            }

            if(isUser){
                req.session['admin_id'] = id;
                res.json({status:100,msg:'成功',data:_data,url:'/admin'});
            }else{
                res.status(200).json({status:300,msg:'账户不存在!'});
            }
        }

    });

});

router.post('/loginOut',(req,res)=>{
    let _sess_id = req.session['admin_id'];
    if(_sess_id){
        delete req.session['admin_id'];
        res.status(200).json({status:100,msg:'退出登录成功'});
    }
});

module.exports = router;
