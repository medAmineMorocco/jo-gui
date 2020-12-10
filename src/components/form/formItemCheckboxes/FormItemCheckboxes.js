import React from "react";
import { Form, Checkbox } from "antd";
import "./formItemCheckboxes.css";

export function FormItemCheckboxes({ name, text, options }) {
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
          <Checkbox.Group>
            {options.map(({ label, value }, index) => (
              <div key={index} className="form-item-checkboxes-item-container">
                <span className="form-item-checkboxes-label">{label}</span>
                <Checkbox
                  className="form-item-checkbox"
                  value={value}
                  style={{ lineHeight: "32px" }}
                />
              </div>
            ))}
          </Checkbox.Group>
        </Form.Item>
      </div>
    </div>
  );
}
