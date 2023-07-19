const express = require('express');
const mysql = require('mssql');
const path = require('path');
require('dotenv').config()
// const cors = require('cors')

const app = express();
app.use(express.json())
// app.use(cors)
app.use(express.static(path.join(__dirname, '../build')));
app.get('/*', (req, res, next) => {
  if (req.url.startsWith('/api/')) {
    next()
  }else {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  }
});
// // MySQL configuration
// Connect to the MySQL server
mysql.connect({
  server: process.env.SERVER,
  user: process.env.USER,
  password: process.env.INFO,
  database: process.env.NAME,
  port:1433,
  // encrypt:true
}, async(err) => {
  if (err) {
    console.error('Error connecting to the MySQL server:', err);
    return;
  }
  console.log('Connected to the MySQL server');
});
app.get('/api/assignments', (req, res) => {
  // Execute the SQL query
  const query = 'SELECT DISTINCT Assignment_Details FROM [OT].[Resources]';
  var request = new mysql.Request();
           
      // query to the database and get the records
      request.query(query, function (err, recordset) {
          
          if (err) console.log(err)
          // send records as a response
          res.send(recordset);
          
      });
});
app.get('/api/cities', (req, res) => {
  // Execute the SQL query
  const query = 'SELECT DISTINCT City FROM [OT].[Resources]';
  var request = new mysql.Request();
           
      // query to the database and get the records
      request.query(query, function (err, recordset) {
          
          if (err) console.log(err)
          // send records as a response
          res.send(recordset);
          
      });
});
app.get('/api/levels', (req, res) => {
  // Execute the SQL query
  const query = 'SELECT DISTINCT Level FROM [OT].[Resources]';
  var request = new mysql.Request();
           
      // query to the database and get the records
      request.query(query, function (err, recordset) {
          
          if (err) console.log(err)
          // send records as a response
          res.send(recordset);
          
      });
});


// Define the route for /api/cards
app.get('/api/cards', (req, res) => {
  // Execute the SQL query
  const multi = 0
  var offset = (multi*100)-1
  if (offset<0) {offset = 0}
  
  const query = `SELECT * FROM [OT].[Resources] ORDER BY Candidate_Name OFFSET ${offset} ROWS FETCH NEXT 100 ROWS ONLY;`;
  var request = new mysql.Request();
           
      // query to the database and get the records
      request.query(query, function (err, recordset) {
          
          if (err) console.log(err)
          // send records as a response
        
          res.send(recordset);
          
      });
});



// Start the server
app.listen(3000, () => {
  
  console.log('Server started on port 3000');
  
});