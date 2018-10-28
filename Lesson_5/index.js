const startServer = require('./src/server');
const connectToDB = require('./src/db/connect');
const { port, dbUrl } = require('./src/config/config');

startServer(port);
connectToDB(dbUrl);