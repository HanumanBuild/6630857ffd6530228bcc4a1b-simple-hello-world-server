// Load the express module
const express = require('express');

// Create an express application
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Set the port number
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});