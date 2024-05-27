// create web server
const express = require('express');
const app = express();
const port = 3000;

// import data from comments.json
const data = require('./comments.json');

app.get('/comments', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});