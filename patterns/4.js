// Bring in an application object (our first mediator?)

(function (global) {
  'use strict';

  var DeviceList = function (el) {
    this.el = el;
  };

  var p = DeviceList.prototype;

  p.initialize = function (func) {
    func.apply(this);
  };

  p.list = function (data, tmpl) {
    data.forEach(function (obj) {
      this.el.appendChild(tmpl(obj));
    }.bind(this));
  };

  global.DeviceList = DeviceList;
} (window));

// Lastly, instantiate and load in data.
var dm = new DeviceList(document.getElementById('devices'));

dm.initialize(function () {
  console.log(this);
});

// Pass in data with a decorator.
dm.list(devices, function (obj) {
  var li = document.createElement('li');
      li.innerText = obj.name;

  return li;
});