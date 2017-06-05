const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/')));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
})


app.listen(3000, function(){
    console.log("Angular-Boilerplate running on http://localhost:3000");
})