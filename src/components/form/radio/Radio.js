import React from "react";
import { Radio as RadioAntd } from "antd";
import "./radio.css";

export function Radio(props) {
  return <RadioAntd {...props}>{props.children}</RadioAntd>;
}
