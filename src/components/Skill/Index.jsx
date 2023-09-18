import React from "react";
import "./Skill.css";
import Header from "../Header/Index";
import CoffeeIcon from "@mui/icons-material/Coffee";
import LocalFireDepartmentOutlinedIcon from "@mui/icons-material/LocalFireDepartmentOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import BadgeIcon from "@mui/icons-material/Badge";

const Skill = () => {
  return (
    <div className="pt-12">
      <Header header_txt="Skills/Experties" />
      <div className="skill px-4">
        <div className="skill_parent">
          <div className="skill_parent_center ">
            <div className="skill_center_child">
              <div className="skill_center_childs">
                <h4 className="skill_text_color" style={{ color: "#ffd15c" }}>
                  Fontend
                </h4>
                <ul>
                  {FRONTEND_SKILLS.map((Element) => {
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
              <div className="skill_center_childs mt-4">
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
            <div className="skill_center_child flex flex-col gap-5">
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
              <div className="skill_center_childs">
                <h4 className="skill_text_color" style={{ color: "#ff4c60" }}>
                  Design
                </h4>
                <ul>
                  {Design_SKILLS.map((element) => {
                    return <li>{element}</li>;
                  })}
                </ul>
              </div>
              <div className="skill_center_childs">
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
        {/* Achievement */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 py-16 xl:py-36">
          {PROFESSIONAL_DETAILS.map((item) => (
            <div key={item.title} className="flex items-baseline gap-6">
              <span style={{ color: item.color }}>{item.icon}</span>
              <div className="">
                <p className="font-bold text-3xl">{item.value}</p>
                <p className="text-lg text-[#656161]">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;

const FRONTEND_SKILLS = [
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

const MANAGEMENT_SKILLS = ["JIRA | Clickup | Monday", "Trello | Teams | Slack", "Azure Devops"];
const Design_SKILLS = ["Figma | Adobe Xd", "Photoshop"];

const CICD_SKILLS = ["AWS | Github Actions", "Netlify", "Firebase Hosting"];

const PROFESSIONAL_DETAILS = [
  {
    title: "Projects Completed",
    value: "25",
    icon: <LocalFireDepartmentOutlinedIcon fontSize="large" />,
    color: "#f79500",
  },
  {
    title: "Cup of coffee",
    value: "1217",
    icon: <CoffeeIcon fontSize="large" />,
    color: "#c18244",
  },
  {
    title: "Satisfied Client",
    value: "10",
    icon: <PeopleAltIcon fontSize="large" />,
    color: "#6c6ce5",
  },
  {
    title: "Commits Pushed",
    value: "1335",
    icon: <BadgeIcon fontSize="large" />,
    color: "#ff4c60",
  },
];
