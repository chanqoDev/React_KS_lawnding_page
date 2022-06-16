import React from "react";

const Skills = () => {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{ opacity: 1, width: `${done}%` }}
        >
          <h4>{title}</h4>
          <h4>{done}% </h4>
        </div>
      </div>
    );
  };
  const data = [
    {
      title: "Everdy day is a new CHallenge",
      para: "This is my random text of randomness yas yas yas oweinfaspodifapo fpoais djfopi fepwoinfausgno iblsdbn oigneb rpoi erpo ijeroeirjoijoevos dfvsdflk alksmd flaksdfalksdfasdf",
      para1:
        " sfsafdasdfweewew asdlf;akjsl;b bfkj bklx clkxcxlkj firgiosegro iuhdgroiusdfnsdifungosid fgu",
    },
  ];
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3>WHY CHOOSE US??</h3>
            <h1> Here are some of our services skills </h1>
          </div>
          <div className="content flex">
            <div className="left topMargin">
              <Progress done="70" title="Gardening" />
              <Progress done="80" title="Cutting Trees and shredding" />
              <Progress done="99" title="Lawn and care" />
              <Progress done="60" title="Powerwashing" />
            </div>
            <div className="right mtop">
              {data.map((val) => {
                return (
                  <>
                    {" "}
                    <h1>{val.title}</h1>
                    <h1>{val.para}</h1>
                    <h1>{val.para1}</h1>
                    <button className="primary-btn">Hire Us</button>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
