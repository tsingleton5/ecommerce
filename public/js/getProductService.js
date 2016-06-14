angular.module("app").service("getProductService", function($http) {

this.getProducts = function () {
  return $http({
    method: 'GET',
    url: '/api/products'
  })
  .then(function (response) {
    return response;
  })
}

});
