var express = require("express"),                                                                
    app = express();                                                                             

app.use(express.bodyParser({
	keepExtensions: true, 
	uploadDir: __dirname + '/app/uploads' 
}));

app.use(express.static(__dirname + '/app'));

app.post("/upload", function (req, res) {
	res.send(200);
});                                                                                           



app.listen(3000);

