/**
 * Created by ziyu on 2017/9/8.
 */
"use strict";

const express = require('express');

let router = express.Router();

// router.use((req, res, next) => {
//     console.log(req.session);
//     if (!req.session['admin_id']) {
//         res.redirect('/admin/login');
//     } else {
//         next();
//     }
// });

router.get('/',(req,res)=>{
    res.render('./admin/index',{title:'登录'});
})

router.get('/login', (req, res) => {
    res.render('./admin/index', {title: '登录'});
});

module.exports = router;