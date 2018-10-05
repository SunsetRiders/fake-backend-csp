const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// create application/json parser
const jsonParser = bodyParser.json();

// define profile mock-up data
const PROFILE = {
  "address": "24058, Belgium, Brussels, Liutte 27, BE",
  "dateOfBirth": new Date(Date.parse('01/04/1994', 'dd/MM/YYYY')).getTime(),
  "email": "robertsmith@company.com",
  "latitude": -22.9246802,
  "longitude": -47.0825035,
  "name": "Robert Smith",
  "phone": "+1 256 254 84 56",
  "position": "Developer and Startup entrepeneur",
  "skype": "robsmithcompany",
  "viber": "+1 256 254 84 56"
};

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => res.send('Hello World!'));

// profile data
app.get('/profile', (req, res) => {
  console.log('Request');
  res.send(PROFILE);
})

// profile data
app.post('/contact', (req, res) => {
  console.log(jsonParser(req.body));
  res.send(200);
})

app.listen(port, () => console.log(`FrontEnd Rampup Backend listening on port ${port}!`))