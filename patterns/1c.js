/*jslint browser: true, devel: true, plusplus: true, white: false, indent: 2 */

(function (global) {
	'use strict';

	var DeviceManager = function (el) {
		this.el = el;
	}

	var p = DeviceManager.prototype;

	p.onItemClicked = function (e) {
 		var i, len;

    len = devices.length;
    for (i = 0; i < len; i++) {
      if (devices[i].name === e.target.innerText) {
        devices[i].status = (devices[i].status === 'in') ? 'out' : 'in';
        console.log(devices[i].status);
      }
    }
	};

	p.initialize = function () {
		var i, len, list, item;
		
		list = this.el.getElementsByClassName('list');

	  if (list.length !== 0) {
	    len = devices.length;
	  
	    for (i = 0; i < len; i++) {
	      item = document.createElement('li');
	      item.innerText = devices[i].name;
	      item.addEventListener('click', this.onItemClicked);

	      list[0].appendChild(item);
	    }
	  }
	};

	global.DeviceManager = DeviceManager;
}(window));

var dm = new DeviceManager(document.getElementById('devices'));
		dm.initialize();