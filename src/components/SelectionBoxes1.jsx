import React from "react";
import codeBoxSelected from "../assets/codeBoxSelected.png";
import codeBoxNotSelected from "../assets/codeBoxNotSelected.png";
import star from "../assets/star.png";

function SelectionBoxes({ c, handleClick, active = false }) {
  const textColor = c.show ? "white" : "black";
  return (
    <div
      className={
        c.show
          ? "countryBoxSelected countryBox"
          : "countryBoxNotSelected countryBox"
      }
      onClick={() => handleClick(c.name)}
    >
      {active && (
        <img
          src={star}
          alt="Star"
          style={{
            position: "absolute",
            marginLeft: "140px",
            marginTop: "20px",
          }}
        />
      )}
      <img
        style={{
          marginTop: "35px",
          marginLeft: "80px",
          width: "74.92px",
          height: "63px",
        }}
        src={c.show ? codeBoxSelected : codeBoxNotSelected}
        alt={`Country Name = ${c.name}`}
      />
      <div
        className="countryText"
        style={{
          color: textColor,
          fontSize: "20px",
          lineHeight: "26px",
          marginTop: "30px",
          width: "236px",
          height: "52px",
        }}
      >
        {c.name}
      </div>
    </div>
  );
}

export default SelectionBoxes;
