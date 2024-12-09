// Import the Express module
const express = require('express');
const path = require('path');

// Initialize the Express application
const app = express();
const PORT = 9000;

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Start the server and listen on port 9000
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

