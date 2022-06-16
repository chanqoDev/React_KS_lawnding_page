import React from "react";
import ServicesData from "./ServicesData";

const Service = () => {
  return (
    <>
      <section className="services topMargin">
        <div className="container">
          <div className="heading">
            <h3> MY SERVICES </h3>
            <h1>Professional Lawncare and plant aggrigation</h1>
          </div>

          <div className="contain grid topMargin">
            {ServicesData.map((service) => {
              return (
                <div className="box">
                  <div className="img">
                    <img
                      src={service.cover}
                      alt=""
                      width="auto"
                      height="auto"
                    />
                  </div>
                  <div className="text">
                    <h2>{service.title}</h2>
                    <p> {service.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
