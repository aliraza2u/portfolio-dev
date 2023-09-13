import React from "react";
import "./Header.css";
const Header = ({ header_txt }) => {
  return (
    <div>
      <div className="aboutme_heading">
        {/* <img src="/img/dots-bg.svg" alt="dfafg" className="ml-md-2" /> */}
          <h2 className="section_title">{header_txt}</h2>
      </div>
    </div>
  );
};

export default Header;
