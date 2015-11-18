'use strict';

/**
 * @ngdoc function
 * @name Rolnik.controller:StartController
 * @description
 * # StartController
 */
angular.module('Rolnik')
  .controller('StartController', function($scope) {

    // do something with $scope
    var vm = this;

    this.auth = auth;

    function auth() {
    	console.log("a");


		var tk = document.createElement('script');
	    tk.src = 'https://apis.google.com/js/client.js';
	    tk.type = 'text/javascript';
	    tk.async = 'true';
	    tk.onload = tk.onreadystatechange = function() {
	      console.log("g");
	    };
	    var s = document.getElementsByTagName('script')[0];
	    s.parentNode.insertBefore(tk, s);

	}

  });
