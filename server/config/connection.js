const mongoose = require('mongoose');
require('dotenv').config();
console.log('MONGODB_URI', process.env.MONGODB_URI);
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/weBoot',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
