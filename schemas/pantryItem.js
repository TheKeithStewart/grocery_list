var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pantrySchema = {
    name: String,
    price: Number
};

module.exports = mongoose.model('PantryItem', pantrySchema);