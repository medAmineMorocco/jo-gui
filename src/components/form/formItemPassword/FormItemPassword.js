import React, { useRef, useState } from "react";
import { findDOMNode } from "react-dom";
import { Input } from "antd";
import { getColor } from "@utils/cssUtil";
import { useTabletSize } from "@hooks/window";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemPassword.css";

export function FormItemPassword({ label, name, rules }) {
  const isTablet = useTabletSize();
  const mainColor = getColor("--main-color");
  const inputPasswordRef = useRef();
  const [labelStyle, setLabelStyle] = useState({ color: mainColor });

  const onFocus = () => {
    const focusColor = "white";
    setLabelStyle({ ...labelStyle, color: focusColor });
    changeColorElementTo(inputPasswordRef, focusColor);
  };

  const onBlur = () => {
    const blurColor = mainColor;
    setLabelStyle({ ...labelStyle, color: blurColor });
    changeColorElementTo(inputPasswordRef, blurColor);
  };

  const changeColorElementTo = (ref, color) => {
    const element = findDOMNode(ref.current);
    element.style.borderColor = color;
    element.style.color = color;
  };

  return (
    <FormItem label={label} labelStyle={labelStyle} name={name} rules={rules}>
      <Input.Password
        className="cojo-password-input"
        size={isTablet ? "large" : "middle"}
        ref={inputPasswordRef}
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </FormItem>
  );
}
