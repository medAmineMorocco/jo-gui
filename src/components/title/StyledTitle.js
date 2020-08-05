import React from "react";
import "./styledTitle.css";

export function StyledTitle({ title1, title2, style }) {
    return (
        <h1 style={style} className="styled-title-container">
            {title1} <br /> {title2}
        </h1>
    );
}
