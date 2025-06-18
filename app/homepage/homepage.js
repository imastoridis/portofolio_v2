'use strict';

angular.module('myApp.homepage', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'homepage/homepage.html',
      controller: 'homepageCtrl'
    });
  }])

  .controller('homepageCtrl', [function () {

  }]);

