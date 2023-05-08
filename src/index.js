const config = require('../config.json');
const express = require('express');
const app = express();
const fs = require("fs");
const path = require('path');
const ejs = require('ejs');


app.use(express.static('public'));
app.set('views', path.join(__dirname, '/views'));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');
app.listen(config["siteInformation"].processPort, async function () {
    console.log(`\x1b[32mStarted Website...\x1b[0m`);
});
// Pages
app.get('/', function(req,res) {
        res.render('index', {req: req});
})
