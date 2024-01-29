import express from 'express';
import http from 'http';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import userRouter from './userRoutes';
import { Server } from 'socket.io';
import { User } from './models/userModel';
import jwt from 'jsonwebtoken';

const app = express();
const server = http.createServer(app);
const { PORT } = process.env || 4000;

app.use(cors()); // Allow all origins for simplicity in this example
app.use(express.json());

mongoose.connect(process.env.MONGO_URL!);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'db connection error!'));
db.once('open', () => {
  console.log('connected to MongoDB');
  server.listen(PORT, () => {
    console.log('server is running!');
  });
});

// Remove the following line as it's redundant and may cause issues with CORS headers
// app.use(cors({ origin: 'http://localhost:3000' }));

const io = new Server(server, {
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  socket.on('private message', async (to, message, mySelf) => {
    const user = await User.find({ email: to });
    const decoded = jwt.verify(mySelf, process.env.ACCESS_TOKEN_SECRET!);
    const sender = await User.findById(decoded);

    io.sockets.emit('refresh', 'new Messages!');

    if (user.length > 0) {
      user[0].messages.push({
        receiver: user[0].email,
        message,
        sender: sender?.email,
        time: new Date(),
      });

      sender?.messages.push({
        receiver: user[0].email,
        message,
        sender: sender?.email,
        time: new Date(),
      });

      await user[0].save();
      await sender?.save();
    }
  });
});

app.use('/', userRouter);
