const mongoose = require('mongoose');

const connect = (db, cb) => {
  mongoose.connect(db,
    {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }, cb);
};

module.exports = connect;
