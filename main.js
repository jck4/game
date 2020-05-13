var app = require('express')();

var http = require('http').createServer(app);

const bodyParser = require('body-parser')

const express = require('express')
const session = require('express-session')

const Routes = require('./server/routes.js')

const rootPath = "/usr/src/app"

        

app.use(bodyParser.urlencoded(
    {
      extended: true
    }
  ))

var routes =  new Routes(app)

const Socketio = require("socket.io")(http);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', (data) => {
      console.log(data);
    });
  });


http.listen(8080, () => console.log('Server started.'))


