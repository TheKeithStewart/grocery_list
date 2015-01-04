var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pantryItemSchema = {
    name: String,
    price: Number
};

module.exports = mongoose.model('PantryItem', pantryItemSchema);