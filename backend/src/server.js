import dotenv from 'dotenv';
import express from 'express';
import connectDB from './db/server.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';



// Load env variables
dotenv.config();

const app = express();

app.use(cors({
  origin:process.env.CORS_ORIGIN,
  credentials:true
}))

app.use(express.json({limit:"16kb"}))
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

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





