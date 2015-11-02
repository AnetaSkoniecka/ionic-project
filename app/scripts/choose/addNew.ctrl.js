'use strict';

/**
 * @ngdoc function
 * @name Rolnik.controller:AddNewController
 * @description
 * # AddNewController
 * # source: http://gonehybrid.com/how-to-add-a-search-bar-in-the-header-on-ionic/
 */
angular.module('Rolnik')
  .controller('AddNewController', AddNewController)

function AddNewController($scope, $state, SearchProductsResource, SelectedProductsFactory) {
	var vm = this;

    // methods
    vm.clearSearch = clearSearch;
    vm.search = search;
    vm.addSelectedProduct = addSelectedProduct;
    vm.SelectedProductsFactory = SelectedProductsFactory;
    vm.SearchProductsResource = SearchProductsResource;

    // values
    vm.selectedProducts = [];
    vm.foundProducts = [];
    vm.searchKey = "";

    activate();

    function activate() {
        vm.clearSearch();
        vm.selectedProducts = SelectedProductsFactory.getSelectedProducts();
    }

    function clearSearch() {
        vm.searchKey = "";
        searchAll();
    }

    function search() {
        SearchProductsResource.getArray({searchKey: vm.searchKey}).$promise.then(function (foundProducts) {
            vm.foundProducts = foundProducts;
        });
    }

    function searchAll() {
        SearchProductsResource.query().$promise.then(function (foundProducts) {
            vm.foundProducts = foundProducts;
        });
    }

    function addSelectedProduct(product) {
        var success = SelectedProductsFactory.addProduct(product);
        if(success) {
            // TODO: przejdz do listy produktow i wyswietl alert z sukcesem
            console.log("a")
            $state.go("ionic.choose");
        } else {
            // TODO: wyswietla alert o niepowodzeniu
            console.log("b")
        }
    }
}