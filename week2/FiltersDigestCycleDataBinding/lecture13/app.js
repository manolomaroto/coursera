(function(){
    'use strict';
    angular.module('MsgApp',[])
        .controller('MsgController',MsgController)
        .filter('caca',LovesFilter)
        .filter('truth', TruthFilter);

    MsgController.$inject=['$scope','cacaFilter'];

    function MsgController($scope,cacaFilter){
        $scope.stateOfBeing = "hungry";

        $scope.sayMessage = function(){
            var msg = "A Manolo le gusta comer cosas saludables";
            return msg;
        };

        $scope.sayLovesMessage = function(){
            var msg = "A Manolo le gusta comer cosas saludables";
            msg = cacaFilter(msg);
            return msg;
        };

        $scope.feedManolo = function(){
            $scope.stateOfBeing = "fed";
        };


    };

    function LovesFilter(){
        return function(input){
            input = input || "";
            input = input.replace("gusta","encanta");
            return input;
        };
    }

    function TruthFilter(){
        return function(input,target,replace){
            input = input || "";
            input = input.replace(target, replace);
            return input;
        }
    }
})();