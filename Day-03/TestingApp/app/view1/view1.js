'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'greetController'
  });
}])

.controller('greetController', function($scope) {
    $scope.name = '';
    $scope.greetMsg = '';
    $scope.greet = function(){
        $scope.greetMsg = "Hi " + $scope.name + ", Have a nice day!";
    }
});
