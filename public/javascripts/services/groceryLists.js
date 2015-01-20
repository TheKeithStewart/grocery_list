angular
    .module('groceryList')
    .factory('groceryLists', [groceryLists]);

function groceryLists() {
    var obj = {
        items: []
    }
}