angular.module("bugTracker")
    .service("bugService", function($http, Bug, $q){
        this.getAll = function(){
            return $http
                .get("http://localhost:3000/bugs")
                .then(function(response){
                    return response.data;
                });
        }
    })
    .service("bugDataTransformer", function(Bug, $timeout, $q){
        this.transform = function(bugsData){
            return $timeout(function(){
                var result = bugsData.map(function(d){ return new Bug(d); });
                return result;
            }, 3000);
        }
    })
    .service("bugsCollection", function(Bug, bugService, bugDataTransformer){
            this.list =  [];
            var self = this;
            bugService
                .getAll()
                .then(function(bugsData){
                    return bugDataTransformer.transform(bugsData)
                })
                .then(function(bugs){
                    self.list = bugs;
                });

            this.add = function(newBug){
                            this.list.push(new Bug({
                                title : newBug,
                                isClosed : false
                            }));
                        };
            this.removeClosed = function(){
                    for(var i=this.list.length-1; i>=0;i--){
                        var bug = this.list[i];
                        if (bug.isClosed)
                            this.list.splice(i,1);
                    }
                };
            this.toggleStatus = function(bug){
                    bug.toggleStatus();
                }

        });
