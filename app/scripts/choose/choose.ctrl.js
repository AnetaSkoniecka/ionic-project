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
    vm.addCount = addCount;
    vm.substractCount = substractCount;

	activate();

    function activate() {
        vm.selectedProducts = SelectedProductsFactory.getSelectedProducts();
    }

    function deleteProduct(product) {
    	SelectedProductsFactory.removeProduct(product.id);
    }

    function addCount(product) {
        product.count = product.count + 1;
    }

    function substractCount(product) {
        if(product.count < 0) {
            product.count = 0;
        }
        else if(product.count > 0) {
            product.count = product.count - 1;
        }
    }

}
