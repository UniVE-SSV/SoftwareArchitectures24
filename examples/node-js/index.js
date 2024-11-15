const express = require('express');
const axios = require('axios');  // Import Axios for HTTP requests

const app = express();

// Define the /student route
app.get('/students', async (req, res) => {
  res.status(200).json({id: 123, name: "Giacomo", surname: "Zanatta"});
});

// Set up the server to listen on a specific port and hostname
const hostname = '127.0.0.1';
const port = 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});