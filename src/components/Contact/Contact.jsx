import "./Contact.scss";
import { useRef, useState } from "react";
import SectionTitle from "../UI/SectionTitle";

import emailLogo from "../../assets/logos/email.png";
import mobile from "../../assets/logos/mobile.png";

import { motion } from "framer-motion";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <SectionTitle>Contact me</SectionTitle>
      <div className="contact">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={emailLogo} alt="email" />
            <a href="mailto:abdelrhman.contact@gmail.com">
              abdelrhman.contact@gmail.com
            </a>
          </div>
          <div className="app__footer-card">
            <img src={mobile} alt="mobile" />
            <a href="tel:+20 1003685977">01003685977</a>
          </div>
        </div>

        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              onChange={handleChangeInput}
              type="text"
              placeholder="Your Name"
              required={true}
              name="name"
              value={name}
            />
          </div>
          <div className="app__flex">
            <input
              value={email}
              onChange={handleChangeInput}
              type="email"
              placeholder="Your email"
              required={true}
              name="email"
            />
          </div>
          <div>
            <textarea
              onChange={handleChangeInput}
              value={message}
              placeholder="Your Message"
              name="message"
              required={true}
            ></textarea>
          </div>
          <button type="submit" onClick={submitHandler}>
            Send Message
          </button>
        </div>
      </div>
    </>
  );
};

export default Contact;
