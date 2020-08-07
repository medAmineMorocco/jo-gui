import React from "react";
import { useWindowSize } from "@hooks/window";
import { BoxSides } from "@components/box/BoxSides";
import "./section.css";

export function Section({ title, paragraphs, style, imgStyle, imgPosition }) {
  const isMobile = useWindowSize();

  if (isMobile) {
    return <div>Mobile Mode</div>;
  } else {
    const renderedParagraphs = [];
    paragraphs.forEach((paragraph, index) => {
      renderedParagraphs.push(<p className="section-paragraph"  key={'section-parag-'+ index}>{paragraph}</p>);
    });
    let leftContent = (
      <div className="section-text-container" style={style}>
        <h1>{title}</h1>
        <div className="section-paragraphs-container">{renderedParagraphs}</div>
      </div>
    );

    let rightContent = <div className="section-img" style={imgStyle} />;
    if (imgPosition === "left") {
      const tmp = rightContent;
      rightContent = leftContent;
      leftContent = tmp;
    }

    return (
      <div className="section-container">
        <BoxSides left={leftContent} right={rightContent} height="150vh" />
      </div>
    );
  }
}
