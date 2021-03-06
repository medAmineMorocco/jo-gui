import React, { useEffect } from "react";
import { Checkbox, Form, Radio } from "antd";
import "./formItemRadioButtons.css";

export function FormItemRadioButtons({
  form,
  label,
  name,
  options,
  isMultipleSelection,
  onChange,
}) {
  useEffect(() => {
    return () => {
      form.setFieldsValue({
        [name]: null,
      });
    };
  }, [form, name]);

  const onChangeCheckbox = (checkedValues) => {
    onChange(checkedValues);
  };

  const onChangeRadio = (event) => {
    onChange(event.target.value);
  };

  return (
    <Form.Item
      name={name}
      label={label}
      rules={[
        { required: true, message: "⚠ Veuillez sélectionner une option" },
      ]}
      className="form-item-radio-buttons"
    >
      {isMultipleSelection ? (
        <Checkbox.Group options={options} onChange={onChangeCheckbox} />
      ) : (
        <Radio.Group onChange={onChangeRadio}>
          {options.map(({ label, value }, index) => (
            <Radio.Button key={index} value={value}>
              {label}
            </Radio.Button>
          ))}
        </Radio.Group>
      )}
    </Form.Item>
  );
}
