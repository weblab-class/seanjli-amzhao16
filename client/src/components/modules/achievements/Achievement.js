import React from "react";

const Achievement = (props) => {
    if (props.earned) {
        return (
            <div className="completeAchievement">
              {props.name}
              <div className="knownPrize">:)</div>
              <div className="achievementDescriptionContainer">
                <div className="completeAchievementDescription">{props.content}</div>
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
}

export default Achievement;