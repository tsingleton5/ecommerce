angular.module("app").controller("adminCtrl", function($scope, adminService) {

$scope.createProducts = function (product) {
  adminService.createProducts({name: product})
}


});
