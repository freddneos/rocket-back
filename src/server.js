const path = require('path');
//using express ...
const express = require('express');
//schema treatment for mondodb (schemaless)
const mongoose = require('mongoose');
// mongo conection done with mongoose
// i'm using atlas to server mongo
// TODO:  put this conection string to environment
mongoose.connect(
  'mongodb+srv://node-rocket:node-rocket@cluster0-2uuof.mongodb.net/rocket?retryWrites=true',
    {
        useNewUrlParser: true
    }
);
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on("connection" , socket =>{
  console.log('ok');
  socket.on('connectRoom' , box => {
    socket.join(box);
  });
});

//creating new global attribute to req of routes call ...
app.use((req,res,next) => {
  req.io = io;
  return next();
})
//parse json easy with express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/files',express.static(path.resolve(__dirname,'..','tmp')))
//mvc pattern ...
app.use(require('./routes'));



server.listen(3333);
 