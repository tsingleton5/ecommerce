angular.module("app").service("adminService", function($http) {

this.createProducts = function (product) {
  return $http({
    method: 'POST',
    url: '/api/products',
    data: product
  })
  .then(function (response) {
    return response;
  })
}

});
