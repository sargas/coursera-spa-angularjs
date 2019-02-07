(function() {
'use strict';

angular.module('MenuApp')
	.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categories', 'foodItems']
function CategoriesController(categories, foodItems) {
	var $ctrl = this;

	$ctrl.categories = categories.data;
	$ctrl.foodItems = foodItems.data.menu_items;

	// may be undefined
	$ctrl.selectedCategory = foodItems.data.category;
}
})();
