import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

import "./header.css";

export const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          With its advanced natural language processing abilities, we can create
          automated content, assist with language translation, and more. Let's
          build something amazing and push the boundaries of what is possible in
          fields such as AI, music, coding, design and so on. Let's put this
          powerful tool to work and create something truly incredible.
          
            It's used for automated responses, creating
          automated content and automating natural language processing tasks.
          It's pre-trained and has great potential in the field of natural
          language processing.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="image" />
      </div>
    </div>
  );
};
