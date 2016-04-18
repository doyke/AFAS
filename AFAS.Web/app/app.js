var app = angular.module('afas.app', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/home.html'
            //controller: 'HomeController'
        })
        .when('/plan', {
            templateUrl: 'templates/plan.html',
            controller: 'PlanController',
            controllerAs: 'c'
        })
        .when('/optimization', {
            templateUrl: 'templates/optimization.html',
            controller: 'OptimizationController',
            controllerAs: 'c'
        })
        .when('/optimization/confirmation.html', {
            templateUrl: 'templates/confirmation.html',
            controller: 'ConfirmationController',
            controllerAs: 'c'
        })
        .when('/optimization/resolve', {
            templateUrl: 'templates/home.html',
            controller: 'AssignmentController',
            controllerAs: 'c',
            resolve: {
                data: ['$route', 'Data', function($route, Data) {
                    return Data.get({ id: $route.current.params.id});
                }]
            }
        })
        .when('/database', {
            templateUrl: 'templates/database.html',
            controller: 'RadioController',
            controllerAs: 'c'
        })
        .otherwise({ redirectTo: '/' })
    /*
    $locationProvider.html5Mode({
        enabled:true,
        requireBase: false
    });
    */
}])