/**
 * Created by ziyu on 2017/9/17.
 */
"use strict";
 const express = require('express');

 let router = express.Router();

 router.get('/blog',(req,res)=>{

  res.render('./admin/blog.ejs');

 });

 module.exports = router;