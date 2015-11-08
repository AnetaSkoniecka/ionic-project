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
	.run(function($ionicPlatform, $ionicLoading, $rootScope) {

	    $ionicPlatform.ready(function() {
	      // save to use plugins here
	    });

	    // add possible global event handlers here

	    $rootScope.$on('loading:show', function() {
			// $ionicLoading.show({template: 'Trwa pobieranie treści, proszę czekać.'})
		})

		$rootScope.$on('loading:hide', function() {
			// $ionicLoading.hide()
		})

		// $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
		// 	if(toState.name == 'ionic.optimization') {
		// 		$ionicLoading.show({template: 'Trwa pobieranie treści, proszę czekać.'})
		// 	}
		// 	// event.preventDefault();
		// })

		// $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
		// 	if(toState == 'ionic.optimization') {
		// 		$ionicLoading.hide();
		// 	}
		// 	event.preventDefault();
		// })

	$rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
    if (toState.resolve) {
    	console.log("s")
        $ionicLoading.show({template: 'Trwa pobieranie treści, proszę czekać.'})
    }
});
$rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    if (toState.resolve) {
    	console.log("s")
        $ionicLoading.hide();
    }
});

	});