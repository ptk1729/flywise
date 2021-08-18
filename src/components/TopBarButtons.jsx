import React from "react";

function TopBarButtons({ text, handleClick }) {
  return (
    <button className="topBarText" onClick={handleClick}>
      {text}
    </button>
  );
}

export default TopBarButtons;
