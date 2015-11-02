// 'use strict';

// angular.module('rolnik-resources')
// 	.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
//     // register $http interceptors, if any. e.g.
//     // $httpProvider.interceptors.push('interceptor-name');

//     // Application routing
//     $stateProvider
//       .state('app', {
//         url: '/app',
//         abstract: true,
//         templateUrl: 'templates/main.html'
//       })
//       .state('app.home', {
//         url: '/home',
//         cache: true,
//         views: {
//           'viewContent': {
//             templateUrl: 'templates/views/home.html',
//             controller: 'HomeController'
//           }
//         }
//       })
//       .state('app.start', {
//         url: '/start',
//         cache: true,
//         views: {
//           'viewContent': {
//             templateUrl: 'templates/start/start.html',
//             controller: 'StartController as startCtrl'
//           }
//         }
//       })
//       .state('app.choose', {
//         url: '/choose',
//         cache: true,
//         views: {
//           'viewContent': {
//             templateUrl: 'templates/choose/choose.html',
//             controller: 'ChooseController as chooseCtrl'
//           }
//         },
//         resolve: {
//           ProductsResource: function () {
//             return [{"name": "aaa"},{"name": "aaa"}];
//           }
//         }
//       })
//       .state('app.settings', {
//         url: '/settings',
//         cache: true,
//         views: {
//           'viewContent': {
//             templateUrl: 'templates/views/settings.html',
//             controller: 'SettingsController'
//           }
//         }
//       });


//     // redirects to default route for undefined routes
//     $urlRouterProvider.otherwise('/app/start');
// });