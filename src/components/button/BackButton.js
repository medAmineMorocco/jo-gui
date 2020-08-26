import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import "./backButton.css";

export function BackButton() {
  const history = useHistory();

  const onClick = () => {
    history.push("/");
  };

  return (
    <Button
      className="back-btn"
      shape="circle"
      icon={<ArrowLeftOutlined />}
      onClick={onClick}
    />
  );
}
