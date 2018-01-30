// FROM CATBOOK WORKSHOP ADVANCED
// https://github.com/mit6148/catbook-advanced

const mongoose = require('mongoose');

// set up mongoDB connection
const mongoURL = process.env.MLAB_URL; // config variable
const options = {
  useMongoClient: true
};
mongoose.connect(mongoURL, options);
mongoose.Promise = global.Promise;
const db = mongoose.connection;

// db error handling
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;
