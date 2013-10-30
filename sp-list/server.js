var connect = require('connect'), 
    http = require('http'),
    app;

app = connect()
  .use(connect.static('app'))

http.createServer(app).listen(9999, function() {
  console.log('Running on http://localhost:9999');
});