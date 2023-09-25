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
    timeline: "August 2023 - Present",
    heading_txt: "Automation Engineer",
    pagh_txt:
      "Develop and maintain automated testing frameworks and tools, using programming languages and automation tools. Create and execute automated test cases based on test plans, ensuring consistent and repeatable testing.",
  },
  {
    icon: <WorkIcon />,
    timeline: "January 2021 - January 2022",
    heading_txt: "Software Engineer ",
    pagh_txt:
      " Spearheaded the design and development of the Front-End interface for the SAS platform, employing cuttingedge React.JS technologies to enhance the user experience for both writers and customers • Collaborated closely with cross-functional teams, including developers, designers, and product managers, togather requirements, refine user stories, and facilitate a smooth development and testing workflow. Successfully delivered a visually appealing and highly responsive Front-End interface that significantly improve user engagement and satisfaction, contributing to the platform’s overall success.",
  },
  {
    icon: <WorkIcon />,
    timeline: "September 2019 - January 2021",
    heading_txt: "CodeAutomation, Software Engineer",
    pagh_txt:
      "• Collaborated on outsourced projects for clients in the United States, leveraging MERN Stack technologies to deliver robust web solutions that met client requirements and standards.• Demonstrated proficiency in automation testing by utilizing Selenium, Java, and Cypress.io, contributing to improved test efficiency and accuracy in project deliverables.",
  },
];

const Experience_DATA2 = [
  {
    icon: <WorkIcon />,
    timeline: "February 2022 - May 2023",
    heading_txt: "Research Assistant",
    pagh_txt:
      "Analyzed the Non-Fungible Token (NFT) market, staying updated on emerging trends and technologies. Researched the underlying technologies for NFT development, identifying key blockchain platforms and protocols Evaluated various technologies suitable for NFT creation, including block-chain networks (e.g., Ethereum, Binance Smart Chain) and associated smart contract languages.",
  },
  
  {
    icon: <WorkIcon />,
    timeline: "July 2018 - September 2019",
    heading_txt: "Zaryans Consulting pvt, Software Engineer ",
    pagh_txt:
      "Spearheaded front-end development for the company’s ERP-based product, specializing in React.JS. Wrote and maintained React components using JSX syntax and the React API, ensuring the product’s user interface was feature-rich and user-friendly. Collaborated seamlessly with cross-functional teams to integrate RESTful APIs and back-end services, enabling dynamic data retrieval and display, and implemented responsive design principles for optimal user experiences across diverse devices and screen sizes Implemented responsive design techniques to guarantee a consistent and pleasant user experience across variousdevices and screen dimensions. Actively engaged with development team members to construct a scalable, maintainable, and high-quality application, emphasizing best practices in code quality and collaboration.",
  },
  
  
];

const Experience_DATA3 = [
  {
    icon: <WorkIcon />,
    timeline: "January 2022 - December 2023",
    heading_txt: "MS Computer Science",
    pagh_txt: "DH Collator",
  },
  {
    icon: <WorkIcon />,
    timeline: "September 2013-October 2017",
    heading_txt: "BS Computer Science",
    pagh_txt:
      "National College of Business Administration & Economics, Pakistan ",
  },
];
