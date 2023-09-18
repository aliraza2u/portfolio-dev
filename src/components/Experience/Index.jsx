import React from "react";
import "./Experience.css";
import Header from "../Header/Index";
import WorkIcon from "@mui/icons-material/Work";

const Experience = () => {
  return (
    <div className="experience pb-36">
      <Header header_txt="Experience" />
      <div className="experience_parent">
        <div className="row px-4 xl:px-0">
          <div className="col-md-6">
            <div className="experience_child">
              {Experience_DATA1.map((element) => {
                return (
                  <div className="child_positions">
                    <div className="position_icon">
                      <span>{element.icon}</span>
                      <span class="line"></span>
                    </div>
                    <div className="content">
                      <span className="timeline" style={{ color: "#8b88b1" }}>
                        {element.timeline}
                      </span>
                      <h3 className="heading_txt">{element.heading_txt}</h3>
                      <span className="pagh_txt">{element.pagh_txt}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-6">
            <div className="experience_child">
              {Experience_DATA2.map((element) => {
                return (
                  <div className="child_positions">
                    <div className="position_icon">
                      <span>{element.icon}</span>
                      <span class="line"></span>
                    </div>
                    <div className="content">
                      <span className="timeline" style={{ color: "#8b88b1" }}>
                        {element.timeline}
                      </span>
                      <h3 className="heading_txt">{element.heading_txt}</h3>
                      <span className="pagh_txt">{element.pagh_txt}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="col-md-12 mt-md-4">
            <div className="experience_child " style={{}}>
              {Experience_DATA3.map((element) => {
                return (
                  <div className="child_positions ">
                    <div className="position_icon">
                      <span>{element.icon}</span>
                      <span class="line"></span>
                    </div>
                    <div className="content">
                      <span className="timeline" style={{ color: "#8b88b1" }}>
                        {element.timeline}
                      </span>
                      <h3 className="heading_txt">{element.heading_txt}</h3>
                      <span className="pagh_txt">{element.pagh_txt}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;

const Experience_DATA1 = [
  {
    icon: <WorkIcon />,
    timeline: "July 2023 - Present",
    heading_txt: "employability.life",
    pagh_txt:
      "Being Frontend Engineer, I am responsible for designing and development of the platform, creating pixel-perfect designs, writing unit and integration tests, and API integrations.",
  },
  {
    icon: <WorkIcon />,
    timeline: "Sep 2020 - Oct 2021",
    heading_txt: "Software Developer @ Creative Handles",
    pagh_txt:
      "As a React.js/Next.js developer contributed to 5+ projects and lead 2 projects. The main role is to create pixel-perfect designs ensuring high-quality code and standards, PR reviews, estimation meetings and deployments.",
  },
  {
    icon: <WorkIcon />,
    timeline: "Mar 2023 - May 2023",
    heading_txt: "MERN Instructor",
    pagh_txt:
      "Had a privilege to teach a full length 3-months long MERN course to a class of 30+ students and professionals. The responsibilities included delivering sessions, hands-on lab, engaging with students and technical assessment.",
  },
];

const Experience_DATA2 = [
  {
    icon: <WorkIcon />,
    timeline: "Nov 2021 - Jan 2023",
    heading_txt: "MERN Developer @ Raiinmaker",
    pagh_txt:
      "As a FullStack MERN developer, I had been responsible for developing and maintaining admin dashboard for a crypto based reward sharing platforms, creating and integrating API's, refactoring and improving the codebase.",
  },
  {
    icon: <WorkIcon />,
    timeline: "Mar 2020 - Nov 2020",
    heading_txt: "Lead F.E. Developer @ Prism Digitals LLC",
    pagh_txt:
      "As a Lead Front-end developer I helped the company to deliver highly optimized web applications, CMS and Admin Dashboards. The apps got featured in UAE region as well.",
  },
  {
    icon: <WorkIcon />,
    timeline: "Mar 2020 - Nov 2020",
    heading_txt: "MERN Stack developer @ Hashlogics",
    pagh_txt:
      "As a Lead Front-end developer I helped the company to deliver highly optimized web applications, CMS and Admin Dashboards. The apps got featured in UAE region as well.",
  },
];

const Experience_DATA3 = [
  {
    icon: <WorkIcon />,
    timeline: "Sep 2018 - Dec 2018",
    heading_txt: "Internship | React.Js",
    pagh_txt: "DH Collator",
  },
  {
    icon: <WorkIcon />,
    timeline: "2014 - 2018",
    heading_txt: "BS Hons. Information Technology",
    pagh_txt: "University of Education, LHR",
  },
];
