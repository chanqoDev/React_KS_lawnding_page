import React from "react";

const WrapperOne = () => {
  const data = [
    {
      num: "17",
      text: "AWARDS WINNING LANDSCAPE",
    },
    {
      num: "99%",
      text: "SATISFIED CLIENTS",
    },
    {
      num: "765",
      text: "CREATIVE LAWN PROJECTS",
    },
    {
      num: "54,380",
      text: "MOWED LAWNS",
    },
  ];
  return (
    <>
      <section className="branding wrapperOne">
        <div className="container grid1">
          {data.map((val) => {
            return (
              <>
                <div className="box">
                  <h1>{val.num}</h1>
                  <p>{val.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WrapperOne;
