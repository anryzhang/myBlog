module.exports = function (app) {
    app.use('/', require('./web'));
    app.use('/admin',require('./admin'))

    app.use('/user/:id',(req,res)=>{
        res.json({status:200,msg:'成功',id:req.params.id});
    });
};
