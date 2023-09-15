import React from "react";
import "./About.css";
import Button from "../Button/Index.jsx";
import Header from "../Header/Index";
const About = () => {
  return (
    <div className="about">
      <div className="header">
        <Header header_txt="About Me" />
      </div>
      <section className="about_me">
        <div className="aboutme_data">
          <div className="aboutme_img">
            <img src="/img/profile-pic.png" alt="" />
          </div>
          <div className="about_cv">
            <div className="about_cv1">
              <span style={{ color: "#454360" }}>
                I am Arslan Shahab, Frontend-heavy FullStack developer from
                Lahore, Pakistan. I have rich experience in web site design and
                building and customization, also I am good at Mobile App
                Development.
              </span>
              <Button btn_text="Download CV" />
            </div>
            <div className="about_cv2">
              <div className="progress">
                <h6 className="progress_heading">Web App Development</h6>
                <div className="progress_wraper">
                  <span>85%</span>
                  <div className="progress_colr1">
                    <div className="progress_colr2 ani_color1"></div>
                  </div>
                </div>
                <div className="progress_wrap"></div>
              </div>
              <div className="progress">
                <h6 className="progress_heading">Mobile App Development</h6>
                <div className="progress_wraper">
                  <span>95%</span>
                  <div className="progress_colr1 ">
                    <div
                      className="progress_colr2 ani_color2 "
                      style={{ width: "95%", backgroundColor: "#FF4C60" }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="progress">
                <h6 className="progress_heading">Backend Development</h6>
                <div className="progress_wraper">
                  <span>70%</span>
                  <div className="progress_colr1">
                    <div
                      className="progress_colr2 ani_color3"
                      style={{ width: "70%", backgroundColor: "#6C6CE5" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
