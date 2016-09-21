(function(){
    'use strict';

    var shoppingList1 = [
        "milk","donuts","cookies","chocolate","pepto bismol"
    ];

    var shoppingList2 = [
        {
            name: "milk",
            quantity: "2"
        },
        {
            name: "donuts",
            quantity: "200"
        },
        {
            name: "cookies",
            quantity: "300"
        },
        {
            name: "chocolate",
            quantity: "5"
        }
    ];

    angular.module('ShoppingListApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = ['$scope'];
    function ShoppingListController($scope){
        $scope.shoppingList1 = shoppingList1;
        $scope.shoppingList2 = shoppingList2;

        $scope.addToList= function(){
            var newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            };

            $scope.shoppingList2.push(newItem);
        }
    }
})();