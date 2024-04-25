//set up express server
const express = require('express');
const app = express();
const port = 3000;

//set up the route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

//start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});