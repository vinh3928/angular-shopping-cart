app.factory("teas", ["$http", function ($http) {
  var teas = {};
  teas.getData = function () {
    return $http.get("data.json");
  };
  return teas;
}]);
