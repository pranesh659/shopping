var keystone = require('keystone');
//var User=keystone.list('User');
var order=keystone.list('order');

exports = module.exports = function (req, res) {

    var view = new keystone.View(req, res);
    if(req.User=undefined){
        view.render("error/404");
        return;
    }
    console.log("login user:"+req.User.email);

	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
    locals.section = 'myorders';
    locals.title='myorders';

    view.on('init',function(next){
        order.paginate({
            page:req.query.page||1,
            perPage:2,
            maxPage:10,
        })
        .where('customer', req.User.id)
        .sort('-publishedDate')
        .exec(function(err,res){
            locals.orders=res;
            next(err);

        });

    });

	// Render the view
    view.render('myorders');
    
};
