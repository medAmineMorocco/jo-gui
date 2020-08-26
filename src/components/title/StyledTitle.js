import React from "react";
import "./styledTitle.css";
import { Row, Col } from "antd";
import { useWindowSize } from "@hooks/window";

export function StyledTitle({ title1, title2, style }) {
  const isMobile = useWindowSize();
  return (
    <Row justify="center" align="middle">
      <h1 style={!isMobile ? style : {}} className="styled-title-container">
        <Col span={24}>{title1}</Col>
        <Col span={24}>{title2}</Col>
      </h1>
    </Row>
  );
}
