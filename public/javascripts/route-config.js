angular
    .module('groceryList')
    .config(['$stateProvider', '$urlRouterProvider', groceryListConfig]);

function groceryListConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '/home.html',
            controller: 'MainCtrl'
        }).state('groceryList', {
            url: '/groceryList',
            templateUrl: '/groceryList.html',
            controller: 'GroceryListCtrl'
        }).state('recipes', {
            url: '/recipes',
            templateUrl: '/recipes.html',
            controller: 'RecipesCtrl'
        }).state('recipe', {
            url: '/recipe/{id}',
            templateUrl: '/recipe.html',
            controller: 'RecipeCtrl',
            resolve: {
                recipe: ['$stateParams', 'recipes', function ($stateParams, recipes) {
                    return recipes.items[$stateParams.id];
                }]
            }
        }).state('pantry', {
            url: '/pantry',
            templateUrl: '/pantry.html',
            controller: 'PantryCtrl'
        });

    $urlRouterProvider.otherwise('home');
}