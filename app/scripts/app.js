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
  'ui.bootstrap',
  'LocalStorageModule'
]);


beenToApp.config(['localStorageServiceProvider', function (localStorageServiceProvider) {
  localStorageServiceProvider.setPrefix('beenToApp');
  }]);


beenToApp.filter('getCountryByName', function() {
  return function(countries, name) {
    var i=0, len=countries.length;
    for (; i<len; i++) {
      if (countries[i].name == name) {
        return countries[i];
      }
    }
    return null;
  }
});

beenToApp.filter('checkBeento', function() {
  return function(countries, beenToCountries) {
    if(typeof countries !== 'undefined' && typeof beenToCountries !== 'undefined'){
    console.log(' typeof countries'+ typeof countries+' len: '+countries.length+' typeof beenToCountries:'+ typeof beenToCountries +' len: '+beenToCountries.length);
    var i=0, len=beenToCountries.length;
    for (; i<len; i++) {
      for(var j=0; j<countries.length; j++ ){
        if (countries[j].name === beenToCountries[i].name) {
          countries.splice(j,1);
          break;
        }
      }    
    }
    return countries;
  }
  }
});


beenToApp.directive('map', function() {
  return {
        restrict: 'EAC', 
        link: function(scope, element, attrs) {
          var chart = null;
  
           scope.$watch("datamap" , function(n,o){ 
             if(!chart){
                $(element).width('auto')
                $(element).height(400)
                chart = $(element).vectorMap({
                   map: 'world_mill_en_with_antarctica',
                   normalizeFunction: 'polynomial',
                   regionStyle: {
                      initial: {
                          fill: 'white',
                          "fill-opacity": 1,
                          stroke: 'none',
                          "stroke-width": 0,
                          "stroke-opacity": 1
                      },
                      hover: {
                          fill: '#CCECE0',
                          "fill-opacity": 0.8
                      }
                    },
                    markerStyle: {
                      initial: {
                          fill: '#FA4239',
                          stroke: '#FFFFFF'
                      },
                      hover: {
                          stroke: '#1A8EBF',
                          "stroke-width": 2
                      }
                  },
                  backgroundColor: '#96CBD7',
                  markers: [
                  //{latLng: [41.90, 12.45], name: 'Vatican City'},
                  //{latLng: [43.93, 12.46], name: 'San Marino'},
                  //{latLng: [-4.61, 55.45], name: 'Seychelles'},
                  {latLng: [7.35, 134.46], name: 'Palau'}
                  ],
                series: {
                  regions: [{
                    values: scope.initCountries,
                    //values: {"CN":"150","IT":"142"},  
                     //scale: ['#0071A4'],
                       scale: {
                        "150": "#2761ad",
                        "009": "#0071A4",
                        "142": "#8019B3",
                        "002": "#E0B84E",
                        "019": "#56EA4C",
                        "others": "#66EADB",
                        "def":"#FFFFFF"
                    },
                    attribute:'fill'
                  }]
                }
                
                })
             }else{
                chart.vectorMap('get', 'mapObject').series.regions[0].setValues(scope.datamap);
                console.log(chart.vectorMap('get', 'mapObject'));
             }
          });     

        
         scope.$watchCollection("beenToCountries" , function(n,o){ 
          //console.log('hit here: '+ n+' old: '+ o);  //comment out
          if(typeof o !== "undefined"){
            if(typeof n !== "undefined"){
              if(n.length < o.length ){
              var mapobj = $(element).vectorMap('get', 'mapObject');
              var crm = {};
              crm[scope.currentRemovedCountry['alpha-2']]="def";
              mapobj.series.regions[0].setValues(crm);
              //console.log('in directive: country name to beremoved!'+scope.currentRemovedCountry.name+' '+scope.currentRemovedCountry['alpha-2']);          
            } 
          } 

          
          }
          scope.addToStorage();
         });


        }
    }; 
});


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
