const Local = require('./Local.js');
const request = require('../requests/requestCoords.js');


module.exports = {
  makeLocal: input => new Promise((resolve) => {
    const local = new Local(input);
    request.requestCoords(local.name).then((value) => {
      local.latitude = value.latitude;
      local.longitude = value.longitude;
      resolve(local);
    });
  }),
};
