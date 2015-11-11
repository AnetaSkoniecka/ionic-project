'use strict';
angular.module('Rolnik')
    .factory('SearchProductsResource', SearchProductsResource);

/*
* ngInject
*/
function SearchProductsResource($resource, ApiService) {

	var resource = $resource(
		ApiService.getEndpoint() + '/products/:searchKey', 
		{ 
			searchKey: "@searchKey" 
		}, 
		{ 	
			getArray: {
        		method: 'GET',
        		cache: true,
        		isArray: true
    		}
		});
	return resource;
}
