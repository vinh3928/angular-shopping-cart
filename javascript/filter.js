app.filter("customCurrency", function () {
  return function (input) {
    var result = input/100;
    return result;
  };
});

app.filter("totalPrice", ["teas", function(teas) {
  return function (input) {
    var result = 0;
    for (var i = 0; i < input.length; i ++) {
      result += input[i].price * parseInt(input[i].quantity);
    }
    return result;
  };
}]);

