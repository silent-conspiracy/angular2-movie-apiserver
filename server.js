var express = require('express');
var path = require('path');
var api = require('./api');

var app = express();
// To enable CORS
app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use('/api', api);
app.use('/', express.static('dist'));
app.listen(3000, '0.0.0.0', function() {
    console.log("Server started on port 3000");
});