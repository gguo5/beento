'use strict';

/**
 * @ngdoc overview
 * @name beenToApp
 * @description
 * # beenToApp
 *
 * Main module of the application.
 */

var beenToApp = angular.module('beenToApp', [
  'ngAnimate',
  'ngResource',
  'ngRoute',
  'ui.bootstrap'
]);


beenToApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
