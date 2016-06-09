var angularApp = angular.module('govtApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider) {
  $routeProvider
  .when ('/', {
    templateUrl: 'pages/landing.html',
    controller: 'HomeController',
    controllerAs: 'vh'
  })

});


angularApp.controller("HomeController",['$resource','$routeParams',function($resource,$routeParams){
 var vm = this;
 vm.getdetails = function (){
   var details =$resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP,SEX',{FIPS:vm.country,time:vm.year,SEX:vm.sex,key:'acf10978ecd78c52fd2a2a9c20b3ffca279a472f'});
   vm.response = details.query();
   console.log(vm.response);
 }
}]);
