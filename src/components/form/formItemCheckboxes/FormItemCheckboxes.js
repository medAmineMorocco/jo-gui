import React, { useEffect } from "react";
import { Form, Checkbox as CheckboxAntd } from "antd";
import { Checkbox } from "@components/form/checkbox/Checkbox";
import "./formItemCheckboxes.css";

export function FormItemCheckboxes({ form, name, text, options }) {
  useEffect(() => {
    return () => {
      form.setFieldsValue({
        [name]: null,
      });
    };
  }, [form, name]);

  return (
    <div style={{ display: "flex" }}>
      <div className="checkboxes-container">
        <Form.Item
          name={name}
          label={text}
          rules={[
            { required: true, message: "⚠ Veuillez sélectionner une option" },
          ]}
          className="form-item-checkboxes"
        >
          <CheckboxAntd.Group>
            {options.map(({ label, value, onChange }, index) => (
              <div key={index} className="form-item-checkboxes-item-container">
                <span className="form-item-checkboxes-label">{label}</span>
                <Checkbox
                  value={value}
                  onChange={(checked) => onChange(checked)}
                />
              </div>
            ))}
          </CheckboxAntd.Group>
        </Form.Item>
      </div>
    </div>
  );
}
