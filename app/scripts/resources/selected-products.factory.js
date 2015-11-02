'use strict';
angular.module('rolnikResources')
    .factory('SelectedProductsFactory', SelectedProductsFactory);

/*
* ngInject
*/
function SelectedProductsFactory() {

	var factory = this;
	factory.selectedProducts = [];

	factory.addProduct = function(product) {
		var repeat = _.findWhere(factory.selectedProducts, { 'id': product.id });
		if(angular.isUndefined(repeat)) {
			factory.selectedProducts.push(product);
			return true;
		}
		return false; 
	}

	factory.removeProduct = function(productId) {
		_.remove(factory.selectedProducts, function(product) {
			return product.id === productId;
		});
	}

	factory.getSelectedProducts = function() {
		return factory.selectedProducts;
	}

	return factory;
}
