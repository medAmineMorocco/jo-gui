import React from "react";
import { Row, Col } from 'antd';
import "./styledTitle.css";
import { useWindowSize } from "@hooks/window";

export function StyledTitle({ title1, title2, style }) {
    const isMobile = useWindowSize();
    return (
        <Row align="middle" justify="center">
        <h1 style={style} className="styled-title-container">
            <Col span={24}>{title1}</Col> 
            <Col span={24}>{title2}</Col>
        </h1>
        </Row>
    );
}
