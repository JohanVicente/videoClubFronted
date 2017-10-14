'use strict';

angular.module('videoclubApp', ['videoclubApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router', 'ui.bootstrap','satellizer','ngMaterial'
  ])
  .constant("API","http://10.72.197.222:8080/adsi2017_1261718-master/api")
  .config(function($authProvider, API) {
    $authProvider.loginUrl = API+'/auth/login';
    $authProvider.tokenName = 'token';
    $authProvider.tokenPrefix = 'VideoClub';
  })
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
