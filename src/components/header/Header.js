import React from "react";
import "./header.css";

export function Header({ className, children, height = "25vh" }) {
  return (
    <div className={`${className} header-container`} style={{ height }}>
      <div className="size-picture">{children}</div>
    </div>
  );
}
