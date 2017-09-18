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

            result.forEach((cur)=>{
                cur.post_time = (new Date(cur.post_time)).getTime();
                if(cur.author == _sess_id){
                    cur.isOwner = true;
                }else{
                    cur.isOwner = false;
                }
            });
            res.status(200).json({status:100,msg:'查询成功',result:result});

        }

    });

});

let getTime = function () {
    let checkLength = function(part) {
        return (part < 10) ? '0' + part : part;
    };

    let date = new Date(),
        year = date.getFullYear(),
        month = checkLength(date.getMonth() + 1),
        day = checkLength(date.getDate()),
        hour = checkLength(date.getHours()),
        minute = checkLength(date.getMinutes()),
        second = checkLength(date.getSeconds());

    return  year + '-' + month + '-' + day +' ' + hour + ':' + minute + ':' + second;
}

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
   let post_time = getTime();
   let author = req.session['admin_id'];

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

router.post('/del',(req,res)=>{
    let _sess_id = req.session['admin_id'];
    if(!_sess_id){
        res.status(200).json({status:400,msg:'请先登录!'});
        return false;
    }
    let id = req.body.id;
    DB.query(`delete from blog_table where id= '${id}'`,(err,result)=>{
       if(err){
           console.log(err);
           res.status(200).json({status:500,msg:'mysql error'});
       }else{
           res.status(200).json({status:100,msg:'删除成功',result:result});
       }
    });

})

module.exports = router;