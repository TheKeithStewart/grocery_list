angular
    .module('groceryList')
    .factory('groceryListItems', [groceryListItems]);

function groceryListItems() {
    var obj = {
        items: []
    }
}