import React from "react";
import { social } from "../data";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-primary text-white min-h-[732px] section"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-primary font-extrabold mb-4">
          Contact us
        </h2>
        <p className="max-w-[540px] mx-auto px-6 lg:px-0 mb-[64px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh
          tristique ipsum.
        </p>
        {/* Form */}
        <form className="px-8 lg:px-0 max-w-[600px] mx-auto flex flex-col space-y-6 mb-[46px]">
          <input
            className="form-control"
            placeholder="Full Name"
            type="text"
          />
          <input
            className="form-control"
            placeholder="Email Address"
            type="email"
          />
          <textarea className="textarea" placeholder="Type Message" />
          <buttton className="btn bg-accent hover:bg-accent-hover transition-all">
            Send Message
          </buttton>
        </form>

        {/* Social Links */}
        <div className="flex items-center justify-between mx-auto max-w-[300px]">
          {social.map((item, index) => {
            return (
              <a href="#link" key={index}>
                <img src={item.icon} alt=""></img>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
