/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";
import { useParams } from "@reach/router";

import { get, post } from "../../utilities.js";

import NotFound from "./NotFound";
import "./Profile.css";
import EditAvatarPage from "../modules/editavatar/EditAvatar.js";

import Achievement from "../modules/achievements/Achievement";
import Avatar from "../modules/editavatar/Avatar";

const Profile = (props) => {
  const { text } = useParams();

  if (text.length != 24) {
    return <NotFound />;
  }

  const [profile, setProfile] = useState([
    {
      name: [],
      achievements: Array.from({ length: 13 }, (i) => (i = false)),
      usedTags: [],
      friends: [],
      avatar: {
        hairColor: "blank",
        hairType: "blank",
        skin: "blank",
        shirt: "blank",
        hat: "blank",
        neck: "blank",
        glasses: "blank",
      },
    },
  ]);

  const [dreams, setDreams] = useState([]);

  const [earned, setEarned] = useState(Array.from({ length: 12 }, (i) => (i = false)));

  const [avatar, setAvatar] = useState({
    hairColor: "blank",
    hairType: "blank",
    skin: "blank",
    shirt: "blank",
    hat: "blank",
    neck: "blank",
    glasses: "blank",
  });

  useEffect(() => {
    get("/api/getProfile", { parent: text }).then((x) => setProfile(x));
    get("/api/myDreams").then((x) => setDreams(x));
  }, []);

  useEffect(() => {
    setEarned(profile[0].achievements);
    setAvatar(profile[0].avatar);
  }, [profile]);

  const [showEditAvatar, setShowEditAvatar] = useState(false);

  const dreamTextLengths = dreams.map(
    (x) => JSON.parse(x.content).blocks[0].text.match(/\w+/g).length
  );

  const tagLengths = dreams.map((x) => x.tags.length);

  const changeElem = (i) => {
    setEarned([...earned.slice(0, i), true, ...earned.slice(i + 1)]);
  };

  // ACHIEVEMENT CHECKER
  // THIS SUCKS BUT THATS OKAY

  if (text === props.userId) {
    if (dreams.length >= 1 && !earned[0]) {
      post("/api/achievementGot", { id: 0 });
      changeElem(0);
    }

    if (dreams.length >= 5 && !earned[1]) {
      post("/api/achievementGot", { id: 1 });
      changeElem(1);
    }

    if (dreams.length >= 15 && !earned[2]) {
      post("/api/achievementGot", { id: 2 });
      changeElem(2);
    }

    if (dreams.length >= 50 && !earned[3]) {
      post("/api/achievementGot", { id: 3 });
      changeElem(3);
    }

    if (profile[0].usedTags.length >= 5 && !earned[4]) {
      post("/api/achievementGot", { id: 4 });
      changeElem(4);
    }

    if (profile[0].usedTags.length >= 10 && !earned[5]) {
      post("/api/achievementGot", { id: 5 });
      changeElem(5);
    }

    if (Math.max(...tagLengths) >= 3 && !earned[6]) {
      post("/api/achievementGot", { id: 6 });
      changeElem(6);
    }

    if (Math.min(...dreamTextLengths) < 15 && !earned[7]) {
      post("/api/achievementGot", { id: 7 });
      changeElem(7);
    }

    if (Math.max(...dreamTextLengths) > 100 && !earned[8]) {
      post("/api/achievementGot", { id: 8 });
      changeElem(8);
    }

    if (Math.max(...dreamTextLengths) > 250 && !earned[9]) {
      post("/api/achievementGot", { id: 9 });
      changeElem(9);
    }

    if (profile[0].friends.length >= 3 && !earned[10]) {
      post("/api/achievementGot", { id: 10 });
      changeElem(10);
    }

    if (profile[0].friends.length >= 10 && !earned[11]) {
      post("/api/achievementGot", { id: 11 });
      changeElem(11);
    }
  }
  //ACHIEVEMENT CHECKER END

  const editAvatarPopUp = (event) => {
    if (text !== props.userId) {
      return;
    }
    if (showEditAvatar === true) {
      setShowEditAvatar(false);
    } else {
      setShowEditAvatar(true);
    }
  };

  const achievements = [
    { name: "novice", content: "write 1 dream", _id: 0 },
    { name: "reporter", content: "write 5 dreams", _id: 1 },
    { name: "dreamer", content: "write 15 dreams", _id: 2 },
    { name: "visionary", content: "write 50 dreams", _id: 3 },
    { name: "classifier", content: "make 5 tags", _id: 4 },
    { name: "cataloguer", content: "make 10 tags", _id: 5 },
    { name: "multifaceted", content: "write 3 tags on one post", _id: 6 },
    { name: "laconic", content: "write a <15 word dream", _id: 7 },
    { name: "scribe", content: "write a >100 word dream", _id: 8 },
    { name: "novelist", content: "write a >250 word dream", _id: 9 },
    { name: "amiable", content: "make 3 friends", _id: 10 },
    { name: "socialite", content: "make 10 friends", _id: 11 },
  ];

  return (
    <div className="profileBackground">
      <NavBar type="p" handleLogout={props.handleLogout} userId={props.userId} />
      <div className="profileContainer">
        {" "}
        <h1 className="profileTitle">Profile</h1>
        <p className="profileName">Name: {profile[0].name}</p>
        <Avatar avatar={avatar} />
        <button className="defaultAvatar" onClick={editAvatarPopUp}></button>
        {showEditAvatar ? (
          <EditAvatarPage avatar={avatar} setAvatar={setAvatar} earned={earned} />
        ) : (
          <div></div>
        )}
        <div className="achievementsContainer">
          {achievements.map((x) => (
            <Achievement name={x.name} content={x.content} earned={earned[x._id]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
