angular
    .module('groceryList')
    .controller('RecipeCtrl', ['$scope', 'recipe', recipeCtrl]);

function recipeCtrl($scope, recipe) {
    $scope.recipe = recipe;
}