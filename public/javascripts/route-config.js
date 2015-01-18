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
        }).state('pantry', {
            url: '/pantry',
            templateUrl: '/pantry.html',
            controller: 'PantryCtrl'
        });

    $urlRouterProvider.otherwise('home');
}