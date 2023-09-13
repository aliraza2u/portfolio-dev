import React from "react";
import "./Projects.css";
import Header from "../Header/Index";
import LinkIcon from "@mui/icons-material/Link";
import Button from "../Button/Index";
const Project = () => {
  return (
    <div className="project ">
      <Header header_txt="Recent Projects" />
      <div className="row">
        <div className="col-md-10">
          <div className="project_tab mt-5 ">
            <ul>
              <li style={{ color: "#FF4C60" }}>Everything</li>
              <li>Web</li>
              <li>Mobile</li>
            </ul>
          </div>
        </div>
        <div className="col-md-2"></div>
      </div>
      <div className="project_parent">
        <div className="row ">
          {PROJECT_DATA.map((element) => {
            return (
              <div className="col-md-4 col-sm-6 l1 ">
                <div className="projects_wrapper">
                  <a href="">
                    <div className="project_item">
                      <div className="project_detail"></div>
                      {HOVER_ITEM.map((e) => {
                        return (
                          <>
                            <span className="web">Web</span>
                            <h4 className="title1">Forest.io</h4>
                            <span className="text">
                              PIGEON is the top brand in mother and baby care
                              products. It is the name that spells comfort and
                              convenience.{" "}
                            </span>
                            <span className="link_icon ">
                              <LinkIcon style={{ fontSize: "40px" }} />
                            </span>
                          </>
                        );
                      })}
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
        <div className="button">
          <Button btn_text="Load more" />
        </div>
      </div>
    </div>
  );
};

export default Project;

const PROJECT_DATA = [
  {
    img: "/public/img/forest-thumbnail.png",
  },
  {
    img: "/public/img/pigeon-thumbnail.png",
  },
  {
    img: "/public/img/luminary-thumbnail.png",
  },
  {
    img: "/public/img/raiinmaker-thumbnail.jpeg",
  },
  {
    img: "/public/img/hashmeeting-thumbnail.png",
  },
  {
    img: "/public/img/zingaly-thumbnail.png",
  },
];
const HOVER_ITEM = [
  {
    tab: "Web",
    tiltle: "Forest.io",
    text: "Forest.io is a cleantech AI company that aims to protect our planet by disrupting the voluntary carbon market with transparent offsets.",
    icon: <LinkIcon />,
  },
  // {
  //   tab: "Web",
  //   tiltle: "Pigeon Arabia",
  //   text: "PIGEON is the top brand in mother and baby care products. It is the name that spells comfort and convenience. ",
  //   icon: <LinkIcon />,
  // },
  // {
  //   tab: "Web",
  //   tiltle: "Luminary Podcasts",
  //   text: "Luminary is a subscription podcast network.Original podcasts you won't find anywhere else.",
  //   icon: <LinkIcon />,
  // },
  // {
  //   tab: "Mobile",
  //   tiltle: "Raiinmaker",
  //   text: "Raiinmaker, the fastest growing Web 3.0 Social Creator Platform bridges the gap between legacy social media communities.",
  //   icon: <LinkIcon />,
  // },
  // {
  //   tab: "Web",
  //   tiltle: "Pigeon Arabia",
  //   text: "PIGEON is the top brand in mother and baby care products. It is the name that spells comfort and convenience. ",
  //   icon: <LinkIcon />,
  // },
];
