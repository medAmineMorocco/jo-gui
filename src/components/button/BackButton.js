import React, { useRef } from "react";
import { Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { getColor } from "@utils/cssUtil";
import "./backButton.css";

export function BackButton({ onClick }) {
  const backButtonRef = useRef();
  const backColor = getColor("--bg-color-shade-4");

  const onFocus = () => {
    backButtonRef.current.style.backgroundColor = "white";
    backButtonRef.current.style.color = "black";
  };

  const onBlur = () => {
    backButtonRef.current.style.backgroundColor = backColor;
    backButtonRef.current.style.color = "black";
  };

  const onDefaultClick = () => {
    backButtonRef.current.blur();
    onClick();
  };

  return (
    <Button
      ref={backButtonRef}
      className="back-btn"
      shape="circle"
      icon={<ArrowLeftOutlined />}
      onClick={onDefaultClick}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  );
}
