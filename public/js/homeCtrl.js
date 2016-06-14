angular.module("app").controller("homeCtrl", function($scope, getProductService) {

getProductService.getProducts()
  .then(function (response) {
    $scope.products = response.data;
  })


});
