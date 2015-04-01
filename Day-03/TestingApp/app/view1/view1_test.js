'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('greetController', function(){

    it('should initialize an empty name', inject(function($controller) {
      //spec body
      var fakeScope = {};
      var fakeGreeter = {
          greet : function(){}
      };
      var greetController = $controller('greetController', {$scope : fakeScope, greeter : fakeGreeter});
      expect(greetController).toBeDefined();
      expect(fakeScope.name).toBe('');
    }));
      
    
    it('should call greeter.greet() on greet', inject(function($controller) {
      //spec body
      var fakeScope = {};
      var fakeGreeter = {
          greet : function(){}
      };
      var fakeGreetMsg = "You are a good controller";
      spyOn(fakeGreeter,"greet").andReturn(fakeGreetMsg);
        
      var greetController = $controller('greetController', {$scope : fakeScope, greeter : fakeGreeter});
      fakeScope.name = "Magesh";
      fakeScope.greet();
      expect(fakeGreeter.greet).toHaveBeenCalledWith(fakeScope.name);
      expect(fakeScope.greetMsg).toBe(fakeGreetMsg);
    }));

  });
});
