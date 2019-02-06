(function() {
'use strict';
angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItemsDirective)
	.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
	var ddo = {
		restrict: 'E',
		scope: {
			list: '<foundItems',
			onRemove: '&'
		},
		templateUrl: 'foundItems.html'
	};
	return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
    var vm = this;
	vm.found = [];
	vm.searchTerm = "";
	vm.loading = false;
	vm.performedSearch = false;

	vm.removeFound = function(index) {
		vm.found.splice(index, 1);
	}

	vm.search = function() {
		vm.performedSearch = true;

		if (vm.searchTerm === '') {
			vm.found = [];
			return;
		}

		vm.loading = true;
		MenuSearchService.getMatchedMenuItems(vm.searchTerm)
		.then(function (menuItems) {
			vm.loading = false;
			vm.found = menuItems;
		})
		.catch(function (error) {
			console.log(error);
		});
	}
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
    var service = this;

	service.getMatchedMenuItems = function (searchTerm) {
		return $http({
			url: (ApiBasePath + '/menu_items.json')
		})
		.then(function (response) {
			return response.data.menu_items.filter(function (menuItem) {
				return containsInString(
					menuItem.description.toLowerCase(),
					searchTerm.toLowerCase());
			});
		});
	};
}

function containsInString(originalString, searchTerm) {
	return originalString.indexOf(searchTerm) !== -1;
}

})();
