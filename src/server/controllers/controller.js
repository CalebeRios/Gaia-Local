const Local = require('../models/Local.js');

module.exports = {
  makeLocal: (input) => new Promise((resolve) => {
    const local = new Local(input);
    local.requestCoords(local.name).then((value) => {
      local.latitude = value.results[1].geometry.lat;
      local.longitude = value.results[1].geometry.lng;
      resolve(local);
    });
  }),
};
