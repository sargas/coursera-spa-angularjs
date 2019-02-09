(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://secure-hamlet-30257.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
