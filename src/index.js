const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const options = {
  autoIndex: false,
  reconnectTries: 30,
  reconnectInterval: 500,
  poolSize: 10,
  bufferMaxEntries: 0
}
mongoose.connect("mongodb://mongo:27017/test", options).then(() => {
  console.log('MongoDB is connected')
}).catch(err => {
  console.log('MongoDB connection unsuccessful.')
})

const Schema = mongoose.Schema;
const locationSchema = new Schema({
  Lat: String,
  Lng: String
});

const Location = mongoose.model('Location', locationSchema);

let data = '';
let key = `yourkey`;
let address = `brasilia`

https.get(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${key}`, (resp) => {
  let data = '';
  resp.on('data', function (chunk) {
    data += chunk;
  });

  app.get('/', (req, res) => {
    pdata = JSON.parse(data);
    res.json(pdata.results[1].geometry);
    console.log('\n\n\n\n\n')
    console.log(pdata.results[1].geometry.lat);
    console.log(pdata.results[1].geometry.lng);

    const NewLocation = Location({
      Lat: pdata.results[1].geomtetry.lat,
      Lng: pdata.results[1].geomtetry.lng
    });

    NewLocation.save();
  });
});
app.listen(3001);

