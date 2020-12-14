var keystone=require('keystone');
var product=keystone.list('product');
exports=module.exports=function(req,res){

    var view=new keystone.View(req,res);
    var locals=res.locals;

    locals.selection='mycart';
    locals.title='mycart';

    locals.products=req.session.cart;
    view.render('mycart');
};