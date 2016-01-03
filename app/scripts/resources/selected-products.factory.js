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
	factory.options.delivery = "deliveryHome"; /* {deliveryHome/deliveryOwn} */
	factory.options.discount = false;
	factory.options.shopsCountRestrictionValue = 0;
	factory.options.shopsCountRestrictionIsSet = false;
	factory.options.distanceRestrictionValue = 0;
	factory.options.distanceRestrictionIsSet = false;

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

	factory.setShopsCountRestriction = function(value) {
		if(!angular.isUndefined(value) && angular.isNumber(value) && value > 0) {
			factory.options.shopsCountRestrictionValue = value;
		}
		else {
			factory.options.shopsCountRestrictionValue = 0;
		}
	}

	factory.setDistanceRestriction = function(value) {
		if(!angular.isUndefined(value) && angular.isNumber(value) && value > 0) {
			factory.options.distanceRestrictionValue = value;
		}
		else {
			factory.options.distanceRestrictionValue = 0;
		}
	}

	factory.getOptimizationConfiguration = function() {
		var data = {
			productsId: _.pluck(factory.selectedProducts, 'id')
		};
		return data;
	}

	return factory;
}
