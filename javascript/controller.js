app.controller("HomeController", ["$scope", "$http", function($scope, $http) {
  $http.get('data.json').then(function(data) {
    $scope.teaData = data.data
    console.log($scope.teaData);
  });

}]);
