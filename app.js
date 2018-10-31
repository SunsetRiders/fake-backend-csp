const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

// define profile mock-up data
const USER_DATA = {
  "address": "24058, Belgium, Brussels, Liutte 27, BE",
  "dateOfBirth": new Date(Date.parse('04/01/1994')).getTime(),
  "email": "robertsmith@company.com",
  "freelance": new Date(Date.parse('03/25/2018')).getTime(),
  "latitude": -22.9246802,
  "longitude": -47.0825035,
  "name": "Robert Smith",
  "phone": "+1 256 254 84 56",
  "position": "Developer and Startup entrepeneur",
  "skype": "robsmithcompany",
  "vacation": new Date(Date.parse('04/15/2018')).getTime(),
  "viber": "+1 256 254 84 56"
};

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => res.send('Hello World!'));

// get
app.get('/csp', (req, res) => {
  res.send('ablubla');
})

// userdata post
app.post('/userdata', (req, res) => {
  console.log(USER_DATA);
  res.status(200).send(USER_DATA);
})

app.listen(port, () => console.log(`Fake backend CSP ${port}!`))