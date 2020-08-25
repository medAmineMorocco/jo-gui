import React from "react";
import "./footer.css";

export function Footer(props) {
  return (
    <div style={props.style} className="footer-container">
      {props.children}
    </div>
  );
}
