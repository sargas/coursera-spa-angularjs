(function () {
"use strict";

    angular.module('public')
    .service('NewsletterService', NewsletterService);

function NewsletterService() {
    var service = this;

    service.SignedUpUser = undefined;

    service.isSignedIn = function() {
        return service.SignedUpUser !== undefined;
    }

    service.registerUser = function(user) {
        service.SignedUpUser = user;
    }
}

})();