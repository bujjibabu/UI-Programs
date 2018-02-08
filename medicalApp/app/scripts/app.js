'use strict';

/**
 * @ngdoc overview
 * @name medicalApp
 * @description
 * # medicalApp
 *
 * Main module of the application.
 */
angular
  .module('medicalApp', ['ngAnimate', 'ngCookies', 'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/shop', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/contact', {
        templateUrl: 'views/Contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
       .when('/support', {
        templateUrl: 'views/Support.html',
        controller: 'SupportCtrl',
        controllerAs: 'support'
      })

      .otherwise({
        redirectTo: '/shop'
      });
  });
