angular
    .module('groceryList')
    .controller('MainCtrl', ['$scope', '$location', mainCtrl]);

function mainCtrl($scope, $location) {
    // setup navigation
    $scope.navPages = [
        {
            name: "Home",
            href: "#/home",
            viewLocation: "/home"
        },
        {
            name: "Grocery List",
            href: "#/groceryList",
            viewLocation: "/groceryList"
        },
        {
            name: "Recipes",
            href: "#/recipes",
            viewLocation: "/recipes"
        },
        {
            name: "Pantry",
            href: "#/pantry",
            viewLocation: "/pantry"
        }
    ];
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
}