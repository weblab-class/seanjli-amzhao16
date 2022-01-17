const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  friends: {type: [String], default: []},
  usedTags: {type: [String], default: ["favorites"]},
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
