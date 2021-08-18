import React from "react";
import tick from "../assets/tick.png";

function HomeCardText({ heading, listContent }) {
  return (
    <>
      <div className="homePageCards"></div>
      <div style={{ marginTop: "212px", position: "absolute" }}>
        <div className="cardHeadings" style={{ marginBottom: "25px" }}>
          {heading}
        </div>
        {listContent.map((index) => (
          <div
            key={index}
            style={{ color: "#0DB3FB" }}
            className="cardHeadings"
          >
            <img src={tick} alt="Tick" />
            {`    ${index}`}
          </div>
        ))}
      </div>
    </>
  );
}

export default HomeCardText;
