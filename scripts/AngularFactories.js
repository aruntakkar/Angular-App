var demoApp = angular.module('demoApp', [])
    .factory('simpleFactory', function() {
        var factory = {};
        var customers = [];
        factory.getCustomers = function() {
            return customers;
        };
        return factory;
    })
    .controller('simpleController', function($scope,simpleFactory) {
    	// Factory injected into controller at runtime
    })
