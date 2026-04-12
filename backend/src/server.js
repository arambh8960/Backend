import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/api/jokes', (req, res) => {
    const jokes = [
  {
    id: 1,
    title: "Dark Mode Lovers",
    joke: "Why do programmers prefer dark mode? Because light attracts bugs!"
  },
  {
    id: 2,
    title: "Java vs C#",
    joke: "Why do Java developers wear glasses? Because they don’t C#."
  },
  {
    id: 3,
    title: "Light Bulb Problem",
    joke: "How many programmers does it take to change a light bulb? None. That’s a hardware problem."
  },
  {
    id: 4,
    title: "Broke Developer",
    joke: "Why did the developer go broke? Because he used up all his cache."
  },
  {
    id: 5,
    title: "Debugging Truth",
    joke: "Debugging is like being the detective in a crime movie where you are also the murderer."
  }
];
    res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
