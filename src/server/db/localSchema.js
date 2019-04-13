const mongoose = require('mongoose');
const Local = require('../models/Local.js');

const LocalSchema = new mongoose.Schema({
  local: Local,
});

module.exports = LocalSchema;
