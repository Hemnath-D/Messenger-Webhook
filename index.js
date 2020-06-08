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
const port = process.env.PORT || 3000;

app.get('/',(req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Hello World!!!</h1></body></html>');
})

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Webhook listening at http://${hostname}:${port}`)
});
