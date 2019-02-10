(function () {
"use strict";

angular.module('common')
    .service('NewsletterService', NewsletterService);

function NewsletterService() {
    var service = this;

    service.signedUpUser = undefined;

    service.isSignedIn = function() {
        return service.signedUpUser !== undefined;
    }

    service.registerUser = function(user) {
        service.signedUpUser = user;
    }
}

})();