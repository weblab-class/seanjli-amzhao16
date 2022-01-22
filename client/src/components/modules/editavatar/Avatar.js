import "../../pages/Profile.css";
import "./AvatarSkin.css";
import "./AvatarShirts.css";
import "./AvatarHair.css";
import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <div className={"skin-" + props.avatar.skin}></div>
      <div className={"shirts-" + props.avatar.shirt}></div>
      <div className={props.avatar.hairType + "-" + props.avatar.hairColor + "-hair"}></div>
    </div>
  );
};

export default Avatar;
