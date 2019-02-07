(function() {
'use strict';

angular.module('MenuApp')
	.component('categoryView', {
		templateUrl: 'src/templates/categories.component.template.html',
		bindings: {
			categories: '<'
		}
	});
})();
