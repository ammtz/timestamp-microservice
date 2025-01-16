// index.js
// Entry point for the Node.js application

// Import modules
const express = require('express');
const dayjs = require('dayjs');
const cors = require('cors');
const app = express();
// Enable cors
app.use(cors({ optionsSuccessStatus: 200 })); // Handle successful preflight requests

// Serve 'public' files
app.use(express.static('public'));

// Serve the landing page
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Timestamp API endpoint
app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date; // Get the optional date parameter

  // Determine the date
  const date = !dateParam
    ? dayjs() // No parameter, use the current date
    : !isNaN(dateParam)
    ? dayjs(parseInt(dateParam)) // If valid number, parse as Unix timestamp
    : dayjs(dateParam); // Otherwise, parse as a date string

  // Check if the date is valid and respond
  date.isValid()
    ? res.json({
        unix: date.valueOf(), // Unix timestamp in milliseconds
        utc: date.toISOString(), // ISO 8601 format (UTC)
      })
    : res.json({ error: "Invalid Date" }); // Respond with error if invalid
});


// Start server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

