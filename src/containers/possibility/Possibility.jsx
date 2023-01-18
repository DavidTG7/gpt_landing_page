import React from "react";
import possibilityImg from "../../assets/possibility.png";

import "./possibility.css";

export const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={possibilityImg} alt="possibility image" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          The possibilities with GPT-3 are truly limitless. As a powerful
          language processing model, it has the ability to generate human-like
          text, answer questions, and even complete tasks such as translation
          and summarization. It has the ability to assist in
          fields such as natural language processing, computer programming,
          research and development, and much more. In short, GPT-3 has the power
          to revolutionize the way we interact with technology and unlock new
          possibilities for humanity.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};
