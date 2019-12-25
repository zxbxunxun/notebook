var model2 = (function() {
  var app = model1.app;
  console.log(app);
  var str = '<h2>Hello world!</h2>';
  model1.writeHTML(str);

  function sum(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('TypeError', '类型错误');
    } else {
      return num1 + num2;
    }
  }
  return {
    sum: sum
  };
})();
