var express = require('express');
var router = express.Router();

var PantryStaples = require("./pantryStaples");
var GroceryList = require("./groceryList");

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {
        title: 'Grocery List'
    });
});

router.get('/groceryList', function(req, res) {
    GroceryList.findOne({title: {$exists: true}}, function(err, groceryList) {
        if (err) {
            res.status(500).json({status: 'failure'});
        }
        res.json(groceryList);
    });
});

router.get('/pantryStaples', function (req, res) {
    PantryStaples.find({name: {$exists: true}}, function(err, results) {
        if (err) {
            res.status(500).json({status: 'failure'});
        } else {
            if (results.length === 0) {
                var item1 = new PantryStaples({
                    name:   "Item 1",
                    price:  2.99
                });
                item1.save(function(err) {
                    if (err) {
                        res.status(500).json({status: 'failure'});
                    }
                });
                var item2 = new PantryStaples({
                    name:   "Item 2",
                    price:  3.99
                });
                item2.save(function(err) {
                    if (err) {
                        res.status(500).json({status: 'failure'});
                    }
                });
                var item3 = new PantryStaples({
                    name:   "Item 3",
                    price:  4.99
                });
                item3.save(function(err) {
                    if (err) {
                        res.status(500).json({status: 'failure'});
                    }
                });
                res.send([item1, item2, item3]);
            } else {
                res.send(results);
            }
        }
    });
});

router.post("/addFromStaples", function (req, res) {
    var newListItems = req.body.newListItems;
    if (newListItems) {
        var list;
        // check if a grocery list exists
        GroceryList.findOne({title: {$exists: true}}, function(err, groceryList) {
            if (err) {
                res.status(500).json({status: 'failure'});
            }
            if (groceryList) {
                list = groceryList;
            } else {
                list = new GroceryList({
                    title: "Grocer List"
                });
                list.save(function(err) {
                    if (err) {
                        res.status(500).json({status: 'failure'});
                    }
                });
            }
        });
        newListItems.forEach(function(item) {
            PantryStaples.findOne({_id: item}, function (err, staple) {
                if (err) {
                    res.status(500).json({status: 'failure'});
                }
                list.update({$push: {listItems: staple}}, function(err, data) {
                    if (err) {
                        res.status(500).json({status: 'failure'});
                    }
                    res.json(data);
                });
            })
        });
    }
});

module.exports = router;