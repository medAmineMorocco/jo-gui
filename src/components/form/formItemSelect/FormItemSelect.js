import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemSelect.css";
import { findDOMNode } from "react-dom";

export function FormItemSelect({
  form,
  label,
  name,
  className,
  tooltipTitle,
  options,
  onChange,
}) {
  const mainColor = getColor("--main-color");
  const [color, setColor] = useState(mainColor);
  let selectRef;

  useEffect(() => {
    form.setFieldsValue({
      [name]: options[0].value,
    });
  }, []);

  const onFocus = () => {
    const focusColor = "white";
    setColor(focusColor);
    changeElementColorTo(focusColor);
  };

  const onBlur = () => {
    setColor(mainColor);
    changeElementColorTo(mainColor);
  };

  const changeElementColorTo = (color) => {
    const element = findDOMNode(selectRef.selectRef.current).querySelector(
      ".ant-select-selector"
    );
    const textElement = element.parentNode.querySelector(
      ".ant-select-selection-item"
    );
    const arrowElement = element.parentNode.querySelector(".ant-select-arrow");
    element.style.borderColor = color;
    textElement.style.color = color;
    textElement.style.opacity = 1;
    arrowElement.style.color = color;
  };

  const onSelect = () => {
    setColor(mainColor);
    selectRef.blur();
  };

  return (
    <FormItem
      className={className}
      label={label}
      labelStyle={{ color: color }}
      name={name}
      tooltipTitle={tooltipTitle}
    >
      <Select
        ref={(select) => (selectRef = select)}
        defaultValue={options[0].value}
        dropdownClassName="select"
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelect}
        onChange={onChange}
      >
        {options.map(({ text, value }, key) => (
          <Select.Option key={key} className="select-option" value={value}>
            {text}
          </Select.Option>
        ))}
      </Select>
    </FormItem>
  );
}
