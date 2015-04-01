angular.module("bugTracker")
    .filter("toMoment", function(momentApi){
            return function(data){
                return momentApi(data).fromNow();
            }
        })
