angular
    .module('groceryList')
    .controller('PantryCtrl', ['$scope', 'pantryItems', pantryCtrl]);

function pantryCtrl($scope, pantryItems) {
    $scope.pantryItems = pantryItems.items;
}