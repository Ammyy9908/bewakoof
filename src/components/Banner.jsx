import React from "react";

function Banner({ img }) {
  return (
    <a href="/" className="banner__image">
      <img src={img} alt="banner__thumb" />
    </a>
  );
}

export default Banner;
