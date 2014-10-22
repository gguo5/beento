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
                    //values: scope.datamap,  
                     //scale: ['#0071A4'],
                       scale: {
                        "150": "#2761ad",
                        "009": "#0071A4",
                        "142": "#8019B3",
                        "002": "#E0B84E",
                        "019": "#56EA4C",
                        "others": "#66EADB"
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

        
         scope.$watch("beenToCountries" , function(n,o){ 
           console.log('beentoc: '+ scope.beenToCountries);   
         });


        }
    }; 



    // return {
    //     restrict: 'A',
    //     link: function(scope, element, attrs) {
    //       var chart = null;
    //       scope.$watch("datamap" , function(n,o){
    //       console.log('watch1 '+chart);
    //      if(!chart){
    //     $(element).width('auto')
    //     $(element).height(400)
    //        $(element).vectorMap({
    //             map: 'world_mill_en_with_antarctica',
    //               normalizeFunction: 'polynomial',
    //               regionStyle: {
    //                   initial: {
    //                       fill: 'white',
    //                       "fill-opacity": 1,
    //                       stroke: 'none',
    //                       "stroke-width": 0,
    //                       "stroke-opacity": 1
    //                   },
    //                   hover: {
    //                       fill: '#CCECE0',
    //                       "fill-opacity": 0.8
    //                   }
    //               },
    //               markerStyle: {
    //                   initial: {
    //                       fill: '#FA4239',
    //                       stroke: '#FFFFFF'
    //                   },
    //                   hover: {
    //                       stroke: '#1A8EBF',
    //                       "stroke-width": 2
    //                   }
    //               },
    //               backgroundColor: '#96CBD7',
    //               markers: [
    //               //{latLng: [41.90, 12.45], name: 'Vatican City'},
    //               //{latLng: [43.93, 12.46], name: 'San Marino'},
    //               //{latLng: [-4.61, 55.45], name: 'Seychelles'},
    //               {latLng: [7.35, 134.46], name: 'Palau'}
    //               ],
    //                series: {
    //                 regions: [{
    //                   //values: {"AU": "oceania"},
    //                  scale: ['#0071A4'],
    //                 //    scale: {
    //                 //     "150": "#2761ad",
    //                 //     "009": "#0071A4",
    //                 //     "142": "#8019B3",
    //                 //     "002": "#E0B84E",
    //                 //     "019": "#56EA4C",
    //                 //     undefined: "#c7b789"
    //                 // },
    //                   attribute: 'fill'
    //                 }]
    //               }
    //           })
    //       }
    //       else{
    //         console.log('watch else '+ chart);
    //             chart.vectorMap('get', 'mapObject').series.regions[0].setValues(scope.datamap);
    //             console.log(chart.vectorMap('get', 'mapObject'))};        
    //   });              
    //     }
    // };
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
