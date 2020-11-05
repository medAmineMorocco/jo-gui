import React, { useState, useEffect } from "react";
import { Tooltip } from "antd";
import {
  PlusCircleFilled,
  MinusCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { FormItem } from "@components/form/formItem/FormItem";
import { getColor } from "@utils/cssUtil";
import "./formCounter.css";

export function FormCounter({
  tooltipTitle,
  textCounter,
  iconCounter: IconCounter,
  form,
  name,
  value,
  max,
  onChange,
}) {
  const [counter, setCounter] = useState(value);
  const mainColor = getColor("--main-color");
  const shade = getColor("--bg-color-shade-3");
  const [color, setColor] = useState(mainColor);

  useEffect(() => {
    if (onChange) {
      onChange(counter);
    }
  }, [counter, onChange]);

  useEffect(() => {
    setCounter(value);
  }, [value]);

  const onFocus = () => {
    const focusColor = "white";
    setColor(focusColor);
  };

  const onBlur = () => {
    const blurColor = mainColor;
    setColor(blurColor);
  };

  const addCounter = () => {
    if (max && counter < max) {
      setCounter(counter + 1);
    }
    if (!max) {
      setCounter(counter + 1);
    }
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      [name]: counter,
    });
  }, [form, name, counter]);

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
            style={counter === 0 ? { color: shade } : { color: color }}
          />
          <span id="result-counter" className="large-text">
            {counter}
          </span>
          <PlusCircleFilled
            id="plus-counter"
            className="large-text"
            onClick={addCounter}
          />
        </div>
      </div>
    </FormItem>
  );
}
