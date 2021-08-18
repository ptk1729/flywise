import React from "react";
import whiteHat from "../assets/whiteHat.png";
import blackHat from "../assets/blackHat.png";

function SelectionBoxes({ c, handleClick }) {
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
      <img
        style={{
          marginTop: "35px",
          marginLeft: "80px",
          width: "74.92px",
          height: "63px",
        }}
        src={c.show ? whiteHat : blackHat}
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
