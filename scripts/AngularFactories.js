var demoApp = angular.module("demoApp", [])
    .factory("simpleFactory", function() {
        var factory = {};
        var customers = [];
        factory.getCustomers = function() {
            return customers;
        };
        return factory;
    })
    .controller("simpleController", function($scope, simpleFactory) {
        // Factory Injected into Controller into Runtime
        $scope.customers = simpleFactory.getCustomers();
    });

/**
 * In this Example you'll see that down below I have this Controller which I looked at earlier.
 *
 * Notice that instead of Hard Coding the customers in here , or if it was an AJAX Call instead of Coding that Call into Controller, I'm going to use a module up here to define a factory.
 *
 * So in Case you'll see I'm actually using (chaining).
 *
 * So the module's defined and then instead if putting a semi-colon we chain factory and then we chain Controller . You don't have to do that, but that is certainly an option.
 *
 * (In this Factory we're going to to give it a name, what Factory's going to do in this case is find a way to get customers. Let's assume we have a customers variable up here What we want to do is create a factory object, define a method on it returns that return this customers Variable.)
 *
 * In Real Life App this getCustomers might go out and make an async call. Then that async data returns and then returns it to controller or Controller that needs it.
 *
 * What's really Cool about factories, services and providers is that once you've defined it you can then inject it very easily as a parameter into something like a controller or even other factory if you want a Factory could rely on another factory.
 *
 *
 *
 *
 */