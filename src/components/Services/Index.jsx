import React from "react";
import Header from "../Header/Index";
import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      {/* <h4 className="service_heading">Services</h4> */}
      <Header header_txt ="Services" />
      <div className="row sevices_parent1">
        <div className="services_parent1_center">
          {SERVICES_DATA.map((element) => {
            return (
              <div className="col-md-4" key={element.heading_text}>
                <div
                  className="services_parent1_center_childs"
                  style={{
                    background: `${element.color}`,
                    color: `${element.text_color}`,
                    boxShadow: " rgba(108, 108, 229, 0.5) 0px 5px 20px 0px",
                  }}
                >
                  <div className="parent1_center_childs_data">
                    <img src={element.img} alt="" />
                    <h3>{element.heading_text}</h3>
                    <span className="parent_paragraph_wrap">{element.paragrapgh_text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div class="text_center_wrap ">
          <span>
            Looking for a custom job? <a className="click">Click here</a> to
            contact me! 👋
          </span>
        </div>
      </div>
    </div>
  );
};

export default Services;
const SERVICES_DATA = [
  {
    img: "img/service-1.svg",
    heading_text: "Frontend Development",
    paragrapgh_text:
      "Get modern-day front-end development of your website with an improvised performance of the web application",
    color: "#6c6ce5",
    text_color: "#fff",
  },
  {
    img: "img/service-2.svg",
    heading_text: "Mobile App Development",
    paragrapgh_text:
      "Get buttery smooth UIs for Android and IOS with a neat code for your application along with the latest features.",
    color: "#f9d74c",
    text_color: "#454360",
  },
  {
    img: "img/service-3.svg",
    heading_text: "Backend Development",
    paragrapgh_text:
      "Enjoy the deployments to maintain the applications along with data management between servers and users.",
    color: "#f97b8b",
    text_color: "#fff",
  },
];
