import React from "react";

const Wrapper = () => {
  const DataTransfer = [
    {
      title: "LOOKING FOR EXCLUSIVE SERVICES? ",
      heading: "Get the Best For Your Business",
      desc: "Lorem ipsum dolor sit amet, consectetur adipscing elit, se doaisdfoiasdfjpoaisjfpowienowienfoaisfpoiasndfpoaASLA'WERTQ'WE9",
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
