import React from "react";
import { Button as ButtonAntd } from "antd";
import "./button.css";

export function Button(props) {
  return (
    <ButtonAntd className="custom-btn" shape="round" {...props}>
      {props.text && props.text} {props.icon && props.icon()}
    </ButtonAntd>
  );
}
