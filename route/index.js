/**
 * Created by ziyu on 2017/9/8.
 */
"use strict";
 module.exports = function (app) {
     let index = require('./web/index');
     app.use(['/','/index'],index());


     app.get('/user/:id',function (req,res) {
         res.json({status:200,msg:'成功',id:req.params.id});
     })

     let admin = require('./admin/login');
     app.use('/admin',admin);
 }