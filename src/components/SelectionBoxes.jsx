import React from "react";

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
          marginTop: "25px",
          marginLeft: "35px",
        }}
        src={c.image}
        alt={`Country Name = ${c.name}`}
      />
      <div className="countryText" style={{ color: textColor }}>
        {c.name}
      </div>
    </div>
  );
}

export default SelectionBoxes;
