(function(){
    'use strict';

    angular.module('MsgApp',[])
        .controller('MsgController',MsgController);

    MsgController.$inject = ['$scope'];
    function MsgController($scope){
        $scope.name = "Manolo";
        $scope.stateOfBeing = "hungry";

        $scope.message = function(){
            return "Holaaaa!";
        }

        $scope.feedManolo = function(){
            $scope.stateOfBeing = "feed";
        }
    }
})();