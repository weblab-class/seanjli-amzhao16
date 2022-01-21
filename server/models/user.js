const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  googleid: String,
  friends: {type: [String], default: []},
  usedTags: {type: [String], default: ["favorites"]},
  achievements: {type: [Boolean], default: Array.from({length: 12}, i => i = false)},
  avatar:
    {
      hairColor: {type: String, default: "blank"},
      hairType: {type: String, default: "blank"},
      skin: {type: String, defualt: "blank"},
      shirt: {type: String, default: "blank"},
      flair: 
        {
          hat: {type: String, default: "blank"},
          neck: {type: String, default: "blank"},
          glasses: {type: String, default: "blank"}
        }
    }
});

// compile model from schema
module.exports = mongoose.model("user", UserSchema);
