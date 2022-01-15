const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema({
  sender_id: String,
  recipient_id: String,
  status: { type: String, default: "pending" },
  date: { type: Date, default: Date.now },
});

// compile model from schema
module.exports = mongoose.model("friendrequest", FriendRequestSchema);
