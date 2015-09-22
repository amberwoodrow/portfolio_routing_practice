app.controller('projectsController', function($scope){
  $scope.message = "My projects!";
});

app.controller('bioController', function($scope){
  $scope.message = "All about me. My bio!";
});

app.controller('resumeController', function($scope){
  $scope.message = "My Resume!";
});

app.controller('headerController', function($scope, $location){
  $scope.isActive = function (viewLocation) { 
    return viewLocation === $location.path();
  };
});