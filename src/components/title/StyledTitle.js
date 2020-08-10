import React from "react";
import "./styledTitle.css";
import { useWindowSize } from "@hooks/window";

export function StyledTitle({ title1, title2, style }) {
    const isMobile = useWindowSize();
    return (
        <p style={!isMobile ? style : {}} className="styled-title-container">
            {title1} <br /> {title2}
        </p>
    );
}
