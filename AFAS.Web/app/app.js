var app = angular.module('application', ['ui.router', 'ngAnimate', 'foundation', 'foundation.dynamicRouting', 'foundation.dynamicRouting.animations']);

app.config(['$locationProvider', function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled:false,
        requireBase: false
    });

}]).run(function () {
    FastClick.attach(document.body);
});