angular.module("app").controller("homeCtrl", function($scope, callService) {

callService.getProducts()
  .then(function (response) {
    $scope.products = response.data;
  })


});
