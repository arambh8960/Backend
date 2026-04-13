import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/server.js';

// Load env variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Minimal health endpoint
app.get('/', (req, res) => {
  res.send(`Server is running on port ${port}`);
});

const start = async () => {
  try {
    // ensure DB is connected before starting the server
    await connectDB();

    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

start();





