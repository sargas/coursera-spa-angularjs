(function() {
'use strict';

angular.module('MenuApp')
	.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'src/templates/home.template.html'
		})

		.state('categories', {
			url: '/categories',
			templateUrl: 'src/templates/categories.template.html',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}],
				foodItems: function() { return {data: {"menu_items": []}}; }
			},
			controller: 'CategoriesController',
			controllerAs: '$ctrl'
		})

		.state('items', {
			url: '/items/{category}',
			templateUrl: 'src/templates/categories.template.html',
			resolve: {
				categories: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}],
				foodItems: ['MenuDataService', '$stateParams',
				function(MenuDataService, $stateParams) {
					return MenuDataService.getItemsForCategory($stateParams.category);
				}],
			},
			controller: 'CategoriesController',
			controllerAs: '$ctrl'
		});
}
})();
