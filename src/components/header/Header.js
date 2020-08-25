import React from "react";
import "./header.css";

export function Header(props) {
  return (
    <div className="header-container">
      <img
        className="logo"
        src="/images/paris-2024.png"
        alt="paris-2024"
        width="260px"
        height="132px"
      />
      {props.children}
    </div>
  );
}
