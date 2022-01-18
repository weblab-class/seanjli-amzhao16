import React, { useState, useEffect } from "react";
import {
  Editor,
  EditorState,
  RichUtils,
  convertFromRaw,
  convertToRaw,
  ContentState,
} from "draft-js";
import "draft-js/dist/Draft.css";
import { get, post } from "../../../utilities.js";
import "./SubmitDream.css";

class SubmitDream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
    };
    this.onChange = (editorState) => {
      this.setState({
        editorState: editorState,
      });
    };
  }

  handleSubmit = (editorState) => {
    const addDream = (value) => {
      const body = { content: value, privacy: this.props.privacy, tags: this.props.tags };
      post("/api/addDream", body);
      // the raw state, stringified
      /* EDITED HERE*/
      // convert the raw state back to a useable ContentState object
    };
    const rawContent = convertToRaw(this.state.editorState.getCurrentContent());
    let contentString = JSON.stringify(rawContent);
    addDream(contentString);
    this.setState({
      editorState: EditorState.createEmpty(),
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
