'use strict';

/**
 * @ngdoc function
 * @name beenToApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beenToApp
 */
angular.module('beenToApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
