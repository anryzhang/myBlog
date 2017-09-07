/**
 * Created by ziyu on 2017/9/7.
 */
"use strict";

const express = require('express');

let index = function () {
    let router = express.Router();
    router.get(['/','/index'],(req,res)=> {
        res.cookie('sess_id','tt',{maxAge:20*60*1000,httpOnly:true});
        res.render('./web/index',{title:'index.page'});
    });

    return router;


}

module.exports = index;