import React from "react";

const Wrapper = () => {
  const DataTransfer = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES? ",
      heading: "Get the Best For Your Business",
      desc: "When you want quality lawn care services, depend on family-owned and locally-operated RBE Lawn Care, LLC. With over 20 years of experience in lawn care, snow removal, landscape maintenance and other services, you can rest assured knowing that exceptional services will be provided to you.",
    },
  ];
  return (
    <>
      <section className="branding wrapper">
        <div className="container">
          {DataTransfer.map((val) => {
            return (
              <div className="box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>
                <button className="primary-btn"> Contact Us </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;
