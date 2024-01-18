// api/server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // Adjust this path based on your data file
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use('/api', router); // This sets the base path for your JSON Server API

module.exports = server;
