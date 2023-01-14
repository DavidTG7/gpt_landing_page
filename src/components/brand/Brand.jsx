import React from "react";
import { google, slack, atlassian, dropbox, shopify } from "./imports";

import "./brand.css";

export const Brand = () => {
  return (
    <div className="gpt3__brand">
      <img src={google} alt="google" />
      <img src={slack} alt="slack" />
      <img src={atlassian} alt="altassian" />
      <img src={dropbox} alt="dropbox" />
      <img src={shopify} alt="shopify" />
    </div>
  );
};
