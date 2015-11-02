'use strict';
angular.module('rolnikResources')
    .factory('SearchProductsResource', SearchProductsResource);

/*
* ngInject
*/
function SearchProductsResource($resource) {

	var resource = $resource(
		'api/products/:searchKey', 
		{ searchKey: "@searchKey" }, 
		{ getArray: {
        		method: 'GET',
        		isArray: true
    		}
		});
	return resource;
}
