import React, { useState, useEffect } from "react";
import {
  PlusCircleFilled,
  MinusCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { FormItem } from "@components/form/formItem/FormItem";
import { getColor } from "@utils/cssUtil";
import { Tooltip } from "antd";
import "./formCounter.css";

export function FormCounter({
  tooltipTitle,
  textCounter,
  iconCounter: IconCounter,
  form,
  name,
  max,
  value,
  setValue,
}) {
  const mainColor = getColor("--main-color");
  const shade = getColor("--bg-color-shade-3");
  const [color, setColor] = useState(mainColor);

  const onChange = (value) => {
    setValue(value);
  };

  useEffect(() => {
    form.setFieldsValue({
      [name]: value,
    });
  }, [form, name, value]);

  const onFocus = () => {
    const focusColor = "white";
    setColor(focusColor);
  };

  const onBlur = () => {
    const blurColor = mainColor;
    setColor(blurColor);
  };

  const addCounter = () => {
    if (max && value < max) {
      setValue(value + 1);
      onChange(value + 1);
    }
    if (!max) {
      setValue(value + 1);
      onChange(value + 1);
    }
  };

  const decreaseCounter = () => {
    if (value > 0) {
      setValue(value - 1);
      onChange(value - 1);
    }
  };

  return (
    <FormItem className="counter-form-item" name={name}>
      <div
        className="back-to-card"
        style={{ color: color }}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <div className="flex-container-text">
          {IconCounter && (
            <div className="icon-counter">
              <IconCounter fill={color} />
            </div>
          )}
          <span
            className={IconCounter ? "text-counter" : "full-width-text-counter"}
          >
            {textCounter}
          </span>
          {tooltipTitle && (
            <Tooltip
              className="tooltip-icon-counter"
              title={tooltipTitle}
              placement="topRight"
            >
              <QuestionCircleFilled />
            </Tooltip>
          )}
        </div>
        <div className="flex-container-button">
          <MinusCircleFilled
            id="minus-counter"
            className="large-text"
            onClick={decreaseCounter}
            style={value === 0 ? { color: shade } : { color: color }}
            aria-label="Button moins"
          />
          <span id="result-counter" className="large-text">
            {value}
          </span>
          <PlusCircleFilled
            id="plus-counter"
            className="large-text"
            onClick={addCounter}
            aria-label="Button plus"
          />
        </div>
      </div>
    </FormItem>
  );
}
