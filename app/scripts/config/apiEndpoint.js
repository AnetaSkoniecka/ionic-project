'use strict';

/**
 * @ngdoc constant
 * @name Rolnik.API_ENDPOINT
 * @description
 * # API_ENDPOINT
 * Defines the API endpoint where our resources will make requests against.
 * Is used inside /services/ApiService.js to generate correct endpoint dynamically
 */


angular.module('Rolnik')

  // development
  // .constant('API_ENDPOINT', {
  //   host: 'http://localhost',
  //   port: 8080,
  //   path: '/api',
  //   needsAuth: false
  // });


  // live example with HTTP Basic Auth
  /*
  .constant('API_ENDPOINT', {
    host: 'http://yourserver.com',
    path: '/api/v2',
    needsAuth: true,
    username: 'whatever',
    password: 'foobar'
  });
  */

  // live example 
  .constant('API_ENDPOINT', {
    host: 'http://rolnik-opt.cloudapp.net',
    port: 8080,
    path: '/api',
    needsAuth: false
  });
  

