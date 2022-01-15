import React from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import "draft-js/dist/Draft.css";
import "./SubmitDream.css";

class SubmitDream extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
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
      </div>
    );
  }
}

export default SubmitDream;
