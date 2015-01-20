angular
    .module('groceryList')
    .controller('RecipesCtrl', ['$scope', 'recipes', recipesCtrl]);

function recipesCtrl($scope, recipes) {
    $scope.recipes = recipes.items;
}