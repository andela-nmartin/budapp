/* jasmine specs for controllers go here */


describe('controllers', function(){
  beforeEach(module('budgetApp.controllers'));


  it('should initialize controller with salary=33000, rent=17500, electricity=1200, cic=3000, transport=3000, food=5000 & calculated result=1000', inject(function($rootScope,$controller) {
    var scope=$rootScope.$new();
    $controller('FinanceController',{$scope:scope});
    expect(scope.salary).toBe(56000);
    expect(scope.rent).toBe(17500);
    expect(scope.electricity).toBe(1200);
    expect(scope.cic).toBe(3000);
    expect(scope.transport).toBe(3000);
    expect(scope.food).toBe(5000);
    expect(scope.result()).toBe(19200);
  }));
});
