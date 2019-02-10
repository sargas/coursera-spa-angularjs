(function () {
    "use strict";
        
angular.module('public')
    .controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['NewsletterService', 'favoriteMenuItem', 'ApiPath'];
function MyInfoController(NewsletterService, favoriteMenuItem, ApiPath) {
    var myInfo = this;

    myInfo.user = NewsletterService.signedUpUser;
    myInfo.favoriteMenuItem = favoriteMenuItem;
    myInfo.ApiPath = ApiPath;
}

})();