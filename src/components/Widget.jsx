import React from "react";

function Widget({ img, title }) {
  return (
    <div className="widget__main">
      <a href="/">
        <img src={img} alt="widget__thumb" className="widget__image" />
      </a>
      <p className="widget__title">{title}</p>
    </div>
  );
}

export default Widget;
