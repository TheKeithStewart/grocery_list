angular
    .module('groceryList')
    .controller('RecipesCtrl', ['$scope', recipesCtrl]);

function recipesCtrl($scope) {
    $scope.test = "recipes scope";
}