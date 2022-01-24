import React from "react";
import "./AchievementImages.css";

const Achievement = (props) => {
  if (props.earned) {
    return (
      <div className="completeAchievement">
        {props.name}
        <div className="achievementDescriptionContainer">
          <div className="completeAchievementDescription">{props.content}</div>
        </div>
        <div className="knownPrize">
          {" "}
          <div className="prizeContainer">
            {" "}
            <div className={"prize-" + props.name}></div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="incompleteAchievement">
        {props.name}
        <div className="unknownPrize">?</div>
        <div className="achievementDescriptionContainer">
          <div className="achievementDescription">{props.content}</div>
        </div>
      </div>
    );
  }
};

export default Achievement;
