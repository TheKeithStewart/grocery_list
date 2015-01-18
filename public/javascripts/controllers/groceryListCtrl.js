angular
    .module('groceryList')
    .controller('GroceryListCtrl', ['$scope', groceryListCtrl]);

function groceryListCtrl($scope) {
    $scope.test = "Grocery List scope";
}