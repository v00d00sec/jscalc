'use strict';

/* App Module */

var jscalcApp = angular.module('jscalcApp', [
  'ngRoute',
  'ngMaterial',
  'angularytics',
  'ui.ace',

  'jscalcControllers'
])

.config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    $routeProvider.

      when('/source/:calcId', {
        templateUrl: '/partials/source',
        controller: 'SourceCtrl'
      }).

      when('/', {
        templateUrl: '/partials/welcome'
      }).

      otherwise({
        redirectTo: '/'
      });
  }])

.config(['AngularyticsProvider',
  function(AngularyticsProvider) {
    AngularyticsProvider.setEventHandlers(['Console', 'GoogleUniversal']);
  }])

.run([
  'Angularytics',
  '$rootScope',
  function(Angularytics, $rootScope) {
    Angularytics.init();
  }]);
