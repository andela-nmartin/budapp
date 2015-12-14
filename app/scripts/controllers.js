angular.module('budgetApp.controllers', [])
  .controller('FinanceController', function($scope) {
    $scope.salary = 0;
    $scope.rent = 17500;
    $scope.electricity = 1200;
    $scope.phone = 1500;
    $scope.cic = 3000;
    $scope.transport = 3000;
    $scope.food = 5000;
    $scope.dt = new Date();

    $scope.result = function() {
      return $scope.salary - (0.1 * $scope.salary) - $scope.rent - $scope.transport - $scope.food - $scope.electricity - $scope.phone - $scope.cic;
    };
  });