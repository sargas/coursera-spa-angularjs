(function () {
    "use strict";

angular.module('public')
.directive('validMenuItem', MenuItemValidator);

MenuItemValidator.$inject = ['MenuService', '$q'];
function MenuItemValidator(MenuService, $q) {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
            ctrl.$asyncValidators.menuItem = function(modelValue, viewValue) {
                if (ctrl.$isEmpty(modelValue)) {
                    // don't invalidate empty string
                    // "required" directive will do that
                    return $q.resolve();
                }
                if (!modelValue.match(/[A-Z]+\d+/)) {
                    // if a value is provided but it isn't the right form, reject ASAP
                    return $q.reject();
                }

                return MenuService.getMenuItem(modelValue);
            }
        }
    }
}
})();