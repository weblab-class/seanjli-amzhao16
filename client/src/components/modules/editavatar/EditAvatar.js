import "./EditAvatar.css";
import React from "react";
import { get, post } from "../../../utilities.js";


const EditAvatarPage = (props) => {

  const hairType = ["blank", "long", "long-curly", "medium", "medium-curly", "short", "short-curly"];
  const hairColor = ["blank","black", "blonde", "brown", "ginger"];
  const shirt = ["blank","lavender", "light-blue", "mit", "navy", "pink", "sage", "white"];
  const skin = ["blank","1", "2", "3", "4", "5"];

  const editAvatar = (item, newItem) => {
    post("/api/editAvatar", {item: item, new: newItem});
    props.setAvatar({...props.avatar, [item] : newItem});
  }

  return (
    <div className="editAvatarContainer">
      {hairType.map((x) =>
      <button onClick={()=>editAvatar("hairType", x)}>change hair type to {x}</button>)}
<br/>
<br/>

      {hairColor.map((x) =>
      <button onClick={()=>editAvatar("hairColor", x)}>change hair color to {x}</button>)}
<br/>
<br/>

      {shirt.map((x) =>
      <button onClick={()=>editAvatar("shirt", x)}>change hair shift to {x}</button>)}
<br/>
<br/>

      {skin.map((x) =>
      <button onClick={()=>editAvatar("skin", x)}>change skin type to {x}</button>)}
    </div>
  );
};

export default EditAvatarPage;
