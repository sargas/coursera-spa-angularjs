(function () {
"use strict";
    
angular.module('public')
    .controller('SignUpController', SignUpController);

SignUpController.$inject = ['NewsletterService'];
function SignUpController(NewsletterService) {
    var signUpCtrl = this;

    signUpCtrl.user = {};
    signUpCtrl.saved = false;

    signUpCtrl.submitUser = function() {
        NewsletterService.registerUser(signUpCtrl.user);
        signUpCtrl.saved = true;
    }

    signUpCtrl.isSaved = function() {
        return NewsletterService.isSignedIn();
    }
}
})();