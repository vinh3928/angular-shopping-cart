var app = angular.module("movieApp", ['ngRoute', 'ngTable']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: "partials/home.html",
      controller: "HomeController"
    })
    .when('/checkout', {
      templateUrl: "partials/cart.html",
      controller: "CartController"
    });
});
