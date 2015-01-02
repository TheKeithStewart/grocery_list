var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var groceryListSchema = new Schema({
    title: String,
    listItems: [{
        name: String,
        price: Number
    }]
});

module.exports = mongoose.model('GroceryList', groceryListSchema);