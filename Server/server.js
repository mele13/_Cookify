// Web server framework to easily build web applications with Node.js
const express = require('express');
// Middleware that allows to parse the data sent in HTTP requests
const bodyParser = require('body-parser');
// Middleware that allows to configure the security policy of the web server
const cors = require('cors');
// PostgreSQL library
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes/index');

app.use(bodyParser.json());
app.use(cors());

const pool = new Pool({
  user: 'mele',
  host: 'localhost',
  database: 'cookify',
  password: '626Stitch',
  port: 5432,
});

// Routes
app.use('/', routes);
app.use('/recipes', routes);

// Start the web server
app.listen(port, () => {
  console.log(`Web server started on port ${port}`);
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error connecting to database', err);
  }
  console.log('Connected to PostgreSQL database');
});
