
angular.module('rolnikResources').service('ItemsService', function($q) {
  return {
    getItem: function() {
      var dfd = $q.defer()

      setTimeout(function() {
        dfd.resolve({
          name: 'Mittens Cat'
        })
      }, 2000)

      return dfd.promise
    }
  }
})

'use strict';
angular.module('rolnikResources')
    .factory('OptimizationResource', OptimizationResource);

/*
* ngInject
*/
function OptimizationResource($resource) {

  var resource = $resource(
    'api/optimize', 
    {}, 
    {   
      optimize: {
        method: 'POST',
        isArray: false
      }
    });
  return resource;
}
