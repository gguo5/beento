'use strict';

/**
 * @ngdoc function
 * @name beenToApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beenToApp
 */
angular.module('beenToApp')
  .controller('MainCtrl', function ($scope,$http,$filter) {
    $http.get('data/allcountries.json').success(function(data) {
    $scope.countries = data;
    $scope.typedCountry = undefined;
    $scope.datamap = {};
    $scope.regions = [{"name":"Africa","code":"002"},
    				  {"name":"Americas","code":"019"},
    				  {"name":"Asia","code":"142"},
    				  {"name":"Europe","code":"150"},
    				  {"name":"Oceania","code":"009"},
    				  {"name":"Others"}];
    $scope.getCountryByName = function(c){
      var found = $filter('getCountryByName')($scope.countries, c);
      $scope.triggerAlert(found);
    }; 

    $scope.triggerAlert = function(c){
      var r={};
      typeof c['region-code'] === "undefined" ? r[c['alpha-2']]="others" : r[c['alpha-2']]=c['region-code'];  
      $scope.datamap=r;
      console.log($scope.datamap);
    };
    
  });
  });
