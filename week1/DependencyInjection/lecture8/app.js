(function(){
    'use strict';

    angular.module('DIapp',[])
    .controller('DIController',DIController);

    function DIController($scope, $filter){
        $scope.name='Manolo';
        
        $scope.upper = function(){
            var upCase = $filter('uppercase');
            $scope.name = upCase($scope.name);
            console.log($scope.name);
        };
    }

function nose(name,job,bu){
    return 'buh';
}
console.log(nose());
    
})();