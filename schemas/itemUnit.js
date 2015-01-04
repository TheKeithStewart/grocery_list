var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemUnitSchema = {
    name: String
};

module.exports = mongoose.model('ItemUnit', itemUnitSchema);