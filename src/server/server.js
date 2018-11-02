var Promise = require('bluebird');
const chalk = require('chalk');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
var cmd=require('node-cmd');

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const message = chalk.bold.blue;
const IPnet = chalk.green.underline;
const conn = chalk.yellow.bold;

const port = 3005;

const app = express();
app.listen(port, () => console.log(message(`\nHC Scaffolding app listening on port ${port}!`)));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send("Hello From Express");
});

app.post('/sendcmd', (req, res) => {

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

app.post('/hcCreateApp', (req, res) => {

    console.log("\n------------------------------------------------- ");
    console.log(conn("\nDevice connected : "), IPnet(req.ip));

    hcCreateApp(req.body); // Assuming the req.body.post contains the abosolute path specified from front-end.

    function hcCreateApp(app){

        var hcinitCommand = "hc init ~/" + app.appPath.toString() + "/"+ app.appName.toString();
        var hcgenerateCommand = "hc generate ~/" + app.appPath.toString() + "/" + app.appName + "/zomes/" + app.zomeName.toString();

        console.log(message('\nRunning: '),chalk.underline(hcinitCommand));
        const AsyncCMD = Promise.promisify(cmd.get);

        AsyncCMD(hcinitCommand).then(data => {
            console.log(message("hc init response: "), warning(data));

            console.log(message('\nRunning: '),chalk.underline(hcgenerateCommand));
            const cmd2 = Promise.promisify(cmd.get);

            cmd2(hcgenerateCommand).then(data => {
                let result = "App created Succesfully at ~/" + app.appPath + "/" + app.appName;
                console.log(message("hc generate response: "), warning(data));
                console.log("------------------------------------------------- ");
                res.send(result);
            }).catch(err => {
                console.log(error("hc generate error: "), warning(err));
                console.log("------------------------------------------------- ");
                let result = "Zomes creation error: Directory '" + app.zomeName + "' already exists in ~/" + app.appPath + "/" + app.appName;
                res.send(result);
            });

        }).catch(err => {
            console.log(error("hc init error: "), warning(err));
            let errdata = warning(err);
            console.log("\n------------------------------------------------- ");
            res.send("App creation error: Directory '" + app.appName + "' already exists in ~/" + app.appPath);
        });

    }
});
