var express = require('express');
var bodyParser = require('body-parser');
const axios = require('axios');

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
// var items = require('../database-mongo');
var APIkey = require('../WeatherAPIKey.js');

var app = express();

// UNCOMMENT FOR REACT
// app.use(express.static(__dirname + '/../react-client/dist'));
// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/api/weather', (req, res) => {
  let zipcode = req.query.zipcode;
  // let zipcode = 68601
  // let url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=${APIkey}`
  let key = APIkey.key
  axios
  .get('http://api.openweathermap.org/data/2.5/weather', {
    params: {
      zip: `${zipcode},us`,
      units: 'imperial',
      appid: key
    }
  })
  .then(response => {
    res.send(response.data.weather[0].main);
  })
  .catch(error => {
    console.log(error.response);
    res.send();
  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

