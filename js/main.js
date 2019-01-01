var app = angular.module("billing", ["ngRoute","homeMdl"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "modules/home/templates/home.html",
        controller:'homeCtrl'
    })
    .when("/red", {
        templateUrl : "red.htm"
    })
    .when("/green", {
        templateUrl : "green.htm"
    })
    .when("/404", {
        template : "<h1>Page Not Found</h1><p>Nothing has been selected Click</p> <a href='#'>Here</a>"
    }) .otherwise({
        template : "<h1>!Ooops...</h1><p>Nothing has been selected Click</p> <a href='#'>Here</a>"
    });
});