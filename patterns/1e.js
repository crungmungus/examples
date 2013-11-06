
/*jslint browser: true, devel: true, plusplus: true, white: false, indent: 2 */

(function (global) {
	var DeviceList = function (el) {
		this.el = el;

		this.el.addEventListener('click', this.onItemClicked);
	};

	var p = DeviceList.prototype;

	p.onItemClicked = function (e) {
		console.log(e);
	};

	p.list = function (data, tmpl) {
		data.forEach(function (obj) {
			this.el.appendChild(tmpl(obj));
		}.bind(this));
	};	

	global.DeviceList = DeviceList;
}(window));

// Lastly, instantiate and load in data.
var dm = new DeviceList(document.getElementById('devices'));

// Pass in data with a decorator.
dm.list(devices, function (obj) {
	var li = document.createElement('li');
			li.innerText = obj.name;

	return li;
});