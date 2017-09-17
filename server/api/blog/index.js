/**
 * Created by ziyu on 2017/9/17.
 */
"use strict";


const express = require('express');
const router = express.Router();

const DB = require('./../DB');

router.get('/',(req,res)=>{

    let _sess_id = req.session['admin_id'];
    if(!_sess_id){
        res.status(200).json({status:400,msg:'请先登录!'});
        return false;
    }

    DB.query(`select * from blog_table`,(err,result)=>{
        if(err){
            console.log(err);
            res.status(200).json({status:500,msg:'mysql error'});
        }else{

            console.log(result);

            res.status(200).json({status:100,msg:'查询成功',result:result});


        }


    });




});

router.post('/add',(req,res)=>{
   let _sess_id = req.session['admin_id'];
   if(!_sess_id){
       res.status(200).json({status:400,msg:'请先登录!'});
       return false;
   }

   console.log(req.body);


   let title = req.body.title;
   let pic_src = req.body.picSrc;
   let summary = req.body.summary;
   let content = req.body.content;
   let post_time  = (new Date()).getTime();
   let author = req.session['admin_id'];


    console.log(post_time.length);

   if(!title || !summary || !content){
       res.status(200).json({status:300,msg:'字段不能为空!'});
       return false;
   }

   DB.query(`insert into blog_table (title,summary,content,post_time,author)  values ('${title}','${summary}','${content}','${post_time}','${author}')`,(err,result)=>{
      if(err){
          console.log(err);
          res.status(200).json({status:500,msg:'mysql error'});
      } else{

          res.status(200).json({status:100,msg:'blog添加成功',result: {id:result.insertId}});

      }
   });


});

module.exports = router;