const Local = require('./Local.js');
const request = require('../requests/requestCoords.js');


module.exports = {
  makeLocal: input => new Promise((resolve) => {
    const local = new Local(input);
    request.requestCoords(local.name).then((value) => {
      local.latitude = value.results[1].geometry.lat;
      local.longitude = value.results[1].geometry.lng;
      resolve(local);
    });
  }),
};
