'use strict';
angular.module('rolnikResources')
    .factory('OptimizationResource', OptimizationResource);

/*
* ngInject
*/
function OptimizationResource($resource, ApiService) {

  var resource = $resource(
    ApiService.getEndpoint() + '/optimize', 
    {}, 
    {   
      optimize: {
        method: 'POST',
        isArray: false
      }
    });
  return resource;
}
