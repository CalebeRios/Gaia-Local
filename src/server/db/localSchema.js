const mongoose = require('mongoose');
const Local = require('../models/Local.js');

const LocalSchema = new mongoose.Schema({
  name: String,
  latitude: String,
  longitude: String,
});

module.exports = LocalSchema;
