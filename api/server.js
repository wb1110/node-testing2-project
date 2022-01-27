const express = require('express');

const server = express();
server.use(express.json());
const testingRouter = require('./router');

server.use('/api/testing', testingRouter);

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
