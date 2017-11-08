var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res){
    //res.send('Hello World');
    res.sendFile(path.join(_dirname + "/index.html"));
});

app.listen(3000);