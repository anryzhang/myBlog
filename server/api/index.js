/**
 * Created by ziyu on 2017/9/11.
 * path by
 */
"use strict";

const express = require('express');

let router = express.Router();

router.post('/login',(req,res,next)=>{
    console.log(req.body);
    let _data = {
        name: req.body.name,
        password: req.body.password
    };
    res.json({status:100,msg:'成功',data:_data});


});

module.exports = router;
