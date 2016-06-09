var angularApp = angular.module('govtApp', ['ngResource','ngRoute']);

angularApp.config(function ($routeProvider) {
  $routeProvider
  .when ('/', {
    templateUrl: 'pages/landing.html',
    controller: 'HomeController',
    controllerAs: 'vh'
  })

});

//   .when ('/leaguedetails/:uniqId', {
//     templateUrl: 'pages/details.html',
//     controller: 'DetailsController',
//     controllerAs: 'dc'
//   })
//
//
// .when ('/playersdetails', {
//   templateUrl: 'pages/players.html',
//   controller: 'PlayersController',
//   controllerAs: 'pc'
// })
// //
// });
//
//
//
// angularApp.config(['$httpProvider', function ($httpProvider) {
//    $httpProvider.defaults.headers.common['X-Auth-Token'] = 'af86c338f9014ef3bae9c0d3e246961a';
// }]);
//
//
angularApp.controller("HomeController",['$resource','$filter', '$http','$q',function($resource,$filter,$http,$q){
  var vm=this;
    var governmentResource = $resource('http://api.census.gov/data/timeseries/idb/1year?get=AREA_KM2,NAME,AGE,POP&FIPS=IN&time=2012&SEX=0');
    vm.governmentResponse = governmentResource.query();
    console.log(vm.governmentResponse);
    // console.log(vm.response);
}]);
//
//
// angularApp.controller("DetailsController",['$filter','$routeParams','$location','$rootScope','FootballService','playerService',function($filter,$routeParams,$location,$rootScope,FootballService,playerService){
//     var vm=this;
//
//
//
//
//     var id = $routeParams.uniqId;
//     vm.detailsResponse = FootballService.getTeams(id);
//     vm.pointsResponse = FootballService.getPoints(id);
//     vm.teamPlayers = function(data){
//       playerService.api = data;
//     }
//
//     console.log(vm.detailsResponse);
//     console.log(vm.pointsResponse);
//
//   }]);
//
//
//     angularApp.controller("PlayersController",['$resource','$filter','playerService',function($resource,$filter,playerService){
//
//
//       var vm = this;
//         vm.getApi =  playerService.api;
//          vm.getFixt = $resource(vm.getApi+'/fixtures').get();
//         console.log(vm.getFixt);
//         vm.getPlayers = $resource(vm.getApi+'/players').get();
//         console.log(vm.getPlayers);
//
//
// }]);
//
//
//
//
// angularApp.service('FootballService', function($resource) {
//   var vm =this;
//     vm.getTeams = function (id) {
//       var footballDetails = $resource('http://api.football-data.org/v1/soccerseasons/' + id + '/teams');
//       vm.detailsResponse = footballDetails.get();
//       return vm.detailsResponse;
//     }
//
//     vm.getPoints = function(id) {
//       var footballDetails = $resource('http://api.football-data.org/v1/soccerseasons/' + id + '/leagueTable');
//       vm.pointsResponse = footballDetails.get();
//       return vm.pointsResponse;
//     }
//
//     vm.getTeamdetails = function(url) {
//       var teamDetails = $resource(url);
//       vm.teamsResponse = teamDetails.get();
//       return vm.teamsResponse;
//     }
//
//
// angularApp.service('govService',function(){
// var vm= this;
// vm.api = '';
// });
