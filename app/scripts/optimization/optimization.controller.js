'use strict';

/**
 * @ngdoc function
 * @name Rolnik.controller:OptimizationController
 * @description
 * # OptimizationController
 */
angular.module('Rolnik')
  .controller('OptimizationController', OptimizationController);

function OptimizationController(OptimizationResult) {
	var vm = this;

	// variables
	vm.OptimizationResult = OptimizationResult;
	//methods

	activate();

    function activate() {
    	// console.log(OptimizationResult)
    }

}
