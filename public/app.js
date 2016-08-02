angular.module("threeQuestions", ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('home',{
    url:'/',
    templateUrl: "landingPage.html"
  });

  $urlRouterProvider
  .otherwise('/');
});
