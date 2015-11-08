'use strict';

/**
 * @ngdoc function
 * @name Rolnik.controller:OptimizationController
 * @description
 * # OptimizationController
 */
angular.module('Rolnik')
  .controller('OptimizationController', OptimizationController);

function OptimizationController(item) {
	var vm = this;

	// variables
	vm.item = item;
	//methods

	activate();

    function activate() {
    }

}
