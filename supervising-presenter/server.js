var connect = require('connect'), 
    http = require('http'),
    app;

app = connect()
  .use(connect.static('app'))
  .use('scripts', connect.static('scripts/'))

http.createServer(app).listen(8080, function() {
  console.log('Running on http://localhost:8080');
});