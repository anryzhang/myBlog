/**
 * Created by ziyu on 2017/9/7.
 */
"use strict";

const  express = require('express');


let router = express.Router();

//检查登录
router.use((req,res,next)=>{
    // console.log(req);
    if(!req.session['admin_id'] && req.url != '/login'){
        res.redirect('/admin/login');
    }else{
        next();
    }
})

router.get('/login',(req,res)=>{
    res.render('./admin/login.ejs',{title:'登录'})
});


module.exports = router;