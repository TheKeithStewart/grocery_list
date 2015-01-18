var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pantrySchema = {
    name: String,
    inventory: [{
        pantryItem: { type: Schema.Types.ObjectId, ref: 'PantryItem' },
        quantity: Number,
        itemUnit: { type: Schema.Types.ObjectId, ref: 'ItemUnit' }
    }]
};

module.exports = mongoose.model('Pantry', pantrySchema);