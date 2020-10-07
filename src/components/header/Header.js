import React from "react";
import "./header.css";

export function Header(props) {
  return (
    <div className={`${props.className} header-container`}>
      {props.children}
    </div>
  );
}
