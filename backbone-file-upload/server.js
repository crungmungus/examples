var express = require("express"),                                                                
    app = express();                                                                             

app.post("/upload", function (req, res) {                                               
	//var serverPath = '/images/' + req.files.userPhoto.name;
	console.log(req.files);

	/*
	require('fs').rename(
		req.files.userPhoto.path,
		'/Users/admin/Documents/GitHub/examples/backbone-file-upload/app' + serverPath,
		function(error) {
		  if(error) {
				res.send({
		      error: 'Ah crap! Something bad happened'
				});
	      
	      return;
	    }

	    res.send({
				path: serverPath
	    });
		}
	);
*/
});                                                                                           

app.use(express.static(__dirname + '/app'));

app.listen(3000);

