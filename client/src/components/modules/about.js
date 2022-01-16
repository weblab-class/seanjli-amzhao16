import "./about.css";
import React from "react";

const AboutPage = (props) => {
  return (
    <div>
      {props.page === "landing" ? (
        <div className="aboutContainerLanding">
          welcome to dream log!
          <br />
          here, you can write down dreams you've had, to keep you in touch
          <br />
          with your imagination. you can share dreams with friends, tag your
          <br />
          dreams by topic, and work to win achievements. dream on!
          <br />- angela and sean
        </div>
      ) : (
        <div className="aboutContainerHome">
          welcome! now it's time to write, read, share, and sort dreams to your liking - remember,
          more logging will win your avatar various flair!
        </div>
      )}
    </div>
  );
};

export default AboutPage;
