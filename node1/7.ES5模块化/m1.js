var model1 = (function() {
  var object = {};
  var app = document.getElementById('app');
  function writeHTML(element) {
    app.innerHTML = element;
  }
  object.app = app;
  object.writeHTML = writeHTML;
  return object;
})();

