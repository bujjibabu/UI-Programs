var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var data = {};

var notifications = {};
var MAX_MESSAGES = 50;

var app = new express();
app.set('port', 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname,'angularjs')));



app.listen(app.get('port'),function() {
    console.log('Express server listening on port %d',app.get('port'));
});
