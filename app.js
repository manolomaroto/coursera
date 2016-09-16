(function(){
    'use strict';
    angular.module('LunchCheck',[])
        .controller('LunchCheckController',['$scope',LunchCheckController]);
   

    function LunchCheckController($scope){
        $scope.lunch = "";
        $scope.result ="";

        $scope.checkIfTooMuch = function(){
            var lunchFood = $scope.lunch.split(',');
            console.log(lunchFood);
            if(lunchFood==""){
                $scope.result='Please enter data first';
                document.body.style.color = "#f00";
            }else if(lunchFood.length<=3){
                $scope.result='Enjoy!'
                document.body.style.color = "#0f0";
            }else{
                $scope.result='Too much';
            }
            
        }
    }
})();