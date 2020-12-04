import React from "react";
import "./styledTitle.css";
import { Row, Col } from "antd";
import { useTabletOrMobileSize } from "@hooks/window";

export function StyledTitle({ className, title1, title2, style }) {
  const isMobileOrTablet = useTabletOrMobileSize();

  return (
    <Row justify="center" align="middle">
      <h1
        style={isMobileOrTablet ? {} : style}
        className={`${className} styled-title-container`}
      >
        <Col span={24}>{title1}</Col>
        <Col span={24}>{title2}</Col>
      </h1>
    </Row>
  );
}
