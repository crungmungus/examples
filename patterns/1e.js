/*jslint browser: true, devel: true, plusplus: true, white: false, indent: 2 */

(function (global) {
	var DeviceList = function (el) {
		this.el = el;
	};

	var p = DeviceList.prototype;

	p.load = function (data) {
		this.data = data;
	};

	p.list = function () {
		var i, len, item, list;

		list = this.el.getElementsByClassName('device-list')[0];
		list.innerHTML = '';

		len = this.data.length;
		for(i = 0; i < len; i++) {
			item = document.createElement('li');
			item.innerText = this.data[i].name;				
		
			list.appendChild(item);
		}
	};	

	global.DeviceList = DeviceList;
}(window));

// Lastly, instantiate and load in data.
var myDeviceList = new DeviceList(document.getElementById('devices'));
		myDeviceList.load(devices);
		myDeviceList.list();