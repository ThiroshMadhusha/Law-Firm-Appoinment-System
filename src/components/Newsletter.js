import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-accent pt-[54px] pb-[74px]">
      <div className="container mx-auto px-8 text-center">
        <h3 className="font-primary text-[48px] font-extrabold leading-[1.2] text-white mb-[12px]">
          Subscribe To Our News Letter.. !
        </h3>
        <p className="mb-[40px] text-white text-5m">
          Be First To Get The Latest NEWS About US.
        </p>
        <form className="max-w-[600px] mx-auto flex flex-col lg:flex-row">
          <input
            type="email"
            className="form-control mb-4"
            placeholder="Your Email Address"
          />
          <button className="btn bg-primary hover:bg-primary-hover lg:max-w-[150px] lg:ml-4">
            Join US
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
