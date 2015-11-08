'use strict';

/**
 * @ngdoc function
 * @name Rolnik.controller:OptionsController
 * @description
 * # OptionsController
 */
angular.module('Rolnik')
  .controller('OptionsController', OptionsController);

function OptionsController(SelectedProductsFactory) {
	var vm = this;

	// variables
	vm.SelectedProductsFactory = SelectedProductsFactory;

	//methods

	activate();

    function activate() {
    }

}
