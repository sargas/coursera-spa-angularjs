(function() {
'use strict';
angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService']
function ToBuyController(ShoppingListCheckOffService) {
    var vm = this;
    vm.list = ShoppingListCheckOffService.toBuy;

    vm.buyItem = ShoppingListCheckOffService.buyItem;
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
function AlreadyBoughtController(ShoppingListCheckOffService) {
    var vm = this;
    vm.list = ShoppingListCheckOffService.bought;
}

function ShoppingListCheckOffService() {
    var service = this;

    service.toBuy = [
        {name: 'cookies', quantity: 10},
        {name: 'chips', quantity: 5},
        {name: 'cheesecake', quantity: 1},
        {name: 'ice cream cones', quantity: 3},
        {name: 'muffins', quantity: 2}
    ];

    service.bought = [];

    service.buyItem = function(index) {
        let boughtItem = service.toBuy.splice(index, 1)[0];
        service.bought.push(boughtItem);
    }
}
})();