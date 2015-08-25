app.controller("HomeController", ["$scope", "teas", function($scope, teas) {
  $scope.teaData = [];
  if (teas.teaData === undefined) {
  teas.getData().success(function(data) {
    teas.teaData = data;
    teas.teaData.forEach(function(item, index, array) {
      item.quantity = 0;
    });
    $scope.teaData = data;
  });
  }
  $scope.addQuant = function (input) {
      var quantity = this.quantity;
    teas.teaData.forEach(function (item, index, array) {
      if (item.name === input) {
        item.quantity = item.quantity + parseInt(quantity);
      }
    });
  };

}]);

app.controller("CartController", ["$scope", "teas", function($scope, teas) {
  console.log(teas.teaData);
  $scope.showTea = teas.teaData;

}]);
