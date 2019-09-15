const http = require('http')
const eventHandler = require('./app')
const port = 3000;

const server = http.createServer(eventHandler)

server.listen(port)