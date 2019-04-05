const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const controller = require('./controllers/controller.js')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
  let input = 'brasilia'

  controller.makeLocal(input).then(function (value) {
    res.json({ 
      lat: value.latitude,
      lng: value.longitude
     })
  }).catch((err) => {
    console.log('Catch: ' + err)
  })

});

app.listen(3001);

module.exports = app;