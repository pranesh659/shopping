var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * order Model
 * ==========
 */
var order = new keystone.List('order',{noCreate:true,noEdit:true});

order.add({
    customer: { type: Types.Relationship, ref:'User', many:false, required:true,initial:true},
    products:{type:Types.Relationship, ref:'product',many:true,required:true,initial:true}
});

// Provide access to Keystone



/**
 * Registration
 */
order.defaultSort = '-createdAt';
order.defaultColumns = 'customer, products';
order.register();
