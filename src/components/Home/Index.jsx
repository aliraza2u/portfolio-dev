import React from "react";
import "./Home.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Button from "../Button/Index";
import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";

import {
  Icon1,
  Icon2,
  Icon4,
  Icon5,
  Icon6,
  Icon7,
  Icon8,
  Icon9,
  Icon10,
  Icon11,
  Icon12,
} from "../images";

const Index = () => {
  return (
    <div className="home" id='home'>
      <div className="intro">
        <div className="intro-logo">
          <img src="/img/profile-pic.png" alt="" />
        </div>
        <h1>Anwar Ul Haq</h1>
        <div className="intro-txt">
          <p className="intro-txt-para">I'm true Front-End Developer</p>
        </div>
        <div className="intro-icon">
          {HOMEICONS.map((element) => {
            return (
              <ListItemButton key={element.icon}>
                <ListItemIcon color={element.color}>
                  <div style={{ color: "#FF4C60" }}>{element.icon}</div>
                </ListItemIcon>
              </ListItemButton>
            );
          })}
        </div>
        <Button name="Hire me" />

        <div className="scroll">
          <a href="./about/About.jsx">Scroll Down</a>
          <a href="#" className="mouse_click">
            <div className="scroll_mouse">
              <div className="scroll_mouse_dot"></div>
            </div>
          </a>
        </div>
      </div>
      <div className="parallax" id="scene" data-relative-input="true">
        
            <Icon1 />
            <Icon2 />
            <Icon4 />
            <Icon5 />
            <Icon6 />
            <Icon7 />
            <Icon8 />
            <Icon9 />
            <Icon10 />
            <Icon11 />
            <Icon12 />
          
      </div>
    </div>
  );
};

export default Index;
const HOMEICONS = [
  {
    icon: <GitHubIcon style={{ color: "#353353", fontSize: "21px" }} />,
  },
  {
    icon: <InstagramIcon style={{ color: "#ff4c60", fontSize: "21px" }} />,
  },
  {
    icon: <TwitterIcon style={{ color: "#0d6efd", fontSize: "21px" }} />,
  },
  {
    icon: <WhatsAppIcon style={{ color: "#198754", fontSize: "21px" }} />,
  },
];
