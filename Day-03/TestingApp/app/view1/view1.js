'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'greetController'
  });
}])

.service("greeter", function(){
    this.greet = function(name){
        return "Hi " + name + ", Have a nice day!"
    }
})
.controller('greetController', function($scope, greeter) {
    $scope.name = '';
    $scope.greetMsg = '';
    $scope.greet = function(){
        $scope.greetMsg = greeter.greet($scope.name);
    }
});
