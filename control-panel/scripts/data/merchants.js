var merchants = (function () {
	var data = [];

	for(var i = 0 ; i < 1000; i ++) {
		data.push({
			name : 'Example Merchant ' + i,
			desc : 'Just another merchant'			
		});
	}

	return data;
}());