import React from "react";
import "./Client.css";
import Index from "../Header/Index.jsx";
const Client = () => {
  return (
    <div className="client">
      <Index header_txt="Clients & Reviews" />
      <div className="client_parent">
        <div className="client_center_parent">
          <div className="slider_parent2">
            <div
              id="carouselExampleIndicators"
              className="carousel slide "
              data-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  {/* <img
                    src="img/service-1.svg"
                    className="d-block w-25"
                    alt="..."
                  /> */}
                  {SLIDER_DATA.map((element) => {
                    return (
                      <div className="text-center mx-auto p-4">
                        <img
                          src={element.img}
                          alt=""
                          style={{ height: "100px", width: "90px" }}
                        />
                        <h3 className="title mt-3 mb-0">{element.title}</h3>
                        <span className="subtitle mt-1">
                          {element.subtitle}
                        </span>
                        <div className="reviews mt-4">
                          <span>{element.review}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="carousel-item">
                  {/* <img
                    src="img/service-2.svg"
                    className="d-block w-25"
                    alt="..."
                  /> */}
                  {SLIDER_DATA2.map((element) => {
                    return (
                      <div className="text-center mx-auto p-4">
                        <img
                          src={element.img}
                          alt=""
                          style={{ height: "100px", width: "90px" }}
                        />
                        <h3 className="title mt-3 mb-0">{element.title}</h3>
                        <span className="subtitle mt-1">
                          {element.subtitle}
                        </span>
                        <div className="reviews mt-4">
                          <span>{element.review}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="carousel-item">
                  {/* <img
                    src="img/service-3.svg"
                    className="d-block w-25"
                    alt="..."
                  /> */}
                  {SLIDER_DATA3.map((element) => {
                    return (
                      <div className="text-center mx-auto p-4">
                        <img
                          src={element.img}
                          alt=""
                          style={{ height: "100px", width: "90px" }}
                        />
                        <h3 className="title mt-3 mb-0">{element.title}</h3>
                        <span className="subtitle mt-1">
                          {element.subtitle}
                        </span>
                        <div className="reviews mt-4">
                          <span>{element.review}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <ol className="carousel-indicators ">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active rounded"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              className="rounded"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
              className="rounded"
            ></li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Client;
const SLIDER_DATA = [
  {
    img: "img/avatar-1.svg",
    title: "Steve Gauscho",
    subtitle: "CEO @ Viloa Softwares",
    review:
      "Arslan did a fantastic job across multiple projects. He is a great communicator, highly intelligent, and can understand complex requirements. With one project in particular that had some difficult logic, he dug right in and didn't stop until he had the solution figured out, which shows his resilience. I would definitely hire him again and I hope we get to work together again soon!",
  },
];
const SLIDER_DATA2 = [
  {
    img: "img/avatar-2.svg",
    title: "Ray Parker",
    subtitle: "Technical Project Manager",
    review:
      "Arslan is a very focused, enthusiastic, and personable individual with great abilities to deliver on technical solutions. He has great insight in planning forward and can always take control of a situation. His strengths of proactively offering solutions and ideas, make him a valuable asset to any situation or company. He owned a large part of our administration portal, and helped with a lot of changes and development efforts that we coordinated across the team.",
  },
];
const SLIDER_DATA3 = [
  {
    img: "img/avatar-3.svg",
    title: "Murad Malik",
    subtitle: "CTO @ KuanteX",
    review:
      "Arslan was wonderful to work with. Very attentive and had a lot of great ideas for the project we were working on. One of the things I liked the most about Arslan is his willingness to learn and work on things a little out of his zone. Intelligent, hard-working guy. I would definitely recommend.",
  },
];
