angular
    .module('groceryList')
    .factory('pantryItems', [pantryItems]);

function pantryItems() {
    var obj = {
        items: [
            { name: "test1" },
            { name: "test2" },
            { name: "test3" },
            { name: "test4" }
        ]
    };

    return obj;
}