var keystone=require('keystone');
const { update } = require('lodash');
const mycart = require('./mycart');

var Order=keystone.list('orders');
exports=module.exports=function(req,res){

    var view=new keystone.View(req,res);
    var locals=res.locals;

    if(req.session.cart!=undefined){
        mycart_pro_ids=[];
        req.session.cart.forEach(function(product) {
            mycart_pro_ids.push(product._id);
            
        });

        var newOrder=Order.model({customer: req.user.id.products, mycart_pro_ids,})
        updater = newOrder.getUpdateHandler(req,res, {
            errorMessage: 'There was an error creating your orders'
            
        });
        updater.process(req,body,{
            flashErrors: true,
            logErrors: true,
        }, function(err){
            if(err){
                //locals.validationErrors=err.errors;
            }else{
                req.session.cart=[];
                res.redirect('/myorders')
            }
        });
    }else{
        res.redirect('/');
    }
};