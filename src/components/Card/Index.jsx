import React from "react";
import "./Card.css";

const Index = () => {
  return (
    <div className="card_wrap">
      {SLIDER_DATA2.map((x) => (
        <div key={x.title}>
          <div className="image_wraps">
            <img
              src="img/avatar-2.svg"
              alt="avator"
              style={{ width: "90px", height: "100px" }}
            />
          </div>
          <div className="card_head">
            <h4 className="title">Ray Parker</h4>
            <p className="para">Technical Project Manager</p>
          </div>

          <div className="wrap">
            <p className="paragrafh">
              Arslan was wonderful to work with. Very attentive and had a lot of
              great ideas for the project we were working on. One of the things
              I liked the most about Arslan is his willingness to learn and work
              on things a little out of his zone. Intelligent, hard-working guy.
              I would definitely recommend.
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Index;

export const SLIDER_DATA2 = [
  {
    img: "img/avatar-2.svg",
    title: "Ray Parker",
    subtitle: "Technical Project Manager",
    review:
      "Arslan is a very focused, enthusiastic, and personable individual with great abilities to deliver on technical solutions. He has great insight in planning forward and can always take control of a situation. His strengths of proactively offering solutions and ideas, make him a valuable asset to any situation or company. He owned a large part of our administration portal, and helped with a lot of changes and development efforts that we coordinated across the team.",
  },
  {
    img: "img/avatar-2.svg",
    title: "Ray Parker",
    subtitle: "Technical Project Manager",
    review:
      "Arslan is a very focused, enthusiastic, and personable individual with great abilities to deliver on technical solutions. He has great insight in planning forward and can always take control of a situation. His strengths of proactively offering solutions and ideas, make him a valuable asset to any situation or company. He owned a large part of our administration portal, and helped with a lot of changes and development efforts that we coordinated across the team.",
  },
  {
    img: "img/avatar-2.svg",
    title: "Ray Parker",
    subtitle: "Technical Project Manager",
    review:
      "Arslan is a very focused, enthusiastic, and personable individual with great abilities to deliver on technical solutions. He has great insight in planning forward and can always take control of a situation. His strengths of proactively offering solutions and ideas, make him a valuable asset to any situation or company. He owned a large part of our administration portal, and helped with a lot of changes and development efforts that we coordinated across the team.",
  },
  {
    img: "img/avatar-2.svg",
    title: "Ray Parker",
    subtitle: "Technical Project Manager",
    review:
      "Arslan is a very focused, enthusiastic, and personable individual with great abilities to deliver on technical solutions. He has great insight in planning forward and can always take control of a situation. His strengths of proactively offering solutions and ideas, make him a valuable asset to any situation or company. He owned a large part of our administration portal, and helped with a lot of changes and development efforts that we coordinated across the team.",
  },
  
];
