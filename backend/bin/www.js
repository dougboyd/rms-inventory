#!/usr/bin/env node

/**
 * Module dependencies.
 */
 const app = require('../src');
/*
const http = require('http');
const models = require('../src/models');
const Umzug = require('umzug');
 */

/**
 * Create HTTP server.
const server = http.createServer(app);
 */

/**
 * Normalize a port into a number, string, or false.
const normalizePort = (val) => {
  const portToNormalize = parseInt(val, 10);

  if (isNaN(portToNormalize)) {
    // named pipe
    return val;
  }

  if (portToNormalize >= 0) {
    // port number
    return portToNormalize;
  }

  return false;
};
 */

/**
 * Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3001');
app.set('port', port);
 */

/**
 * Event listener for HTTP server "error" event.
const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
};
 */

/**
 * Event listener for HTTP server "listening" event.
const onListening = () => {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : addr.port;
  console.log(`Listening on http://localhost:${bind}`);
};
*/

// Server should be started only if there are no pending migrations
/*
const umzug = new Umzug({
  storage: 'sequelize',
  storageOptions: {
    sequelize: models.db.sequelize,
  },
  migrations: {
    path: 'src/db/migrations',
    pattern: /\.js$/,
    params: [
      models.db.sequelize.getQueryInterface(), // queryInterface
      models.db.sequelize.constructor, // DataTypes
      function () {
        throw new Error('Migration tried to use old style "done" callback. Please upgrade to "umzug" and return a promise instead.');
      }
    ],
  }
});
*/

// Check if there are pending migrations
/*
umzug.pending().then(function (migrations) {
  if (migrations.length === 0) {
    // RabbitMqMessageService.connect();

    // finally, let's start our server...
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);

  } else {
    // Do not start the server if some migrations are pending.
    console.error(`Can't start the server - migrations pending. Please run 'yarn migration'`);
  }
});
*/