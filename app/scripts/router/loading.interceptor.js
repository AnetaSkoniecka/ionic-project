// angular.module('Rolnik')
// 	.service('LoadingInterceptor', LoadingInterceptor);

// function LoadingInterceptor ($rootScope) {
// 	return {
//       request: function(config) {
//       	if(_(config.url).startsWith('api')) {
//         	$rootScope.$broadcast('loading:show');
//       	}
//         return config;
//       },
//       response: function(response) {
//       	if(_(response.config.url).startsWith('api')) {
//         	$rootScope.$broadcast('loading:hide');
//         }
//         return response;
//       }
//     }
// }