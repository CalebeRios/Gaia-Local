module.exports = {
  connect: function () {
    var mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    const options = {
      user: 'aashrey',
      pass: 'admin123',
      keepAlive: true,
      socketTimeoutMS: 540000,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      autoIndex: false,
      reconnectInterval: 500,
      poolSize: 10,
      bufferMaxEntries: 0,
      useNewUrlParser: true,
    };
    mongoose.connect('mongodb://mongo:27017/sample', options).then(() => {
      console.log('MongoDB is connected')
    }).catch(err => {
      console.log('MongoDB connection unsuccessful.')
    })
  }
}
