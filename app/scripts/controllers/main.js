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
    $scope.beenToCountries=[];
    $scope.getCountryByName = function(c){
      var found = $filter('getCountryByName')($scope.countries, c);
      $scope.addCountry(found);
    }; 

    $scope.addCountry = function(c){
      $scope.addCountryToBeen(c);
      //add to map
      var r={};
      typeof c['region-code'] === "undefined" ? r[c['alpha-2']]="others" : r[c['alpha-2']]=c['region-code'];  
      $scope.datamap=r;
      console.log($scope.datamap);
    };

    $scope.addCountryToBeen = function(c){
      var temp_c = angular.copy(c);
      var found = false;
      for(var i = 0; i < $scope.beenToCountries.length; i++) {
    	if ($scope.beenToCountries[i].name === c.name) {
        found = true;
        break;
		    }
		}
	   if (!found){	
      $scope.beenToCountries.push(temp_c);
      }
    };

    $scope.removeCountry = function(c){
      //remove from map

      //remove from beentocountry
      console.log('country removed!'+c.name);
    };
    
  });
  });
