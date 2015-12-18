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
    // Defining addCustomer for Adding New Customers
    $scope.addCustomer = function() {
        $scope.customers.push({
            name: $scope.newCustomer.name,
            city: $scope.newCustomer.city
        });
    };
});
/*
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
*/
/*
    Earlier I Showed you how can define a module, define our routes and then have a controller in that module called SimpleControlle, but you'll notice that the customers are hard-coded.
 */

/*
    In Real Life App you may have something hard-coded I suppose But in Genral We're Probaly going to go off to a server or service to go and get the data via AJAX or Some Simpler Kind of Technique maybe even WebSockets.
 */

/*
    So What's I'm going to do is move this customers out. So don't want to Hard Code these obviously and we can pretend that we're going to go and Call a Service . I'm Just going to go ahead and say that customers is just an empty array.
 */

$scope.customers = [];

/*
    Now What I'm going to do is under the routes I'm going to define a factory

    (There are three d/w options for doing this and again, they all differ just in how they create and return the object that servers the data,

    But factory is really easy to understand and get started with . I'm going to give it an empty function here but Keep in mind with Angular as example $scope is dynamically, We Can also Inject other things.
 */

demoApp.factory('simpleFactory', function() {

})

/*
    IF I wanted to make an AJAX call I can tell Angular 'inject in the Angular http object'
 */

/* And then I Could do http get/put/post and delete type of calls to for instance RESP APIs*/

demoApp.factory('simpleFactory', function($http) {

});

/**
 * In this Case I'm not going to do that - We're going to K`eep it really Fundamental and simple

 * I'm going to come in and define some customers and I'm just going to define those customers we had earlier
 */

demoApp.factory('simpleFactory', function($http) {
    var customers = [{
        name: 'John Smith',
        city: 'Phoenix'
    }, {
        name: 'John Doe',
        city: 'New York'

    }, {
        name: 'Jane Doe',
        city: 'San Francisco'
    }];
});

/*
    With a Factory you create an object, tack on some functions to it and then return that object out of the function.

    With Service you don't create an object. The Function is the object. You just tack on using the "this" Keyword some function. I'll show you the diffrence Here
 */

// We're going to come in and say factory = just create an empty object here.
var factory = {};

// Now What I'm going to do is factory. And let's call it "getCustomers".
factory.getCustomers() {

}

// getCustomers is simply going to come in and just return customers.
factory.getCustomers = function() {
    return customers;
}

/*
Had I passed in http object, or if you're using jQuery or Whatever it may be I Can make the AJAX call right here and then once it come back we could return a promise and get into all that fun stuff with async calls.
 */

/*
But in this Case it's going to return something really Simple so now our factory has a getCustomers() ,

We might also have factory.postCustomer if we wanted to or postCustomer or whatever you want to call it and maybe this would take our actual customer object and then we would have code in here to actually do something with it.
 */

factory.postCustomer = function() {

};

/*
    In this Case We'll Just stick with customers. Regardless of whatever you put on with the factory, once you create the factory object simply return it.
 */

demoApp.factory('simpleFactory', function() {
    var customers = [{
        {
            name: 'John Smith',
            city: 'Phoenix'
        }, {
            name: 'John Doe',
            city: 'New York'
        }, {
            name: 'Jane Doe',
            city: 'San Francisco'
        }
    }];

    var factory = {};
    factory.getCustomers = function() {
        return customers;
    };
    factory.postCustomer = function(customer) {

    };
    return factory;
});

/*
    if this were to say service right here instead of .factory then this [the function] becomes the factory.

    * So I would just say this.getCustomers and this.postCustomers and then the factory itself would be in the function.
 */

this.getCustomers = function() {
    return customers;
};

this.postCustomer = function(customer) {

};

/*
    I Like Factories Because you Control the object yourself and you don't have to use the "this" Keyword and things
 */

/*

So we're going to go here. We now have a factory which returns some hard-coded customers Now We need to fill them, How do we do that ?

Well I need first to get a refernce up here to the factory. Now all you do is take the name and I'll just put comma and then you put that name in.
 */
