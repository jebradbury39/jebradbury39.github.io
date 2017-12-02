/**
 * 
 */

var app = angular.module("ManualApp", [ 'ngRoute' ]);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    controller : 'HomeController',
    templateUrl : 'views/home.html'
  }).when('/terrain_generation/', {
    controller : 'HomeController',
    templateUrl : "views/terrain_generation.html"
  }).when('/collision_detection/', {
    controller : 'HomeController',
    templateUrl : "views/collision_detection.html"
  }).when('/world_objects/', {
    controller : 'HomeController',
    templateUrl : "views/world_objects.html"
  }).when('/planes/', {
    controller : 'HomeController',
    templateUrl : "views/planes.html"
  }).when('/battleships/', {
    controller : 'HomeController',
    templateUrl : "views/battleships.html"
  }).when('/bombs/', {
    controller : 'HomeController',
    templateUrl : "views/bombs.html"
  }).when('/references/', {
    controller : 'HomeController',
    templateUrl : "views/references.html"
  }).otherwise({
    redirectTo : '/'
  });
});