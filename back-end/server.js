const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cmd=require('node-cmd');

const app = express();

const port = 3005;

var process=cmd.get('node');
console.log(process.pid);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/build')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

app.post('/send', (req, res) => {

    cmd.get(
        req.body.post,
        function(err, data, stderr){
            console.log(data)
        }
    );

    res.send(
        `This is what you sent me: ${req.body.post}`,
    );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
