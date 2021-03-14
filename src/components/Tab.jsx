import React from "react";

function Tab() {
  return (
    <div className="tab">
      <div className="tab_wrapper">
        <a href="/" className="active_tab">
          Men
        </a>
        <a href="/">Women</a>
        <a href="/">Accessories</a>
      </div>
    </div>
  );
}

export default Tab;
