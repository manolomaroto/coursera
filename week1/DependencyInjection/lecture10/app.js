/*(function(){
    'use strict';

    angular.module('DIApp',[])
        .controller('DIController',['$scope','$filter',DIController]);

    function DIController($scope,$filter){
        $scope.name = "Manolo";
        
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
    }
    }
})();*/
!function(){"use strict";function n(n,e){n.name="Manolo",n.upper=function(){var o=e("uppercase");n.name=o(n.name)}}angular.module("DIApp",[]).controller("DIController",["$scope","$filter",n])}();