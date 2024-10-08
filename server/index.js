const http = require('http'),
      path = require('path'),
      express = require('express'),
      socket = require('socket.io');
const cors = require('cors')

const corsOptions = {
    origin: "http://localhost:5173",  // lokalny adres, który jest używany podczas produkcji; credentials: true wymaga podania konkretnego adresu, a nie *
        methods: ["GET", "POST"],
        allowedHeaders: ["x-h"],
        credentials: true
}

const config = require('./config');


const app = express(),
      server = http.Server(app),
      io = socket(server, {
        cors: corsOptions
      });
      app.use(cors(corsOptions))

const myIo = require('./sockets/io'),
    routes = require('./routes/routes');

server.listen(config.port);

games = {};

myIo(io);

console.log(`Server listening on port ${config.port}`);

routes(app);