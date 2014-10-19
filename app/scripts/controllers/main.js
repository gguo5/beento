'use strict';

/**
 * @ngdoc function
 * @name beenToApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beenToApp
 */
angular.module('beenToApp')
  .controller('MainCtrl', function ($scope,$http) {
    $http.get('data/allcountries.json').success(function(data) {
    $scope.countries = data;
    $scope.regions = [{"name":"Africa","code":"002"},
    				  {"name":"Americas","code":"019"},
    				  {"name":"Asia","code":"142"},
    				  {"name":"Europe","code":"150"},
    				  {"name":"Oceania","code":"009"},
    				  {"name":"Others"}]
  });
  });
