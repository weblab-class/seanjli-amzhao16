const mongoose = require("mongoose");

const FriendRequestSchema = new mongoose.Schema({
    sender_id: String,
    sender_name: String,
    recipient_id: String,
    recipient_name: String,
    status: {type: String, default: "pending"},
    date: {type: Date, default: Date.now},
})

// compile model from schema
module.exports = mongoose.model("friendrequest", FriendRequestSchema);