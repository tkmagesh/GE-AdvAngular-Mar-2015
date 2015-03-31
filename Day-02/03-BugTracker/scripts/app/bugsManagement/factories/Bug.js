angular.module("bugTracker")
    .factory('Bug', function(){
            function Bug(defaults){
                this.title = defaults.title;
                this.isClosed = defaults.isClosed;
                this.createdAt = defaults.createdAt || new Date();
            }
            Bug.prototype.toggleStatus = function(){
                this.isClosed = !this.isClosed;
            }
            return Bug;
        });
