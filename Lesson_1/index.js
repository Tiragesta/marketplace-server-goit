const startServer = require('./server/server');
const { port } = require('./server/config/config');

startServer(port);