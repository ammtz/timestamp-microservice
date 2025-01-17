// index.js
// Entry point for the timestamp microservice application

// Import required modules
import express from 'express'; // Web framework for Node.js
import dayjs from 'dayjs'; // Date manipulation library
import cors from 'cors'; // Middleware to enable CORS
import path from 'path';
import { fileURLToPath } from 'url';

// Simulate `__dirname` in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize the Express application
const app = express();

// Enable CORS for cross-origin requests
app.use(cors({ optionsSuccessStatus: 200 })); // Handles preflight requests successfully

// Serve static files from the 'public' directory
// These files include the landing page and other public assets
app.use(express.static('public'));

// Define the root route to serve the landing page
app.get("/", (req, res) => {
  res.sendFile(__dirname + '/views/index.html'); // Send the HTML file as the response
});

// Define the timestamp API endpoint
// Route: GET /api/:date?
// The `:date?` parameter is optional and can be a date string or Unix timestamp
app.get('/api/:date?', (req, res) => {
  const dateParam = req.params.date; // Extract the date parameter from the request

  // Determine the date object based on the input parameter
  const date = !dateParam
    ? dayjs() // If no parameter is provided, use the current date
    : !isNaN(dateParam)
    ? dayjs(parseInt(dateParam)) // If the parameter is a number, treat it as a Unix timestamp
    : dayjs(dateParam); // Otherwise, parse it as a date string

  // Check if the date is valid
  if (date.isValid()) {
    // If valid, respond with Unix and UTC formats
    res.json({
      unix: date.valueOf(), // Return the Unix timestamp in milliseconds
      utc: date.toDate().toUTCString(), // Return the UTC date string
    });
  } else {
    // If invalid, respond with an error object
    res.json({ error: "Invalid Date" });
  }
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Log that the server is up and running
});
