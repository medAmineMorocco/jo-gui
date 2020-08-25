import React, { useState, useRef } from "react";
import { findDOMNode } from "react-dom";
import { InputNumber } from "antd";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemInputNumber.css";

export function FormItemInputNumber({ label, name, rules, tooltipTitle }) {
  const mainColor = getColor("--main-color");
  const inputRef = useRef();
  const [color, setColor] = useState(mainColor);

  const onFocus = () => {
    const focusColor = "white";
    setColor(focusColor);
    changeColorElementTo(inputRef, focusColor);
  };

  const onBlur = () => {
    const blurColor = mainColor;
    setColor(blurColor);
    changeColorElementTo(inputRef, blurColor);
  };

  const changeColorElementTo = (ref, color) => {
    const element = findDOMNode(ref.current);
    element.style.borderColor = color;
    element.style.color = color;
  };

  return (
    <FormItem
      label={label}
      labelStyle={{ color: color }}
      name={name}
      rules={rules}
      tooltipTitle={tooltipTitle}
    >
      <InputNumber ref={inputRef} onFocus={onFocus} onBlur={onBlur} />
    </FormItem>
  );
}
