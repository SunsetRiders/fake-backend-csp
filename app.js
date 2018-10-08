const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// define profile mock-up data
const PROFILE = {
  "address": "24058, Belgium, Brussels, Liutte 27, BE",
  "dateOfBirth": new Date(Date.parse('01/04/1994')).getTime(),
  "email": "robertsmith@company.com",
  "latitude": -22.9246802,
  "longitude": -47.0825035,
  "name": "Robert Smith",
  "phone": "+1 256 254 84 56",
  "position": "Developer and Startup entrepeneur",
  "skype": "robsmithcompany",
  "viber": "+1 256 254 84 56"
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'));

// profile data
app.get('/profile', (req, res) => {
  res.send(PROFILE);
})

// contact post
app.post('/contact', (req, res) => {
  console.log(req.body);
  res.status(200).send(req.body);
})

app.listen(port, () => console.log(`FrontEnd Rampup Backend listening on port ${port}!`))