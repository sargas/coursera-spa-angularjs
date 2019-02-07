(function() {
'use strict';

angular.module('MenuApp')
	.component('categoryItems', {
		templateUrl: 'src/templates/items.component.template.html',
		bindings: {
			foodItems: '<'
		}
	});
})();
