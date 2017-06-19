
var Module = (function Module() {

  var _private = {
    "name": ""
  };

  // Return the constructor
  return function Module() {

    var _this = this;

    _this.say_hello = function () {
      console.log("Hello " + _private.name);
      return _this;
    }

    _this.set_name = function (name) {
      _private.name = name;
      return _this;
    }

  }
}())

module.exports = {
  Module : Module
}

