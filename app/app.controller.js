angular
    .module('angular-starter')
    .controller('AppController', AppController)

function AppController($scope) {
    $scope.number = 1;

    $scope.increment = function() {
        $scope.number += 1;
    }

    $scope.decrement = function() {
        if ($scope.number != 1) {
            $scope.number -= 1;
        }
        else {
            alert("No zero value for version.");
        }
    }
}