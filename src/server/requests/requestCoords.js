const https = require('https');
const mongoose = require('mongoose');
const mongooseConnection = require('../config/mongooseConnection.js');

const Schema = mongoose.Schema;
const locationSchema = new Schema({
  name: String,
  latitude: String,
  longitude: String
});
const Location = mongoose.model('Location', locationSchema);

module.exports = {
  requestCoords: (name) => {
    const key = process.env.API_KEY;
    this.key = key;

    let data = '';
    let body;
    mongooseConnection.connect();
    return new Promise((resolve, reject) => {
      //let localTest = 'nulo'
      Location.findOne({ name: name }, (err, local) => { /*aqui tem que testar se tem erro*/ }).then((local) => {
        if (local) {
          console.log('if')
          console.log(local.latitude)

          
          resolve(local);
        } else {
          console.log('else')
          console.log(local)
          https.get(`https://api.opencagedata.com/geocode/v1/json?q=${name}&key=${key}`, (resp) => {
            resp.on('data', (chunk) => {
              data += chunk;
            });
            resp.on('end', () => {
              body = JSON.parse(data);
              console.log(body.results[0].geometry)
              var newLocal = new Location({
                name: name,
                latitude: body.results[0].geometry.lat,//nao tenho certeza disso man
                longitude: body.results[0].geometry.lng
              });
              newLocal.save((err, newLocal) => {
                if (err) {
                  console.error(err);
                  reject(err)
                }
                console.log(local);
              })
              console.log('en lo else '+newLocal.latitude)
              resolve(newLocal);
            });
          }).on('error', (err) => {
            zz
            reject(err);
          });
  
        }
      
      
      });
    
    
    });
  },
};
