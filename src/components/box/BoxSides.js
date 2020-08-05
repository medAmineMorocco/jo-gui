import React from "react";
import "./boxSides.css";

export function BoxSides({ left, right }) {
    return (
        <div className="box-sides-container">
            <div className="box-side">{left}</div>
            <div className="box-side">{right}</div>
        </div>
    );
}
