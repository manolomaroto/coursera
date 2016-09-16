(function(){
    'use strict';

    angular.module('DIApp',[])
        .controller('DIController', DIController);
    
    function DIController($scope,$filter,$injector){
        $scope.name = "Manolo";
        
        $scope.upper =function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
        }

        console.log($injector.annotate(DIController));
    }

function nose(name,job,buh){
    return 'buh';
}


})();