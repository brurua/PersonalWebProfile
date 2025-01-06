import express from 'express';

const app = express();
const port = 5000; // Set the backend port to 5000

app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
