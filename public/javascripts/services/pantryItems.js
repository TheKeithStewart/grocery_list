angular
    .module('groceryList')
    .factory('pantryItems', [pantryItems]);

function pantryItems() {
    var obj = {
        items: [
            {
                name: "Rice",
                quantity: 1,
                unit: "pkg"
            },
            {
                name: "Item 2",
                quantity: 0.5,
                unit: "cups"
            },
            {
                name: "test3"
            },
            {
                name: "test4"
            }
        ]
    };

    return obj;
}