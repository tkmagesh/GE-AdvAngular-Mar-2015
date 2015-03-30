//Create an object "spinner"

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

function getSpinner(){
    var count = 0;
    function increment(){
       return ++count;
    }
    function decrement(){
        return --count;
    }
    return {
        up : increment,
        down : decrement
    }
}

function Spinner(){
    var count = 0;
    this.up = function(){ return ++count; }
    this.down = function(){ return --count; }
}

function getPrimeFinder(){
    var cache={};
    function isPrime(n){
       console.log("processing");
       if (n <= 3) return true;
       for(var i=0; i <= (n/2); i++)
            if (n % i === 0) return false
        return true;
    }
    return function(n){
        if (typeof cache[n] === "undefined")
            cache[n] = isPrime(n);
        return cache[n];
    }
}

function memorize(fn){
    var cache={};
    
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] === "undefined")
            cache[key] = fn.apply(this,arguments);
        return cache[key];
    }
}