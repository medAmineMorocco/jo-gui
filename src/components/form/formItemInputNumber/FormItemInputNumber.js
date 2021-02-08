import React, { useState, useRef, useEffect } from "react";
import { findDOMNode } from "react-dom";
import { InputNumber } from "antd";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";
import { useTabletSize } from "@hooks/window";
import "./formItemInputNumber.css";

export function FormItemInputNumber({
  form,
  label,
  name,
  rules,
  tooltipTitle,
  disabled,
  onChange,
}) {
  const isTablet = useTabletSize();
  const mainColor = getColor("--main-color");
  const inputRef = useRef();
  const [color, setColor] = useState(mainColor);

  useEffect(() => {
    return () => {
      form.setFieldsValue({
        [name]: null,
      });
    };
  }, [form, name]);

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
      <InputNumber
        size={isTablet ? "large" : "middle"}
        ref={inputRef}
        onFocus={onFocus}
        onBlur={onBlur}
        min={0}
        {...(disabled && { disabled: disabled })}
        onChange={onChange}
        inputMode="tel"
      />
    </FormItem>
  );
}
