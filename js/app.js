var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/projects', {
      templateUrl: 'partials/projects.html',
      controller: 'projectsController'
    })
    .when('/', {
      templateUrl: 'partials/bio.html',
      controller: 'bioController'
    })
    .when('/resume', {
      templateUrl: 'partials/resume.html',
      controller: 'resumeController'
    })
    .otherwise({redirectTo:'/'});
});