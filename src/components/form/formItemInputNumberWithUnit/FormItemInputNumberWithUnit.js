import React, { useState, useRef, useEffect } from "react";
import { findDOMNode } from "react-dom";
import { InputNumber } from "antd";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";
import { useTabletSize, useMobileSize } from "@hooks/window";
import "./formItemInputNumberWithUnit.css";

export function FormItemInputNumberWithUnit({
  form,
  label,
  name,
  rules,
  tooltipTitle,
  unit,
  onChange,
  disabled,
  oneLineInput,
}) {
  const isTablet = useTabletSize();
  const isMobile = useMobileSize();
  const mainColor = getColor("--main-color");
  const inputRef = useRef();
  const inputUnitRef = useRef();
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
    changeColorElementTo(focusColor);
  };

  const onBlur = () => {
    const blurColor = mainColor;
    setColor(blurColor);
    changeColorElementTo(blurColor);
  };

  const changeColorElementTo = (color) => {
    const element = findDOMNode(inputRef.current);
    const unitElement = findDOMNode(inputUnitRef.current);
    element.style.borderColor = color;
    element.style.color = color;
    unitElement.style.color = color;
  };

  const onDefaultChange = (newValue) => {
    form.setFieldsValue({
      [name]: newValue,
    });
    if (onChange) {
      onChange();
    }
  };

  return (
    <FormItem
      {...((!oneLineInput || isMobile) && { label: label })}
      labelStyle={{ color: color }}
      name={name}
      rules={rules}
      tooltipTitle={tooltipTitle}
    >
      {oneLineInput && !isMobile && (
        <span ref={inputUnitRef} className="input-unit">
          {label}&nbsp;&nbsp;
        </span>
      )}
      <InputNumber
        ref={inputRef}
        className={
          oneLineInput && !isMobile
            ? "input-number-with-unit-phrase-trou"
            : "input-number-with-unit"
        }
        size={isTablet ? "large" : "middle"}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onDefaultChange}
        value={form.getFieldValue(name)}
        min={0}
        id={name}
        {...(disabled && { disabled: disabled })}
        inputMode="tel"
      />
      <span ref={inputUnitRef} className="input-unit">
        &nbsp;&nbsp;{unit}
      </span>
    </FormItem>
  );
}
