import React from "react";
import { Checkbox as CheckboxAntd } from "antd";
import "./checkbox.css";

export function Checkbox({ value, onChange }) {
  const onDefaultChange = (event) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  };

  return (
    <CheckboxAntd
      className="cojo-checkbox"
      onChange={onDefaultChange}
      value={value}
    />
  );
}
