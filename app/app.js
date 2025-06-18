'use strict';

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.homepage',
  'myApp.version'
]).


config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

