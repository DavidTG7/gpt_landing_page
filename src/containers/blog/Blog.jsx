import React from "react";
import { Article } from "../../components";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

import "./blog.css";

console.log(blog01);

export const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sep 11, 2022"
            title="GPT-3 Revolutionizes Natural Language Processing"
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Oct 17, 2022"
            title="penAI's GPT-3 Achieves Breakthroughs in Language Translation"
          />
          <Article
            imgUrl={blog03}
            date="Nov 10, 2022"
            title="GPT-3 Leads the Way in Automated Content Creation"
          />
          <Article
            imgUrl={blog04}
            date="Dec 15, 2022"
            title="GPT-3's Advancements in Language Understanding Changing the Game for AI"
          />
          <Article
            imgUrl={blog05}
            date="Jan 2, 2023"
            title="GPT-3's Impact on Business and Industry: Opportunities and Challenges"
          />
        </div>
      </div>
    </div>
  );
};
