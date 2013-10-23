var express = require('express');
var app = express();

var pg = require('pg').native
  , connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/dummy'
  , client
  , query;

app.listen(process.env.PORT || 3000);