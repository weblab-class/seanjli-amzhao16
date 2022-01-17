const mongoose = require("mongoose");

const DreamSchema = new mongoose.Schema({
  author: {
    _id: String,
    name: String,
  },
  content: String,
  timeStamp: { type: Date, default: Date.now },
  private: { type: Boolean, default: false },
});

module.exports = mongoose.model("dream", DreamSchema);
