const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const route = require('./routes')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(route)
const port = 8000;
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;