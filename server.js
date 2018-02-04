// TODO: create a basic server with express
// that will send back the index.html file on a GET request to '/'
// it should then send back jsonData on a GET to /data
var express = require('express');
var app = express();
var jsonData = { count: 12, message: 'hello boys' };


var fs = require('fs');


app.get('/', function (req, res) {

       res.sendFile(__dirname + '/index.html', function(error, data){
       })
    
        // res.setHeader('content-Type', 'text/html');
        // res.send(html);
    

});

app.get('/data', function (req, res) {
    res.json(jsonData);

})



app.listen(3000, function () {

    console.log('server is listeing on port 3000');
})