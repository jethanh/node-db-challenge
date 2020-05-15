const express = require('express');

const projectRouter = require('./routers/projectRouter');
const resourceRouter = require('./routers/resourceRouter');
const taskRouter = require('./routers/taskRouter');

const server = express();

server.use(express.json());

server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);
server.use('/api/tasks', taskRouter);

server.get('/', (req, res) => {
    res.send('Lets write some code that may or may not work but hopefully it does because im tryna get that bread. but if it doesnt thats okay, ill just spend a few hours troubleshooting and finding the missing bracket, parentheses, semicolon that is messing everything up. Why cant we just write code that writes all of the code for us. Sorry I didnt mean to make this a novel, but I guess its too late!');
})

module.exports = server;