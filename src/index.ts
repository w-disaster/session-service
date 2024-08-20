import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import { registerCommands } from './presentation/defineNamespaces'
//import { defineNamespaces } from './presentation/defineNamespaces';

const app = express()
const server = http.createServer(app)

export const io: Server = require('socket.io')(server, {
  cors: {
    origin: (origin: string | undefined, callback: (error: any, allow: boolean) => void) => {
      // Allow all origins
      callback(null, true)
    },
    methods: ['GET', 'POST'],
    allowedHeaders: ['my-custom-header'],
    credentials: true
  }
})

// Define Namespaces
registerCommands(io)

// When a client connects
// io.on('connection', (socket: Socket) => {
//   console.log('a user connected:', socket.id)

//   socket.on('joinRoom', (data) => {
//     const room = data.room
//     if (room == 'myroom') {
//       socket.join(room) // Join the specified room
//       console.log(`Socket ${socket.id} joined room ${room}`)
//     } else {
//       console.log('Unauthorized access')
//     }
//   })

//   // Listen for 'sendMessage' event from the client
//   socket.on('sendMessage', (data) => {
//     const { room, message } = data
//     console.log(io.of('/').adapter.rooms)
//     io.to(room).emit('message', message) // Send message to the specified room
//     console.log(`Message sent to room ${room}: ${message}`)
//   })

//   // When the client disconnects
//   socket.on('disconnect', () => {
//     console.log('user disconnected:', socket.id)
//   })
//})

server.listen(3000, () => {
  console.log('listening on *:3000')
})
