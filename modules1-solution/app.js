(function() {
'use strict';
angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

function getLunchCountMessage(numOfItems) {
    if (numOfItems === 0) {
        return 'Please enter data first';
    } else if (numOfItems <= 3) {
        return 'Enjoy!';
    } else {
        return 'Too much!';
    }
}

function countLunchItems(foodList) {
    return foodList.split(',').filter(x => x.trim() !== "").length;
}

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
    $scope.lunchAnalysis = '';
    $scope.foodList = '';

    $scope.runCheck = function() {
        $scope.lunchAnalysis = getLunchCountMessage(
            countLunchItems($scope.foodList));
    }
}
})();