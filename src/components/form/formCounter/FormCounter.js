import React, { useState, useEffect } from "react";
import { Tooltip } from "antd";
import {
  PlusCircleFilled,
  MinusCircleFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formCounter.css";

export function FormCounter({
  tooltipTitle,
  textCounter,
  iconCounter: IconCounter,
  form,
  name,
}) {
  const [counter, setCounter] = useState(0);

  const addCounter = () => {
    setCounter(counter + 1);
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
  }, [counter]);

  return (
    <>
      <FormItem name={name}>
        <div className="back-to-card">
          <div className="flex-container-text">
            <IconCounter className="large-text" />
            <span className="text-counter">{textCounter}</span>
            <Tooltip
              className="tooltip-icon-counter"
              title={tooltipTitle}
              placement="topRight"
            >
              <QuestionCircleFilled />
            </Tooltip>
          </div>
          <div className="flex-container-button">
            <MinusCircleFilled
              id="minus-counter"
              className="large-text"
              onClick={decreaseCounter}
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
    </>
  );
}
