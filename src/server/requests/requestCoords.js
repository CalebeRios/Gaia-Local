const https = require('https');
const Local = require('../models/Local');

function bodyToLocal(body, local){
  local.setLatitude(body.results[0].geometry.lat);
  local.setLongitude(body.results[0].geometry.lng);
}

module.exports = {
  getCoords: (name) => {
    const local = new Local(name);
    const key = process.env.API_KEY;
    this.key = key;

    let data = '';
    let body;

    if(local.findMe()) {
      resolve(local);
    } else {
      return new Promise((resolve, reject) => {
        https.get(`https://api.opencagedata.com/geocode/v1/json?q=${name}&key=${key}`, (resp) => {
          resp.on('data', (chunk) => {
            data += chunk;
          });

          resp.on('end', () => {
            body = JSON.parse(data);
            bodyToLocal(body, local);
            local.saveLocal();
            resolve(local);
          });
        });
      });
    }
  },
};
