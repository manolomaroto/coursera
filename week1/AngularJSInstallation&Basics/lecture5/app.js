(function(){
    'use strict';

    angular.module('myFirstApp',[])
        .controller('MyFirstController', function($scope){
            $scope.name = "Manolo";
        $scope.sayHello = function(){
            return "Hello tutti";
        }
        });
})();