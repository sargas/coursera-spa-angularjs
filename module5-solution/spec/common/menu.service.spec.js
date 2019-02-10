describe('MenuService', function () {

  var MenuService;
  var $httpBackend;
  var ApiPath;

  beforeEach(function () {
    module('common');

    inject(function ($injector) {
      MenuService = $injector.get('MenuService');
      $httpBackend = $injector.get('$httpBackend');
      ApiPath = $injector.get('ApiPath');
    });
  });

  it('should return a menu item', function() {
    var MENU_ITEM = {
      "id":4,"short_name":"A4","name":"Hot and Sour Soup",
      "description":"tofu, chicken, mushroom, bamboo shoot, and egg",
      "price_small":2.55,"price_large":5.0,"small_portion_name":"pint",
      "large_portion_name":"quart","created_at":"2019-02-09T05:09:49.978Z",
      "updated_at":"2019-02-09T05:09:49.978Z","category_short_name":"A",
      "image_present":true}
    $httpBackend.whenGET(ApiPath + '/menu_items/A4.json')
		  .respond(MENU_ITEM);
    MenuService.getMenuItem('A4').then(function(response) {
      expect(response).toEqual(MENU_ITEM);
    });
    $httpBackend.flush();
  });

  it('should reject an invalid menu item', function() {
    $httpBackend.whenGET(ApiPath + '/menu_items/H42.json').respond(500);
    MenuService.getMenuItem('H42').then(function(response) {
      fail('Resolved the menu item: ' + response)
    })
    .catch(function(errorResponse) {
      expect(errorResponse).not.toBe(undefined);
    });
    $httpBackend.flush();
  });
});
