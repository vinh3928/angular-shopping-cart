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
  } else {
    $scope.teaData = teas.teaData;
  }
  $scope.addQuant = function (input) {
      var quantity = this.quantity;
    teas.teaData.forEach(function (item, index, array) {
      if (item.name === input) {
        if (quantity === undefined) {
        item.quantity = item.quantity + 1;
        } else {
        item.quantity = item.quantity + parseInt(quantity);
        }
      }
    });
  };
  $scope.checkout = "empty";
  $scope.checkoutLength = [];
  $scope.checkoutTea = function (tea) {
    for (var i = 0; i < $scope.checkoutLength.length; i ++) {
      if ($scope.checkoutLength[i] == tea) {
        return;
      }
    }
    $scope.checkoutLength.push(tea);
    $scope.checkout = "(" + $scope.checkoutLength.length + ")"
  }
}]);

app.controller("CartController", ["$scope", "teas", function($scope, teas) {
  console.log(teas.teaData);
  $scope.showTea = teas.teaData;
  $scope.saveTea = function (amount, id) {
    for (var i = 0; i < teas.teaData.length; i ++) {
      if (id === teas.teaData[i]._id) {
        teas.teaData[i].quantity = amount;
      }
    }
  };
  $scope.removeTea = function (id) {
    for (var i = 0; i < teas.teaData.length; i ++) {
      if (id === teas.teaData[i]._id) {
        teas.teaData[i].quantity = 0;
      }
    }
  };

}]);
