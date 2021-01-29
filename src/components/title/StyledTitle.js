import React from "react";
import { Row, Col } from "antd";
import { useTabletOrMobileSize } from "@hooks/window";
import "./styledTitle.css";

export function StyledTitle({ className, title1, title2, style, color }) {
  const isMobileOrTablet = useTabletOrMobileSize();

  return (
    <Row justify="center" align="middle">
      <h1
        style={isMobileOrTablet ? {} : style}
        className={`${className} styled-title-container ${color}`}
      >
        <Col span={24}>{title1}</Col>
        <Col span={24}>{title2}</Col>
      </h1>
    </Row>
  );
}
