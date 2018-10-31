const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cmd=require('node-cmd');
const app = express();
// https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
console.log("Listening for 3005.");
app.listen(3005);

var process=cmd.get('node');

app.post('/hcinit', (req, res) => {
  holochainInit(req.body.post); // Assuming the req.body.post contains the abosolute path specified from front-end.
});

app.post('/hcgenerate', (req, res) => {
  holochainGenerate(req.body.post); // Assuming the req.body.post contains the abosolute path specified from front-end.
});

function holochainInit(absolutePath){
  var hcCommand = "hc init " + absolutePath.toString();
  cmd.get(
    hcCommand,
    function(err, data, stderr){
        console.log('Holochain project created at: ', absolutePath.toString());
    }
  );
}

function holochainGenerate(absolutePath){
  var hcCommand = "hc generate " + absolutePath.toString();
  cmd.get(
    hcCommand,
    function(err, data, stderr){
        console.log('Holochain project created at: ', absolutePath.toString());
    }
  );
}
