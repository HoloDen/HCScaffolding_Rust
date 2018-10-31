const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cmd=require('node-cmd');
const app = express();
// https://stackoverflow.com/questions/18864677/what-is-process-env-port-in-node-js
console.log("Listening for 3005.");
app.listen(3005);

var process=cmd.get('node');

function executeCommand(command){
  var hcCommand = command.toString()
  cmd.get(
    hcCommand.toString(),
    function(err, data, stderr){
        console.log('the current working dir is : ',data)
    }
  );
}
