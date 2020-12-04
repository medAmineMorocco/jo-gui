import React from "react";
import { Divider } from "antd";
import "./titleWithHorizontalLine.css";

export function TitleWithHorizontalLine({ title }) {
  return (
    <Divider className="divider-section" orientation="left">
      <span className="title-section">{title}</span>
    </Divider>
  );
}
