import "../../pages/Profile.css";
import "./AvatarSkin.css";
import "./AvatarShirts.css";
import "./AvatarHair.css";
import "./AvatarGlasses.css";
import "./AvatarNeckwear.css";
import "./AvatarHat.css";
import React from "react";

const Avatar = (props) => {
  return (
    <div>
      <div className={"skin-" + props.avatar.skin}></div>
      <div className={"glasses-" + props.avatar.glasses}></div>
      <div className={"hat-" + props.avatar.hat}></div>
      <div className={"neck-" + props.avatar.neck}></div>
      <div className={"shirts-" + props.avatar.shirt}></div>
      <div className={props.avatar.hairType + "-" + props.avatar.hairColor + "-hair"}></div>
    </div>
  );
};

export default Avatar;
