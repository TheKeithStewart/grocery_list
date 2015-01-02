var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pantrySchema = {
    name: String,
    inventory: {

    }
};

module.exports = mongoose.model('Pantry', pantrySchema);