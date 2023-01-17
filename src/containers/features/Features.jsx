import React from "react";
import { Feature } from "../../components";

import "./features.css";

const featuresData = [
  {
    title: "Generative Pre-training",
    text: "GPT-3 is a pre-trained generative language model, meaning it has been trained on a large dataset before being used for specific tasks.",
  },
  {
    title: "Natural Language Understanding",
    text: "GPT-3 has advanced natural language understanding capabilities, allowing it to understand and respond to questions and commands accurately and fluently.",
  },
  {
    title: "Text generation",
    text: "GPT-3 is capable of autonomous text generation, allowing it to write in various styles and tones, and generate completely new content.",
  },
  {
    title: "Multilingual",
    text: "GPT-3 is able to understand and generate text in multiple languages, allowing it to work in a variety of contexts and applications.",
  },
];

export const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => {
          return (
            <Feature
              title={item.title}
              text={item.text}
              key={item.title + index}
            />
          );
        })}
      </div>
    </div>
  );
};
