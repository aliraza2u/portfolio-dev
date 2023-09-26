// import React from "react";
import "./Contact.css";
import Header from "../Header/Index";
import Button from "../Button/Index";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jc0yfdm', 'template_8yfpjnk', form.current, 'AbtlFa0btXLYEzqh_')
    // emailjs.sendForm('service_l4rgqd6', ' template_t3yf2st', form.current, 'AbtlFa0btXLYEzqh_')
      .then((result) => {
          console.log(result.text);
          console.log('sent massage')
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <div className="contact lg:px-4 2xl:px-0" id="contact">
      <Header header_txt="Get in Touch" />
      <div className=" contact_wrap">
        <div className="row">
          <div className="col-md-4 ">
            <div className="contact_info">
              <h3 style={{ color: "#454360" }}>Let's talk about everything!</h3>
              <span>
                Don't like forms? Send me an{" "}
                <a href="/" className="send_email">
                  email
                </a>
                . 👋
              </span>
            </div>
          </div>
          <div className="col-md-8 ">
            <div className="contact_form">
              <form ref={form} onSubmit={sendEmail}>
                <div className="row">
                  <div className="col-md-6">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Your name"
                        name="user_name"
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
                        name="user_email"
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
                        name="user_subject"
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
                    <Button name="Send Message" />
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
