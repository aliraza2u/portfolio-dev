import React from "react";
import "./Projects.css";
import Header from "../Header/Index";
import LinkIcon from "@mui/icons-material/Link";
import Button from "../Button/Index";
import image1 from "../image/zaryans.png";
import image2 from "../image/codeautomation.png";
import image3 from "../image/electricity3.png";
import image4 from "../image/newhaven.png";
import image5 from "../image/zaryanss.jpg";
import image6 from "../image/writesea.png";

const Project = () => {
  return (
    <div className="project " id="work">
      <Header header_txt="Recent Projects" />

      <div className="project_parent px-3 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {PROJECT_DATA.map((x) => (
            <div className="h-[320px]">
              <div
                style={{ backgroundImage: `url(${x.img})` }}
                className="projects_wrapper"
                >
                <a href={x.link}>
                  <div className="project_item">
                    <div className="project_detail"></div>

                    <span className="web">{x.tab}</span>
                    <h4 className="title1">Forest.io</h4>

                    <span className="text">{x.text}</span>
                    <span className="link_icon ">
                      <LinkIcon style={{ fontSize: "40px" }} />
                    </span>
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
    tab: "Web",
    tiltle: "Forest.io",
    text: "Plan, integrate and maintain software system according to your scope",
    icon: <LinkIcon />,
    link:"https://zaryans.com/services/bespoke/",
  },
  {
    img: image2,
    tab: "Web",
    tiltle: "Pigeon Arabia",
    text: "By offering resume enhancement services, your job board becomes more than just a listing site—it becomes a comprehensive career resource.",
    icon: <LinkIcon />,
    link:"https://writesea.com/product/",
  },
  {
    img: image3,
    tab: "Web",
    tiltle: "Luminary Podcasts",
    text: "CodeAutomation is a leading software development and testing company, revolutionizing the digital landscape through innovation and expertise",
    icon: <LinkIcon />,
    link:"https://codeautomation.ai/",
  },
  {
    img: image4,
    tab: "Mobile",
    tiltle: "Raiinmaker",
    text: "Dr. Mehdi Mekni is an associate professor of Computer Science and Cybersecurity at the University of New Haven.",
    icon: <LinkIcon />,
    link:'https://laser.newhaven.edu/about/',
  },
  {
    img: image5,
    tab: "Mobile",
    tiltle: "Raiinmaker",
    text: "With a vast experience and experienced technical team build simple to highly complex bespoken software system. Providing expertise from Story-telling to Designs",
    icon: <LinkIcon />,
    link:'https://zaryans.com/services/bespoke/',
  },
  {
    img: image6,
    tab: "Web",
    tiltle: "Pigeon Arabia",
    text: "This is a feature that checks for typos, spelling mistakes, and grammatical errors in the resume.",
    icon: <LinkIcon />,
    link:'https://zaryans.com/services/bespoke/',
  },
];