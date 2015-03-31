angular
    .module("bugTracker")
    .controller("bugsController", function($scope, bugsCollection){
            $scope.bugs = bugsCollection;
        });
