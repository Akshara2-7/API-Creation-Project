const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());          // React (port 5173) ko API call karne dega
app.use(express.json());  // JSON body padhne ke liye (aage POST me kaam aayega)

// REST endpoint: GET /api/message
app.get('/api/message', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});