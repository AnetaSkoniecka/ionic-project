'use strict';

/**
 * @ngdoc function
 * @name Rolnik.controller:ChooseController
 * @description
 * # ChooseController
 */
angular.module('Rolnik')
  .controller('ChooseController', ChooseController);

function ChooseController($scope, SelectedProductsFactory) {
	var vm = this;

	// variables
	vm.selectedProducts = [];

	//methods
	vm.deleteProduct = deleteProduct;

	activate();

    function activate() {
        vm.selectedProducts = SelectedProductsFactory.getSelectedProducts();
    }

    function deleteProduct(product) {
    	SelectedProductsFactory.removeProduct(product.id);
    }

}
