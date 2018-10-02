const http = require('http');
const url = require('url');

const morgan = require('morgan');
const router = require('./routes/router');

const logger = morgan('combined');

const startServer = port => {

  const server = http.createServer((request, response) => {    
    // Get route from the request
    const parsedUrl = url.parse(request.url);

    switch(parsedUrl){
      case '/':
        return router.default;

      case '/products':
      return router.getProducts;
        /*response.writeHead(200, {"Content-Type": "application/json"});
        response.write(JSON.stringify(products()));
        response.end();*/

      case '/product':
      return router.getProductsById;

      case '/user': 
      return router.getUser;

    }
   
    const func = router[parsedUrl.pathname] || router.default;

    logger(request, response, () => func(request, response));
  });

  server.listen(port);
};

module.exports = startServer;


