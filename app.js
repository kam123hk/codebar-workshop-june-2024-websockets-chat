// app.js is the server code; npm run start runs this code.

const express = require('express'); // webserver library Express, allows for hosting at specific paths / url
const http = require('http'); // req-res protocol for client-server model, get reqs for example
const socketIO = require('socket.io'); // websocket library Socket.IO
const path = require('path'); // must have path or the app.get path throws referenceError

// setup: creating Express app, creating server and applying the Express app to it
const app = express();
const server = http.createServer(app);
app.use(express.static('public')); // exposes everything in public folder to be accessible on the webserver
const io = socketIO(server); // setup websocket server

// add event listener for socket.io connections
io.on('connection', socket => {
    console.log('connected!!!');
    socket.on('new_message', data => {
        console.log(data, '<- here is the msg in terminal');
        io.emit('dispense_message', data);
    })
    socket.on('disconnect', () => {
        console.log('the user disconnected >')
    })
})

app.get('/another', (req, res) => {
    console.log('this log works now (before path, it did not run)')
    // Send the HTML file as the response (from the path, back to user)
    res.sendFile(path.join(__dirname, 'public/index.html')); // in.html does not exist, was checking if get was working.
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});