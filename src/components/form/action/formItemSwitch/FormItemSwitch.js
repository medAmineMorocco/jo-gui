import React from "react";
import { Switch } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemSwitch.css";

export function FormItemSwitch({ name, switchValue, setSwitchValue }) {
  const onChange = (checked) => {
    setSwitchValue(checked);
  };

  return (
    <FormItem className="switch-action" name={name}>
      <Switch
        id="switch-selector"
        aria-label="action"
        onChange={onChange}
        checked={switchValue}
      />
    </FormItem>
  );
}
