import React, { useState, useEffect } from "react";
import { ContentState, Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import { get, post } from "../../../utilities.js";
import "./SubmitDream.css";
import { convertFromRaw, convertToRaw } from "draft-js";
import ReactDOM from "react-dom";

class SubmitDream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.handleSubmit = (event) => {
      const addDream = (value) => {
        // the raw state, stringified
        /* EDITED HERE*/
        const rawContentState = JSON.stringify(
          convertToRaw(this.state.editorState.getCurrentContent())
        );
        // convert the raw state back to a useable ContentState object
        const body = { content: rawContentState };
        post("/api/addDream", body);
      };
      addDream(this.state.editorState);
      this.setState(EditorState.createEmpty());
    };
  }

  onChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
    if (newState) {
      this.onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  // onUnderlineClick = () => {
  //   this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "UNDERLINE"));
  // };

  // onBoldClick = () => {
  //   element.dispatchEvent(new KeyboardEvent("keydown", { key: "command" }));
  //   element.dispatchEvent(new KeyboardEvent("keydown", { key: "i" }));
  // };

  // onItalicClick = () => {
  //   // this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, "ITALIC"));
  //   EditorState.set(this.state.editorState, "ITALIC");
  // };

  render() {
    return (
      <div className="editorContainer">
        <div className="textBox">
          <Editor
            placeholder="write your dream here"
            editorState={this.state.editorState}
            handleKeyCommand={this.handleKeyCommand}
            onChange={this.onChange}
          />
        </div>
        <button className="submitButton" type="submit" value="Submit" onClick={this.handleSubmit}>
          submit dream
        </button>
      </div>
    );
  }
}

export default SubmitDream;
