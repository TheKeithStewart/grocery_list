var grocery_list = angular.module("grocery_list", ["checklist-model"]);

var url = "http://localhost:3000";

grocery_list.controller("GroceryListCtrl", function($scope, $http) {
    $scope.selectedStapleItems = [];

    getGroceryList($scope, $http);

    $http.get(url + "/pantryStaples").success(function(stapleItems) {
        $scope.stapleItems = stapleItems;
    });

    $scope.addStapleItem = function() {
        if ($scope.selectedStapleItems) {
            $http.post(url + "/addFromStaples", {newListItems: $scope.selectedStapleItems}).success(function(data) {
                console.log(data);
                getGroceryList($scope, $http);
            });
        }
    };

    function getGroceryList($scope, $http) {
        $http.get(url + "/groceryList").success(function (list) {
            $scope.listItems = list.listItems;
        });
    }
});