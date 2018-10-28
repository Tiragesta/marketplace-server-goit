const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./routes/router')
const config = require('./config/config');
const logger = morgan('combined');

const app = express();

const startServer = port => {
  app
    .use(bodyParser.urlencoded({extended: false}))
    .use(bodyParser.json())
    .use(morgan('dev'))
    .use('/', router)
    .use(errorHandler)
  app.listen(port);

  console.log('Server was started at http://localhost:' + port);
};

const errorHandler = (err, req, res)  => {
  console.error(err.stack);

  res.json(500).send('Something broke!');
};



module.exports = startServer;


