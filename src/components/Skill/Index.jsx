import React, { version } from "react";
import "./Skill.css";
import Header from "../Header/Index";
import CoffeeIcon from "@mui/icons-material/Coffee";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BadgeIcon from "@mui/icons-material/Badge";
const Skill = () => {
  return (
    <div>
      <Header header_txt="Skills/Experties" />
      <div className="skill">
        {/* sKILL header */}
        {/* Skill Center Parent */}
        <div className="skill_parent my-md-5 ">
          <div className="skill_parent_center ">
            <div className="skill_center_child">
              <div className="skill_center_childs">
                <h4 className="skill_text_color" style={{ color: "#ffd15c" }}>
                  Fontend
                </h4>
                <ul>
                  {FRONTEND_SKILS.map((Element) => {
                    return <li>{Element}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="skill_center_child">
              <div className="skill_center_childs ">
                <h4 className="skill_text_color" style={{ color: "#ff4c60" }}>
                  Backend
                </h4>
                <ul>
                  {BACKEND_SKILLS.map((Element) => {
                    return <li>{Element}</li>;
                  })}
                </ul>
              </div>
              <div className="skill_center_childs mt-2">
                <h4 className="skill_text_color" style={{ color: "#6c6ce5" }}>
                  Version Control
                </h4>
                <ul>
                  {VERSIONCONTROL_SKILLS.map((Element) => {
                    return <li>{Element}</li>;
                  })}
                </ul>
              </div>
            </div>
            <div className="skill_center_child">
              <div className="skill_center_childs">
                <h4 className="skill_text_color" style={{ color: "#ffd15c" }}>
                  Management Tools
                </h4>
                <ul>
                  {MANAGEMENT_SKILLS.map((element) => {
                    return <li>{element}</li>;
                  })}
                </ul>
              </div>
              <div className="skill_center_childs mt-2">
                <h4 className="skill_text_color" style={{ color: "#ff4c60" }}>
                  Design
                </h4>
                <ul>
                  {Design_SKILLS.map((element) => {
                    return <li>{element}</li>;
                  })}
                </ul>
              </div>
              <div className="skill_center_childs mt-2">
                <h4 className="skill_text_color" style={{ color: "#6c6ce5" }}>
                  CI/CD
                </h4>
                <ul>
                  {CICD_SKILLS.map((element) => {
                    return <li>{element}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Achevement Section */}
        <div className=" achivement_wrap">
          <div className="col-md-3 col-sm-6">
            <div className="achievment">
              <div className="acheivement_item">
                <span className="acheievement_item_icon ">
                  <LocalFireDepartmentOutlinedIcon
                    style={{ color: "rgb(247, 149, 0)", fontSize: "36px" }}
                  />
                </span>
                <div className="acheivement_detail">
                  <h3>25</h3>
                  <span>Projects Completed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="achievment">
              <div className="acheivement_item">
                <span className="acheievement_item_icon ">
                  <CoffeeIcon
                    style={{ color: " rgb(193, 130, 68)", fontSize: "36px" }}
                  />
                </span>
                <div className="acheivement_detail">
                  <h3>1217</h3>
                  <span>Cup of coffee</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="achievment">
              <div className="acheivement_item">
                <span className="acheievement_item_icon ">
                  <PeopleAltIcon
                    style={{ color: "rgb(108, 108, 229)", fontSize: "36px" }}
                  />
                </span>
                <div className="acheivement_detail">
                  <h3>10</h3>
                  <span>Satisfied Client</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="achievment">
              <div className="acheivement_item">
                <span className="acheievement_item_icon ">
                  <BadgeIcon
                    style={{ color: "rgb(255, 76, 96)", fontSize: "36px" }}
                  />
                </span>
                <div className="acheivement_detail">
                  <h3 className="">1335</h3>
                  <span>Commits Pushed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;

const FRONTEND_SKILS = [
  "React.Js",
  "Next.Js",
  "React Native",
  "JavaScript",
  "Typescript",
  "jQuery",
  "JavaScript",
  "HTML5 | CSS 3",
  "Redux",
  "SASS/SCSS",
  "Material UI",
  "Styled Components",
  "Tailwind CSS",
  "Bootstrap",
];
const BACKEND_SKILLS = [
  "Node.Js",
  "Express.Js",
  "Firebase",
  "Firestore",
  "Socket IO",
  "MongoDb | Mongoose",
  "MySQL | Sequelize",
  "PostgreSQL | TypeORM",
  "Stripe",
  "Google Maps | Mapbox",
];
const VERSIONCONTROL_SKILLS = ["Git", "Github | Gitlab | BitBucket"];

const MANAGEMENT_SKILLS = [
  "JIRA | Clickup | Monday",
  "Trello | Teams | Slack",
  "Azure Devops",
];
const Design_SKILLS = ["Figma | Adobe Xd", "Photoshop"];

const CICD_SKILLS = ["AWS | Github Actions", "Netlify", "Firebase Hosting"];
