angular.module("app").service("callService", function($http) {

  this.getProducts = function () {
    return $http({
      method: 'GET',
      url: '/api/products'
    })
    .then(function (response) {
      console.log(response.data, 'get');
      return response;
    })
  }




this.createProducts = function (product) {
  return $http({
    method: 'POST',
    url: '/api/products',
    data: product
  })
  .then(function (response) {
    console.log(response, 'admin');
    return response;
  })
}

this.deleteProducts = function (id) {
  return $http({
    method: 'DELETE',
    url: '/api/products/' + id
  })

}


//ending
});
