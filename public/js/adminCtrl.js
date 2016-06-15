angular.module("app").controller("adminCtrl", function($scope, callService) {

$scope.createProducts = function (product) {
  callService.createProducts(product)
  .then(function (response) { // these 4 lines makes it so it so the page reloads when you add a product
    $scope.products.push(response.data); // added .data and now it works.
    return response;
  })
}

$scope.deleteProducts = function (product) {
  callService.deleteProducts(product._id)
  .then(function (response) {
    for (var i = 0; i < $scope.products.length; i++) {
      if ($scope.products[i]._id === product._id) {
        $scope.products.splice(i, 1);
      }
    }
    return response;
  })
}

callService.getProducts()
  .then(function (response) {
    $scope.products = response.data;
  })


});
