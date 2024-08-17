import express from 'express';
import http from 'http';
import { Socket } from 'socket.io';
import { registerChatHandlers } from './controllers/chatHandlers';
// import path from 'path';

const app = express();
const server = http.createServer(app);


const io = require("socket.io")(server, {
    cors: {
        origin: (origin: string | undefined, callback: (error: any, allow: boolean) => void) => {
            // Allow all origins
            callback(null, true);
        },
        methods: ["GET", "POST"],
        allowedHeaders: ["my-custom-header"],
        credentials: true
    }
});

// Register Chat Handlers
registerChatHandlers(io.of("/chat"));

// Register Video Handlers
//registerVideoHandlers(io.of("/video"));


// When a client connects
io.on('connection', (socket: Socket) => {

    console.log('a user connected:', socket.id);

    socket.on('joinRoom', (data) => {
        const room = data.room;
        if (room == "myroom") {
            socket.join(room); // Join the specified room
            console.log(`Socket ${socket.id} joined room ${room}`);
        } else {
            console.log("Unauthorized access");
        }

    });

    // Listen for 'sendMessage' event from the client
    socket.on('sendMessage', (data) => {
        const { room, message } = data;
        console.log(io.of("/").adapter.rooms);
        io.to(room).emit('message', message); // Send message to the specified room
        console.log(`Message sent to room ${room}: ${message}`);
    });

    // When the client disconnects
    socket.on('disconnect', () => {
        console.log('user disconnected:', socket.id);
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});