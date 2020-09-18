import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://i.pinimg.com/originals/9e/bb/9d/9ebb9d5444cca841bf2f37776f8060e0.jpg"
        profileSrc="https://pm1.narvii.com/6584/d4704d1b06632caf495d3547433a24885351e755_hq.jpg"
        title="Sakuragi Hanamichi"
      />
      <Story
        image="https://i.pinimg.com/originals/9e/bb/9d/9ebb9d5444cca841bf2f37776f8060e0.jpg"
        profileSrc="https://pm1.narvii.com/6584/d4704d1b06632caf495d3547433a24885351e755_hq.jpg"
        title="Sakuragi Hanamichi"
      />
      <Story
        image="https://i.pinimg.com/originals/9e/bb/9d/9ebb9d5444cca841bf2f37776f8060e0.jpg"
        profileSrc="https://pm1.narvii.com/6584/d4704d1b06632caf495d3547433a24885351e755_hq.jpg"
        title="Sakuragi Hanamichi"
      />
    </div>
  );
}

export default StoryReel;
