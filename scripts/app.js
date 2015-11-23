// Defining Module
var demoApp = angular.module('demoApp', ['ngRoute']);

// Defining Module Routes
demoApp.config(function($routeProvider) {
    $routeProvider
        .when('/view1', {
            controller: 'simpleController',
            templateUrl: 'partials/view1.html'
        })
        .when('/view2', {
            controller: 'simpleController',
            templateUrl: 'partials/view2.html'
        })
        .otherwise({
            redirectTo: '/view1'
        });
});

// Defining Controller
demoApp.controller('simpleController', function($scope) {
    $scope.customers = [{
        name: 'Dave Jones',
        city: 'Phoenix'
    }, {
        name: 'Jamie Riley',
        city: 'Atlanta'
    }, {
        name: 'Heedy Wahlin',
        city: 'Chandler'
    }, {
        name: 'Thomas Wahlin',
        city: 'Seattle'
    }];
    // Defining addCustomer for Adding New Customers
    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        });
    };

});
