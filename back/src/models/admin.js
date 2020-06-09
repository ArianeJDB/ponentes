
const mongoose = require('mongoose');

const { Schema } = mongoose;

const AdminSchema = new Schema({
  email: {
    type: String, unique: true, lowercase: true, required: true,
  },
  password: { type: String, select: false, required: true },
}, { versionKey: false });

module.exports = mongoose.model('Admin', AdminSchema);
