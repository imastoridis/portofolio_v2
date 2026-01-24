'use strict';

var env = {};
if (window && window.__env) {
  Object.assign(env, window.__env);
}

// Declare app level module which depends on views, and core components
angular.module('myApp', [
  'ngRoute',
  'myApp.homepage',
  'myApp.version'
])
  .constant('ENV', env)
  .
  config(["$locationProvider", function ($locationProvider) {
    $locationProvider.html5Mode(true);
  }]);

