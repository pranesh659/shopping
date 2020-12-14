var keystone=require('keystone');

exports =module.exports=function(req,res){
    var view=new keystone.View(req,res);
    locals=res.locals;
    locals.section='product';

    view.on('init',function(next){
        var q=keystone.list('product').model.findById(req.param.product_id);
        q.exec(function(err,result){
            locals.product=result;
            next(err);
        });

    });
    view.render('product');
};