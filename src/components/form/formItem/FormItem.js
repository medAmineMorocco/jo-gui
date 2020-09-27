import React from "react";
import { Form, Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import "./formItem.css";

export function FormItem(props) {
  const {
    className,
    label,
    labelStyle = {},
    name,
    tooltipTitle,
    rules,
    initialValue,
  } = props;

  return (
    <Form.Item
      {...(initialValue && { initialValue: initialValue })}
      className={className}
      label={
        <span style={labelStyle}>
          {label}
          {tooltipTitle && (
            <Tooltip
              className="tooltip-icon"
              title={tooltipTitle}
              color="white"
              placement="topRight"
              overlayClassName="tooltip-overlay"
            >
              <QuestionCircleFilled />
            </Tooltip>
          )}
        </span>
      }
      name={name}
      rules={rules}
    >
      {props.children}
    </Form.Item>
  );
}
