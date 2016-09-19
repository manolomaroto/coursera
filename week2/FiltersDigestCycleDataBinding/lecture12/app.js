(function(){
    'use strict';

    angular.module('MsgApp',[])
        .controller('MsgController',MsgController);

    MsgController.$inject = ['$scope','$filter'];
    function MsgController($scope,$filter){
        $scope.name = "Manolo";
        $scope.stateOfBeing = "hungry";
        $scope.cookieCost = .45;

        $scope.sayMessage = function(){
            var message = "A Manolo le gustan las galletitas"
            var output = $filter('uppercase')(message);
            return output;
        };

        $scope.feedManolo = function(){
            $scope.stateOfBeing= "fed";
        }

    }
})();