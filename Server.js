const express = require('express');
const app = express();
const port = 3000;
const connectDB = require('./config/db');
const expenseRoutes = require('./routes/expenseRoutes');
const cors = require('cors');

// ✅ Enable CORS before anything else
app.use(cors());

// ✅ Connect to MongoDB
connectDB();

// ✅ Middleware to parse JSON bodies
app.use(express.json());

// ✅ Mount your routes AFTER enabling CORS and JSON parser
app.use('/api', expenseRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Express Server Home Page!');
});

// Route 1: Plain Text Response
app.get('/text', (req, res) => {
  res.type('text').send('Hello from Express Server (Text Route)!');
});

// Route 2: JSON Response
app.get('/json', (req, res) => {
  res.json({ message: 'Hello from Express Server (JSON Route)!' });
});

// Start server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
