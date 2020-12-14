var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * product Model
 * ==========
 */
var product = new keystone.List('product');

product.add({
	name: { type: Types.Text, required: true, index: true, initial:true },
	price: { type: Types.Number, initial: true, required: true },
	description: { type: String}
});

// Provide access to Keystone



/**
 * Registration
 */
product.defaultSort = '-createdAt';
product.defaultColumns = 'name, price,description';
product.register();
