'use strict';

/**
 * @ngdoc function
 * @name beenToApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beenToApp
 */
angular.module('beenToApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
