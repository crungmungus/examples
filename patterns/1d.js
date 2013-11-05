/*jslint browser: true, devel: true, plusplus: true, white: false, indent: 2 */

deviceManager = (function () {
	'use strict';

	var onItemClicked = function (e) {
		var i, len;

    len = devices.length;
    for (i = 0; i < len; i++) {
      if (devices[i].name === e.target.innerText) {
        devices[i].status = (devices[i].status === 'in') ? 'out' : 'in';
        console.log(devices[i].status);
      }
    }
	};

	return {
		initialize : function (el) {
			var i, len, list, item;
		
			list = el.getElementsByClassName('list');

		  if (list.length !== 0) {
		    len = devices.length;
		  
		    for (i = 0; i < len; i++) {
		      item = document.createElement('li');
		      item.innerText = devices[i].name;
		      item.addEventListener('click', onItemClicked);

		      list[0].appendChild(item);
		    }
		  }
		}
	}
}());

deviceManager.initialize(document.getElementById('devices'));