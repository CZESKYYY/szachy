const http = require('http'),
      path = require('path'),
      express = require('express'),
      socket = require('socket.io');
      var cors = require('cors')     

const config = require('./config');

const myIo = require('./sockets/io'),
      routes = require('./routes/routes');

const app = express(),
      server = http.Server(app),
      io = socket(server, {
        cors: {
          origins: ["*"],
          handlePreflightRequest: (req,res) => {
            res.writeHead(200,
                {
                    "Access-Control-allow-Origin": "*",
                    "Access-Control-allow-Methods": "GET,POST",
                    "Access-Control-allow-Headers":"x-h",
                    "Access-Control-allow-Credentials": true
                }
            );
            res.end();
          }
         
        }
      });
      app.use(cors())
      
server.listen(config.port);

games = {};

myIo(io);

console.log(`Server listening on port ${config.port}`);

routes(app);