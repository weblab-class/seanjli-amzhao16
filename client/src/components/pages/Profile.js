/* TODO make profile page */

import React, { useState, useEffect } from "react";
import NavBar from "../modules/NavBar.js";
import { useParams } from "@reach/router";

import { get, post } from "../../utilities.js";

import NotFound from "./NotFound";
import "./Profile.css";
import EditAvatarPage from "../modules/editavatar/EditAvatar.js";

const Profile = (props) => {
  const { text } = useParams();

  if (text.length != 24) {
    return <NotFound />;
  }

  const [profile, setProfile] = useState([{ name: [] }]);

  useEffect(() => {
    get("/api/getProfile", { parent: text }).then((x) => setProfile(x));
  }, []);

  const [showEditAvatar, setShowEditAvatar] = useState(false);

  const editAvatarPopUp = (event) => {
    console.log("clicky");
    if (showEditAvatar === true) {
      setShowEditAvatar(false);
    } else {
      setShowEditAvatar(true);
    }
  };
  /* THE ACHIEVEMENTS STUFF */
  /* write 1 dream (TODO: change back, made true to see what true ones look like)*/
  const [novice, setNovice] = useState(true);
  /* write 5 dreams TODO: change back, made true to see what true ones look like)*/
  const [reporter, setReporter] = useState(true);
  /* write 15 dream*/
  const [dreamer, setDreamer] = useState(false);
  /* write 50 dream*/
  const [visionary, setVisionary] = useState(false);
  /* make 5 tags (TODO: change back, made true to see what true ones look like)*/
  const [classifier, setClassifier] = useState(true);
  /* make 10 tags*/
  const [cataloguer, setCataloguer] = useState(false);
  /* write 3 tags on one post*/
  const [multifaceted, setMultifaceted] = useState(false);
  /* <15 word dream*/
  const [laconic, setLaconic] = useState(false);
  /* > 100 word dream */
  const [scribe, setScribe] = useState(false);
  /* > 250 word dream*/
  const [novelist, setNovelist] = useState(false);
  /* make 3 friends*/
  const [amiable, setAmiable] = useState(false);
  /* make 10 friends*/
  const [socialite, setSocialite] = useState(false);

  /* TODO: each individual achievement if completed will need its own css*/
  /* because of the image of the reward, on achievements folder.*/
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
          {novice ? (
            <div className="completeAchievement">
              novice
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">write 1 dream</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              novice
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">write 1 dream</div>
              </div>
            </div>
          )}
          {reporter ? (
            <div className="completeAchievement">
              reporter
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">write 5 dreams</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              reporter
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">write 5 dreams</div>
              </div>
            </div>
          )}
          {dreamer ? (
            <div className="completeAchievement">
              dreamer
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">write 15 dreams</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              dreamer
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">write 15 dreams</div>
              </div>
            </div>
          )}
          {visionary ? (
            <div className="completeAchievement">
              visionary
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">write 50 dreams</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              visionary
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">write 50 dreams</div>
              </div>
            </div>
          )}
          {classifier ? (
            <div className="completeAchievement">
              classifier
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">make 5 tags</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              classifier
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">make 5 tags</div>
              </div>
            </div>
          )}
          {cataloguer ? (
            <div className="completeAchievement">
              cataloguer
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">make 10 tags</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              cataloguer
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">make 10 tags</div>
              </div>
            </div>
          )}
          {multifaceted ? (
            <div className="completeAchievement">
              multifaceted
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">add 3 tags to one post</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              multifaceted
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">add 3 tags to one post</div>
              </div>
            </div>
          )}
          {laconic ? (
            <div className="completeAchievement">
              laconic
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">write a &lt;15 word dream</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              laconic
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">write a &lt;15 word dream</div>
              </div>
            </div>
          )}
          {scribe ? (
            <div className="completeAchievement">
              scribe
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">write a &gt;100 word dream</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              scribe
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">write a &gt;100 word dream</div>
              </div>
            </div>
          )}
          {novelist ? (
            <div className="completeAchievement">
              novelist
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">write a &gt;250 word dream</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              novelist
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">write a &gt;250 word dream</div>
              </div>
            </div>
          )}
          {amiable ? (
            <div className="completeAchievement">
              amiable
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">make 3 friends</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              amiable
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">make 3 friends</div>
              </div>
            </div>
          )}
          {socialite ? (
            <div className="completeAchievement">
              socialite
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">make 10 friends</div>
              </div>
            </div>
          ) : (
            <div className="incompleteAchievement">
              socialite
              <div className="unknownPrize">?</div>
              <div className="achievementDescriptionContainer">
                <div className="achievementDescription">make 10 friends</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
