var express = require('express');

var app = express();

/**
 * Hello.
 * Called the first time you hit the site. Should probably go into middleware.
 */
app.get('/hello', function(req, res){
	var data = {
		session: {
			isAuthenticated : false
		}
	};

	res.send(data);
});

/**
 * There are a million different things I could do with vouchers
 * do we put them into separate end points or paramatize them into groups?
 */
app.get('/vouchers', function(req, res){
	
});

/**
 * The same goes for vendors. What about international vendors?
 * One vendor, many vouchers.
 */
app.get('/vendors', function(req, res){
	
});

/**
 * A store will always belong to a vendor. Filter by country for international.
 * One vendor, many stores.
 */
app.get('/stores/:vendor', function(req, res){
	var data = [{
			'street' : '1 False Street',
			'city'   : 'Dublin',
			'coords' : '12000,34221'
		}
	];
	
	res.send(data)
});

// Ping! Pong!
app.listen(3000);