import React from "react";
import { Feature } from "../../components/feature/Feature";

import "./whatgpt3.css";

export const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT-3"
          text="GPT-3 is
          a powerful language processing model by OpenAI, with 175 billion
          parameters, capable of generating natural and coherent text in
          multiple languages. It's used for automated responses, creating
          automated content and automating natural language processing tasks.
          It's pre-trained and has great potential in the field of natural
          language processing."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Chatbots built with GPT-3 OpenAI are the future of customer service. They understand human language with unprecedented accuracy and provide personalized assistance."
        />
        <Feature
          title="Knowledgebase"
          text="Powerful, accurate, and efficient knowledgebase built using GPT-3 technology. Quickly find answers to any question with ease. User-friendly interface and advanced search capabilities."
        />
        <Feature
          title="Education"
          text="Revolutionary education platform powered by GPT-3 technology. Personalized learning, interactive content, and real-time feedback. Advance your skills and knowledge with ease."
        />
      </div>
    </div>
  );
};
