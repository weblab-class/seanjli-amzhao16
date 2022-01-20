/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";
import { useParams } from "@reach/router";

import { get, post } from "../../utilities.js";

import NotFound from "./NotFound";
import "./Profile.css";
import EditAvatarPage from "../modules/editavatar/EditAvatar.js";

import Achievement from "../modules/achievements/Achievement";

const Profile = (props) => {
  const { text } = useParams();

  if (text.length != 24) {
    return <NotFound />;
  }

  const [profile, setProfile] = useState([{ name: [], achievements: Array.from({length: 13}, i => i = false), usedTags: [], friends: []}]);

  const [dreams, setDreams] = useState([]);

  let earned = Array.from({length: 12}, i => i = false);

  useEffect(() => {
    get("/api/getProfile", { parent: text }).then((x) => setProfile(x));
    get("/api/myDreams").then((x) => setDreams(x));
  }, []);

  useEffect(() => {
    earned = profile[0].achievements;
  }, [profile]);

  const [showEditAvatar, setShowEditAvatar] = useState(false);

  const dreamTextLengths = dreams.map((x) => (JSON.parse(x.content).blocks)[0].text.match(/\w+/g).length);

  const tagLengths = dreams.map((x) => x.tags.length);
  
  // ACHIEVEMENT CHECKER 
  // THIS SUCKS BUT THATS OKAY
  if (text === props.userId) {
  if (dreams.length >= 1) {
    post("/api/achievementGot", {id: 0});
    earned[0] = true;
  }

  if (dreams.length >= 5) {
    post("/api/achievementGot", {id: 1});
    earned[1] = true;
  }

  if (dreams.length >= 15) {
    post("/api/achievementGot", {id: 2});
    earned[2] = true;
  }

  if (dreams.length >= 50) {
    post("/api/achievementGot", {id: 3});
    earned[3] = true;
  }

  if (profile[0].usedTags.length >= 5) {
    post("/api/achievementGot", {id: 4});
    earned[4] = true;
  }

  if (profile[0].usedTags.length >= 10) {
    post("/api/achievementGot", {id: 5});
    earned[5] = true;
  }

  if (Math.max(...tagLengths) >= 3) {
    post("/api/achievementGot", {id: 6});
    earned[6] = true;
  }
  
  if (Math.min(...dreamTextLengths) < 15) {
    post("/api/achievementGot", {id: 7});
    earned[7] = true;
  }

  if (Math.max(...dreamTextLengths) > 100) {
    post("/api/achievementGot", {id: 8});
    earned[8] = true;
  }

  if (Math.max(...dreamTextLengths) > 250) {
    post("/api/achievementGot", {id: 9});
    earned[9] = true;
  }

  if (profile[0].friends.length >= 3) {
    post("/api/achievementGot", {id: 10});
    earned[10] = true;
  }

  if (profile[0].friends.length >= 10) {
    post("/api/achievementGot", {id: 11});
    earned[11] = true;
  }
  }
  //ACHIEVEMENT CHECKER END

  const editAvatarPopUp = (event) => {
    if (text !== props.userId) { return; }
    console.log("clicky");
    if (showEditAvatar === true) {
      setShowEditAvatar(false);
    } else {
      setShowEditAvatar(true);
    }
  };

  const achievements = [
    {name: "novice", content: "write 1 dream", _id: 0},
    {name: "reporter", content: "write 5 dreams", _id: 1},
    {name: "dreamer", content: "write 15 dreams", _id: 2},
    {name: "visionary", content: "write 50 dreams", _id: 3},
    {name: "classifier", content: "make 5 tags", _id: 4},
    {name: "cataloguer", content: "make 10 tags", _id: 5},
    {name: "multifaceted", content: "write 3 tags on one post", _id: 6},
    {name: "laconic", content: "write a <15 word dream", _id: 7},
    {name: "scribe", content: "write a >100 word dream", _id: 8},
    {name: "novelist", content: "write a >250 word dream", _id: 9},
    {name: "amiable", content: "make 3 friends", _id: 10},
    {name: "socialite", content: "make 10 friends", _id: 11}
  ];

  return (
    <div className="profileBackground">
      <NavBar type="p" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="profileContainer">
        {" "}
        <h1 className="profileTitle">Profile</h1>
        <p className="profileName">Name: {profile[0].name}</p>
        <div className="defaultAvatar"> </div>
        <button className="defaultAvatar" onClick={editAvatarPopUp}></button>
        {showEditAvatar ? <EditAvatarPage /> : <div></div>}
        <div className="achievementsContainer">
          {achievements.map((x) =>
          <Achievement name={x.name} content={x.content} earned={earned[x._id]} />)}
        </div>
      </div>
    </div>
  );
};

export default Profile;
