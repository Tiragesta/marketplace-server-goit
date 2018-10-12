const http = require('http');

const morgan = require('morgan');
const router = require('./routes/router');

const logger = morgan('combined');

const startServer = port => {

  const server = http.createServer((request, response) => {    

   const route = request.url.split('/').slice(1);
    const func = (route[1] === 'create') ? router['/'+route[0]+'/'+route[1]] : router['/'+route[0]] || router.default;
    

    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;


