'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const http = require('http');
const morgan = require('morgan');
const webhookRouter = require('./router/webhook');

const app = express()
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/webhook', webhookRouter);

const hostname = 'localhost';
const port = 3000;

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Webhook listening at http://${hostname}:${port}`)
});
