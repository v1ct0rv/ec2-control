'use strict';

angular.module('ec2ControlApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'stormpath',
  'stormpath.templates'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  }).run(function($stormpath){
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'ec2Control'
  });
});
