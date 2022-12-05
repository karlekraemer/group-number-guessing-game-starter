const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5999;

// This must be added before GET & POST routes.
app.use(bodyParser.urlencoded({extended:true}));

// Serve up static files (HTML, CSS, Client JS)
app.use(express.static('server/public'));
const player1results = require('./modules/player1Guesses');

// GET & POST Routes go here


app.listen(PORT, () => {
  console.log ('Server is running on port', PORT)
});

app.get('/player1Guesses', function(req, res) {
  console.log("request for /player1Guesses was made");
  res.send(player1results);
  // res.sendStatus(418);
} );

app.post('/player1Guesses', function(req, res) {
  console.log('in the post request!', req.body);
 if (req.body.pizza) {
      player1results.push(req.body);
      // console.log('NEW QUOTES', quoteList);
      res.sendStatus(201);
      // 201 = a status!
 } else {
      res.sendStatus(500);
 } 
});