import React from "react";
import "./boxSides.css";

export function BoxSides({ left, right, height }) {
  return (
    <div className="box-sides-container" style={{ height: height }}>
      <div className="box-side">{left}</div>
      <div className="box-side">{right}</div>
    </div>
  );
}
