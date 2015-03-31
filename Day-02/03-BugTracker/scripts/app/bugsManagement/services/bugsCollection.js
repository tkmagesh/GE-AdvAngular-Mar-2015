angular.module("bugTracker")
    .service("bugsCollection", function(Bug){
            this.list =  [
                    new Bug({title : "Unable to login", isClosed : false, createdAt : new Date(2015,2,11)}),
                    new Bug({title : "Server communication fails", isClosed : false, createdAt : new Date(2015,2,15)}),
                    new Bug({title : "Data not saved", isClosed : false, createdAt : new Date(2015,2,25)})
                ];
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
