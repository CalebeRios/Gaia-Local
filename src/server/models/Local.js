const LocalSchema = require('../db/localSchema');
const mongoose = require('mongoose');

module.exports = class Local {
  constructor(name) {
    this.LocalModel = mongoose.model('LocalModel', LocalSchema);
    this.local = new LocalModel({ 
      name: name,
      latitude: '',
      longitude: '',
    });
  }

  setLatitude(latitude) {
    this.local.latitude = latitude;
  }

  getLatitude() {
    return this.local.latitude;
  }

  setLongitude(longitude) {
    this.local.longitude = longitude;
  }

  getLongitude() {
    return this.local.longitude;
  }

  getLocal() {
    return this.local;
  }

  saveLocal() {
    this.local.save((err) => { if (err) { return err } });
  }

  findMe() {
    LocalModel.findOne({ name: this.local.name }, (err) => {if (err) { return false; } }
    ).then((local) => {
      if(local){ 
        this.local = local;
        return true;   
      }

      return false;
    });
  }
};
