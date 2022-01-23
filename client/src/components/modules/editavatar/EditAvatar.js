import "./EditAvatar.css";
import React from "react";
import { get, post } from "../../../utilities.js";
import "./AvatarSkin.css";

const EditAvatarPage = (props) => {
  const hairType = [
    "blank",
    "long",
    "long-curly",
    "medium",
    "medium-curly",
    "short",
    "short-curly",
  ];
  const hairColor = ["blank", "black", "brown", "blonde", "ginger"];
  const shirt = ["blank", "lavender", "light-blue", "mit", "navy", "pink", "sage", "white"];
  const skin = ["blank", "1", "2", "3", "4", "5"];
  const glasses = ["blank", "novice", "reporter", "dreamer", "visionary"];
  const neck = ["blank", "classifier", "cataloguer", "multifaceted"];
  const hat = ["blank", "laconic", "scribe", "novelist", "amiable", "socialite"];

  const unlocked =
    {
      "blank": true,
      "novice": props.earned[0],
      "reporter": props.earned[1],
      "dreamer": props.earned[2],
      "visionary": props.earned[3],
      "classifier": props.earned[4],
      "cataloguer": props.earned[5],
      "multifaceted": props.earned[6],
      "laconic": props.earned[7],
      "scribe": props.earned[8],
      "novelist": props.earned[9],
      "amiable": props.earned[10],
      "socialite": props.earned[11]
    }

  const editAvatar = (item, newItem) => {
    post("/api/editAvatar", { item: item, new: newItem });
    props.setAvatar({ ...props.avatar, [item]: newItem });
  };

  /* TODO: how to highlight just the one that is currently selected?
  I tried to do an if with props.avatar.skin but i dont think it
  likes me referencing props inside of map*/
  return (
    <div className="editAvatarContainer">
      <div className="editSkinContainer">
        skin color:
        <div className="editFeatureSubcontainer">
          {" "}
          {skin.map((x) =>
            props.avatar.skin === x ? (
              <button className={"skinColorPicker-" + x} onClick={() => editAvatar("skin", x)}>
                <div className={"white-highlight-skin-" + x}></div>
              </button>
            ) : (
              <button
                className={"skinColorPicker-" + x}
                onClick={() => editAvatar("skin", x)}
              ></button>
            )
          )}
        </div>
      </div>
      <div className="editHairColorContainer">
        hair color:
        <div className="editFeatureSubcontainer">
          {" "}
          {hairColor.map((x) =>
            props.avatar.hairColor === x ? (
              <button className={"hairColorPicker-" + x} onClick={() => editAvatar("hairColor", x)}>
                <div className={"white-highlight-hairColor-" + x}></div>
              </button>
            ) : (
              <button
                className={"hairColorPicker-" + x}
                onClick={() => editAvatar("hairColor", x)}
              ></button>
            )
          )}
        </div>
      </div>
      <div className="editHairStyleContainer">
        hair style:
        <div className="editFeatureSubcontainer">
          {" "}
          {hairType.map((x) =>
            props.avatar.hairType === x ? (
              <button
                className={x + "-" + props.avatar.hairColor + "-button"}
                onClick={() => editAvatar("hairType", x)}
              >
                {" "}
                <div className={"white-highlight-hairType-" + x}></div>
              </button>
            ) : (
              <button
                className={x + "-" + props.avatar.hairColor + "-button"}
                onClick={() => editAvatar("hairType", x)}
              ></button>
            )
          )}
        </div>
      </div>
      <div className="editShirtContainer">
        shirt color:
        <div className="editFeatureSubcontainer">
          {" "}
          {shirt.map((x) =>
            props.avatar.shirt === x ? (
              <button className={x + "-shirt-button"} onClick={() => editAvatar("shirt", x)}>
                <div className={"white-highlight-shirt-" + x}></div>
              </button>
            ) : (
              <button
                className={x + "-shirt-button"}
                onClick={() => editAvatar("shirt", x)}
              ></button>
            )
          )}
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {glasses.map((x) => unlocked[x] ?
        <button onClick={() => editAvatar("glasses", x)}>change glasses to {x}</button> : <></>)}

      <br />

      {neck.map((x) => unlocked[x] ?
        <button onClick={() => editAvatar("neck", x)}>change neck to {x}</button> : <></>)}

      <br />

      {hat.map((x) => unlocked[x] ?
        <button onClick={() => editAvatar("hat", x)}>change hat to {x}</button> : <></>)}
    </div>
  );
};

export default EditAvatarPage;
