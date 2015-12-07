'use strict';

/**
 * @ngdoc overview
 * @name Rolnik
 * @description
 * # Initializes main application and routing
 *
 * Main module of the application.
 */


angular.module('Rolnik')
	.config(function($httpProvider, $stateProvider, $urlRouterProvider) {
	    // register $http interceptors, if any. e.g.
	    // $httpProvider.interceptors.push('interceptor-name');
	    // $httpProvider.interceptors.push('LoadingInterceptor');

	    // Application routing
	    $stateProvider
	    .state('ionic', {
	        url: '',
	        abstract: true,
	        templateUrl: 'templates/main.html'
	    })
	    .state('ionic.home', {
	        url: '/home',
	        cache: true,
	        views: {
	          'viewContent': {
	            templateUrl: 'templates/views/home.html',
	            controller: 'HomeController'
	          }
	        }
	    })
	    .state('ionic.start', {
	        url: '/start',
	        cache: true,
	        views: {
	          'viewContent': {
	            templateUrl: 'templates/start/start.html',
	            controller: 'StartController as startCtrl'
	          }
	        }
	    })
	    .state('ionic.choose', {
	        url: '/choose',
	        views: {
	          'viewContent': {
	            templateUrl: 'templates/choose/choose.html',
	            controller: 'ChooseController as chooseCtrl'
	          }
	        }
	    })
	    .state('ionic.new', {
	        url: '/new',
	        cache: true,
	        views: {
	          'viewContent': {
	            templateUrl: 'templates/choose/add-new.html',
	            controller: 'AddNewController as newCtrl'
	          }
	        }
	    })
	    .state('ionic.settings', {
	        url: '/settings',
	        cache: true,
	        views: {
	          'viewContent': {
	            templateUrl: 'templates/views/settings.html',
	            controller: 'SettingsController'
	          }
	        }
	    })
	    .state('ionic.options', {
	        url: '/options',
	        cache: true,
	        views: {
	          'viewContent': {
	            templateUrl: 'templates/options/options.html',
	            controller: 'OptionsController as optionsCtrl'
	          }
	        }
	    })
	    .state('ionic.optimization', {
	        url: '/optimization',
	        views: {
	          'viewContent': {
	            templateUrl: 'templates/optimization/optimization.html',
	            controller: 'OptimizationController as optimizationCtrl'
	          }
	        },
	        resolve: {
	    		OptimizationResult: function(OptimizationResource, SelectedProductsFactory, $http) {
	    			return OptimizationResource.optimize(null,SelectedProductsFactory.getOptimizationConfiguration());
	    			// return $http.get('http://jsonplaceholder.typicode.com/posts/1');
	    		}
	    	}
	    });


	    // redirects to default route for undefined routes
	    $urlRouterProvider.otherwise('/start');


	    // Defines interceptors


	});