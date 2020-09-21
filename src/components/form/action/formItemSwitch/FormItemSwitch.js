import React, { useEffect } from "react";
import { Switch } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemSwitch.css";

export function FormItemSwitch({ form, name, switchValue, setSwitchValue }) {
  useEffect(() => {
    form.setFieldsValue({
      [name]: switchValue,
    });
  }, [form, name, switchValue]);

  const onChange = (checked) => {
    setSwitchValue(checked);
  };

  return (
    <FormItem className="switch-action" name={name}>
      <Switch
        id="switch-selector"
        aria-label="action"
        defaultChecked={switchValue}
        onChange={onChange}
      />
    </FormItem>
  );
}
