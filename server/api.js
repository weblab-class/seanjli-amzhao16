/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server.
|
*/

const express = require("express");

// import models so we can interact with the database
const User = require("./models/user");
const Dream = require("./models/dream");
const FriendRequest = require("./models/friendrequest");

// import authentication library
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

//initialize socket
const socketManager = require("./server-socket");

router.post("/login", auth.login);
router.post("/logout", auth.logout);
router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }

  res.send(req.user);
});

router.post("/initsocket", (req, res) => {
  // do nothing if user not logged in
  if (req.user)
    socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
  res.send({});
});

// |------------------------------|
// | write your API methods below!|
// |------------------------------|

// USER

router.get("/getMe", (req, res) => {
  User.find({ _id: req.user._id }).then((user) => res.send(user));
});

router.get("/getProfile", (req, res) => {
  User.find({ _id: req.query.parent }).then((user) => res.send(user));
});

router.get("/getUser", (req, res) => {
  User.find().then((user) => res.send(user));
});

// FRIEND REQUESTS

router.get("/getFriend", async (req, res) => {
  const me = await User.find({ _id: req.user._id });
  res.send(me.friends);
});

router.get("/getFriendRequest", (req, res) => {
  FriendRequest.find({ recipient_id: req.user._id, status: "pending" }).then((x) => res.send(x));
});

router.get("/getOutgoingFriendRequest", (req, res) => {
  FriendRequest.find({ sender_id: req.user._id, status: "pending" }).then((x) => res.send(x));
});

router.post("/addFriendRequest", async (req, res) => {
  const x = await FriendRequest.find({
    sender_id: req.user._id,
    recipient_id: req.body.recipient_id,
    status: "pending" || "accepted",
  });

  if (x.length > 0 || req.user._id === req.body.recipient_id) {
    return;
  }

  const newFriendRequest = new FriendRequest({
    sender_id: req.user._id,
    sender_name: req.user.name,
    recipient_id: req.body.recipient_id,
    recipient_name: req.body.recipient_name,
  });

  newFriendRequest.save().then((frq) => res.send(frq));
});

router.post("/acceptFriendRequest", (req, res) => {
  FriendRequest.updateOne(
    { sender_id: req.body.sender_id, recipient_id: req.user._id, status: "pending" },
    { $set: { status: "accepted" } },
    function (err, doc) {}
  );

  User.updateOne(
    { _id: req.user._id },
    { $push: { friends: req.body.sender_id } },
    function (err, doc) {}
  );

  User.updateOne(
    { _id: req.body.sender_id },
    { $push: { friends: req.user._id } },
    function (err, doc) {}
  );
});

router.post("/removeFriendRequest", (req, res) => {
  FriendRequest.updateOne(
    { sender_id: req.user._id, recipient_id: req.body.recipient_id, status: "pending" },
    { $set: { status: "declined" } },
    function (err, doc) {}
  );
});

router.post("/declineFriendRequest", (req, res) => {
  FriendRequest.updateOne(
    { sender_id: req.body.sender_id, recipient_id: req.user._id, status: "pending" },
    { $set: { status: "declined" } },
    function (err, doc) {}
  );
});

router.post("/removeFriend", (req, res) => {
  User.updateOne(
    { _id: req.user._id },
    { $pull: { friends: req.body.recipient_id } },
    function (err, doc) {}
  );

  User.updateOne(
    { _id: req.body.recipient_id },
    { $pull: { friends: req.user._id } },
    function (err, doc) {}
  );
});

// DREAMS SECTION

router.get("/dreams", (req, res) => {
  Dream.find({ "author._id": { $in: req.query.parent.split(",") }, private: false }).then(
    (dreams) => {
      res.send(dreams);
    }
  );
});

router.get("/myDreams", (req, res) => {
  Dream.find({ "author._id": req.user._id }).then((dreams) => {
    res.send(dreams);
  });
});

router.post("/addDream", (req, res) => {
  console.log("added dream to database");
  const newDream = new Dream({
    author: {
      _id: req.user._id,
      name: req.user.name,
    },
    content: req.body.content,
    private: req.body.privacy,
    tags: req.body.tags,
  });

  newDream.save().then((dream) => res.send(dream));
});

router.post("/deleteDream", (req, res) => {
  Dream.deleteOne(
    {_id: req.body.dream_id,
    "author._id": req.user._id} // for security purposes, verifies id of person
  ).then((dream) => res.send(dream));
});

// TAGS

router.post("/addUsedTag", (req, res) => {
  User.updateOne(
    { _id: req.user._id },
    { $push: { usedTags: req.body.tag } },
    function (err, doc) {}
  );
});

router.post("/achievementGot", (req, res) => {
  const str = "achievements." + req.body.id;
  User.updateOne(
    { _id: req.user._id },
    { $set: {[str] : true}}
  ).then((x) => res.send(x));
});

// EDIT AVATAR

router.post("/editAvatar", (req, res) => {
  const str = "avatar." + req.body.item;
  User.updateOne(
    {_id: req.user._id},
    { $set: {[str] : req.body.new}}
  ).then((x) => res.send(x));
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
