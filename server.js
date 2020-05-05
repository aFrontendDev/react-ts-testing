const express = require('express');

const app = express();

// Used to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('dist'))

// server configuration
const PORT = 9001;

// START *** Settings headers to allow cross domain requests
app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
// END *****

// create a route for the app
// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});