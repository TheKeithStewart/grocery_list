var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pantryStaplesSchema = new Schema({
    name: String,
    price: Number
});

module.exports = mongoose.model('pantryStaples', pantryStaplesSchema);