app.filter("customCurrency", function () {
  return function (input) {
    var result = input/100;
    return result

  };
});
