import React from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./backButton.css";

export function BackButton({ onClick }) {
  return (
    <Button
      className="back-btn"
      shape="circle"
      icon={<ArrowLeftOutlined />}
      onClick={onClick}
    />
  );
}
