angular
    .module('groceryList')
    .controller('MainCtrl', ['$scope', mainCtrl]);

function mainCtrl($scope) {
    $scope.test = "Hello World!";
}