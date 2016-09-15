(function(){
    'use strict';

    angular.module('DIapp',[])
    .controller('DIController',DIController);

    function DIController($scope){
        $scope.name='Manolo';
    }
    
})();