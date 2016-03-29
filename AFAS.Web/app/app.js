var app = angular.module('afas.app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
            //controller: 'HomeController'
        })
        .when('/plan', {
            templateUrl: 'templates/plan.html'
        })
        .when('/optimization', {
            templateUrl: 'templates/optimization.html'
        })
        .when('/database', {
            templateUrl: 'templates/database.html'
        })
        .otherwise({ redirectTo: '/' })
    /*
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
    */
}])