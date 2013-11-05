var i, len, list, main, item;

var onItemClicked = function (e) {
	var i = 0, len = devices.length;

	for(i = 0; i < len; i++) {
		if(devices[i].name === e.target.innerText) {
			devices[i].status = (devices[i].status === 'in') ? 'out' : 'in';
			console.log(devices[i].status);
		}
	}
};

main = document.getElementById('devices');
list = main.getElementsByClassName('list');

if(list.length !== 0) {
	len = devices.length;	
	for(i = 0; i < len; i++) {
		item = document.createElement('li');		
		item.innerText = devices[i].name;
		item.addEventListener('click', onItemClicked);

		list[0].appendChild(item);
	}
}