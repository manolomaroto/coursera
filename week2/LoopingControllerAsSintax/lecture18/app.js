(function(){
    'use strict';

    var shoppingList = [
        "milk", "apple", "banana", "chocolate", "cookies"
    ];

    angular.module("ShoppingListApp", [])
        .controller("ShoppingListController", ShoppingListController);

    ShoppingListController.$inject = ['$scope'];

    function ShoppingListController($scope){
        $scope.shoppingList = shoppingList;
    }
})();