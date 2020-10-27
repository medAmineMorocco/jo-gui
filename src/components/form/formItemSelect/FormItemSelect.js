import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";
import { findDOMNode } from "react-dom";
import { useTabletSize, useMobileSize } from "@hooks/window";
import "./formItemSelect.css";

export function FormItemSelect({
  label,
  name,
  className,
  tooltipTitle,
  options,
  onChange,
  disabled,
  suffix,
}) {
  const isTablet = useTabletSize();
  const isMobile = useMobileSize();
  const mainColor = getColor("--main-color");
  const [color, setColor] = useState(mainColor);
  let selectRef;

  useEffect(() => {
    if (isMobile && suffix) {
      setTimeout(() => {
        const element = Array.from(
          document.querySelectorAll(".ant-select-arrow")
        )
          .find((el) => el.innerText === suffix)
          .parentNode.querySelector(".ant-select-selection-item");
        element.style.textAlign = "left";
      });
    }
  }, [isMobile, suffix]);

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
      initialValue={options[0].value}
    >
      <Select
        size={isTablet ? "large" : "middle"}
        ref={(select) => (selectRef = select)}
        dropdownClassName="select"
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelect}
        onChange={onChange}
        disabled={disabled}
        {...(suffix && { suffixIcon: suffix })}
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
