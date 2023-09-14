import React from "react";
import "./Contact.css";
import Header from "../Header/Index";
import Button from "../Button/Index";
const Contact = () => {
  return (
    <div className="contact">
      <Header header_txt="Get in Touch" />
      <div className=" contact_wrap">
        <div className="row">
          <div className="col-md-4 ">
            <div className="contact_info">
              <h3 style={{ color: "#454360" }}>Let's talk about everything!</h3>
              <span>
                Don't like forms? Send me an{" "}
                <a href="#" className="send_email">
                  email
                </a>
                . 👋
              </span>
            </div>
          </div>
          <div className="col-md-8 ">
            <div className="contact_form">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Email address"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="1"
                        name="Message"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>

                  <div className="btn-container col-md-12">
                    <Button btn_text="Send Message" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
