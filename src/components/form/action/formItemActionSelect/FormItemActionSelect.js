import React, { useEffect } from "react";
import { Select } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemActionSelect.css";

export function FormItemActionSelect({ form, name, options, onChange }) {
  const { Option } = Select;

  useEffect(() => {
    form.setFieldsValue({
      [name]: options[0].value,
    });
  }, [form, name, options]);

  return (
    <FormItem className="select-action" name={name}>
      <Select
        id={name}
        aria-label="select-action"
        aria-expanded
        style={{ width: 55 }}
        dropdownClassName="select-action-dropdown"
        defaultValue={options[0].value}
        onChange={onChange}
      >
        {options.map(({ text, value }, key) => (
          <Option key={key} value={value}>
            {text}
          </Option>
        ))}
      </Select>
    </FormItem>
  );
}
