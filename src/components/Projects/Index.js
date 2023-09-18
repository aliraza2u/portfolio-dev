import React from "react";
import "./Projects.css";
import Header from "../Header/Index";
import LinkIcon from "@mui/icons-material/Link";
import Button from "../Button/Index";
import image1 from "../image/forest-thumbnail.png";
import image2 from "../image/pigeon-thumbnail.png";
import image3 from "../image/midNight.png";
import image4 from "../image/stackCrypto.jpeg";
import image5 from "../image/invest.png";
import image6 from "../image/connect.png";

const Project = () => {
  return (
    <div className="project ">
      <Header header_txt="Recent Projects" />
      <div className="flex gap-10 pl-3">
        {["Everything", "Web", "Mobile"].map((item) => (
          <p
            key={item}
            className={`font-bold cursor-pointer hover:text-[#ff4c60] focus:text-[#ff4c60] active:text-[#ff4c60] recent-tabs`}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="project_parent">
        <div className="row">
          {PROJECT_DATA.map((x) => (
            <div className="col-md-4 col-sm-6 l1">
              <div style={{ backgroundImage: `url(${x.img})` }} className="projects_wrapper">
                <a href="/">
                  <div className="project_item">
                    <div className="project_detail"></div>
                    {HOVER_ITEM.map((e) => {
                      return (
                        <>
                          <span className="web">Web</span>
                          <h4 className="title1">Forest.io</h4>
                          <span className="text">
                            PIGEON is the top brand in mother and baby care products. It is the name
                            that spells comfort and convenience.{" "}
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
          ))}
        </div>
        <div className="button">
          <Button name="Load more" />
        </div>
      </div>
    </div>
  );
};

export default Project;

const PROJECT_DATA = [
  {
    img: image1,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
  {
    img: image4,
  },
  {
    img: image5,
  },
  {
    img: image6,
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
