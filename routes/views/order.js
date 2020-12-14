var keystone=require('keystone');
var product=keystone.list('product');
var order=keystone.list('product');
exports = module.exports=function(req,res){
    var view=new keystone.view(req,res);
    locals=res.locals;

    view.on('init',function(next){
        var q=keystone.list('order').model.findById(req.param.order_id);
        q.exec(function(err,result){
            locals.order=result;

            next(err);
        });
    });

    view.render('order');
};