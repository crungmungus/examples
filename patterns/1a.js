/*jslint browser: true, devel: true, plusplus: true, sloppy: true, white: false, indent: 2 */

// Freshly linted, slight improvement on original.
var i, len, list, main, item, devices;

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

main = document.getElementById('devices');
list = main.getElementsByClassName('list');

if (list.length !== 0) {
  len = devices.length;
  for (i = 0; i < len; i++) {
    item = document.createElement('li');
    item.innerText = devices[i].name;
    item.addEventListener('click', onItemClicked);

    list[0].appendChild(item);
  }
}