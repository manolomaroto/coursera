(function(){
    'use strict';

    angular.module('CounterApp',[])
        .controller('CounterController', ['$scope',CounterController]);

    function CounterController($scope){
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name = "Manolo";

        $scope.showNumberOfWatchers = function(){
            console.log("Number of watchers ", $scope.$$watchersCount);
        };

        $scope.countOnce = function(){
            $scope.onceCounter = 1;
        }

        $scope.upCounter = function(){
            $scope.counter++;
        }

        $scope.$watch(function(){
            console.log("Digest Loop Fired!");
        })
        /*
        $scope.$watch('onceCounter', function(newValue, oldValue){

       
            console.log("old value", oldValue);
            console.log("new value", newValue);
        });

        $scope.$watch('counter', function(newValue, oldValue){

       
            console.log("counter old value", oldValue);
            console.log("counter new value", newValue);
        });
        */
    }
})();