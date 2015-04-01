/* Sync */
function add(x,y){
  console.log("returning result")
  return x + y;
}
function addClient(x,y){
   console.log("initiating add");
   var result = add(x,y);
   console.log("result = ", result);
}


/* Async - 1 (using callbacks)*/
function addAsync(x,y, onResult){
  setTimeout(function(){
    console.log("returning result")
    var result = x + y;
    if (typeof onResult === "function")
       onResult(result);
  },3000);
}

function addAsyncClient(x,y){
   console.log("initiating add");
   addAsync(x,y, function(result){
      console.log("result = ", result);
   });
}

/* Async - 2 (using events) */
function getAsyncAdder(){
    var _events = [];
    function triggerResultEvents(result){
        _events.forEach(function(listenerFn){
            listenerFn(result);
        });
    }
    return {
        add : function(x,y){
            setTimeout(function(){
                var result =  x + y;
                console.log("returning result")
                triggerResultEvents(result);
            },3000);
        },
        addResultListener : function(listenerFn){
            _events.push(listenerFn);
        }
    };
}


function addAsyncUsingEventsClient(x,y){                         
    var addAsyncUsingEvents = getAsyncAdder();
    console.log("initiating add");
    addAsyncUsingEvents.add(x , y);
    addAsyncUsingEvents.addResultListener(function(result){
        console.log("result = ", result);
    });
}

/* Async - 3 (using Promise) */

function addAsyncUsingPromise(x,y){
    var promise = new Promise(function(resolve, y){
        setTimeout(function(){
            console.log("returning result");
            var result = x + y;
            resolve(result);
        },3000);
    });
    return promise;
}
