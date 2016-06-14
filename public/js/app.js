angular.module("app", ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {

$stateProvider
  .state('home', {
    url: '/home',
    templateUrl: 'tmpls/homeTmpl.html',
    controller: 'homeCtrl'
  })
  .state('admin', {
    url: '/admin',
    templateUrl: 'tmpls/adminTmpl.html',
    controller: 'adminCtrl'
  })


})
