'use strict';
angular.module('rolnikResources')
    .factory('SelectedProductsFactory', SelectedProductsFactory);

/*
* ngInject
*/
function SelectedProductsFactory() {

	var factory = this;
	factory.selectedProducts = [];
	factory.options = {};
	factory.options.delivery = "";
	factory.options.discount = false;
	factory.options.shopsCountRestriction = {};
	factory.options.shopsCountRestriction.isSet = false;
	factory.options.shopsCountRestriction.value = 0;
	factory.options.distanceRestriction.isSet = false;
	factory.options.distanceRestriction.value = 0;

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

	factory.setDeliveryOption = function(deliveryOption) {
		factory.options.delivery = deliveryOption;
	}

	factory.setUseDiscount = function(isUsingDiscount) {
		factory.options.discount = isUsingDiscount;
	}

	factory.setShopsCountRestriction = function(isSet, value) {
		factory.options.shopsCountRestriction.isSet = isSet;

		if(!angular.isUndefined(value) && angular.isNumber(value) && value > 0) {
			factory.options.shopsCountRestriction.value = value;
		}
		else {
			factory.options.shopsCountRestriction.value = 0;
		}
	}

	return factory;
}
