module.exports = {
  port: process.env.PORT || 3443,
  db: process.env.MONGODB || 'mongodb://localhost:27017/speakers',
};
