import express from 'express';

const app = express();

// Root route
app.get('/', (req, res) => {
  res.send('Server is ready');
});

// Route to get a list of 5 jokes
app.get('/jokes', (req, res) => {
  const jokes = [
    {
      id: 1,
      content: [
        "Why did the JavaScript array break up with the object?",
        "Because it found someone more index-tive!"
      ]
    },
    {
      id: 2,
      content: [
        "I tried to organize a party using an array...",
        "But it got out of hand because I didn’t use .sort()!"
      ]
    },
    {
      id: 3,
      content: [
        "What did the array say after it got pushed too many times?",
        "Stop pushing me! I’m getting too long!"
      ]
    },
    {
      id: 4,
      content: [
        "Why do JavaScript arrays make terrible comedians?",
        "Because they always return undefined when you expect a punchline."
      ]
    },
    {
      id: 5,
      content: [
        "My friend asked if my array was empty.",
        "I said, 'length === 0, bro.'"
      ]
    }
  ];
  
  res.send(jokes);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
