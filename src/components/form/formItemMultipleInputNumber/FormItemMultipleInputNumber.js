import React from "react";
import { Form, InputNumber } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";
import { getColor } from "@utils/cssUtil";
import "./formItemMultipleInputNumber.css";

export function FormItemMultipleInputNumber({
  form,
  label,
  tooltipTitle,
  questions,
}) {
  const mainColor = getColor("--main-color");

  const onChange = (value, name) => {
    form.setFieldsValue({
      [name]: value,
    });
  };

  const onFocus = (name) => {
    changeElementColorTo(name, "white");
  };

  const onBlur = (name) => {
    changeElementColorTo(name, mainColor);
  };

  const changeElementColorTo = (name, color) => {
    const inputById = document.getElementById(name);
    inputById.style.borderColor = color;
    inputById.style.color = color;
    const labelById = document.getElementById(`label-${name}`);
    labelById.style.color = color;
  };

  return (
    <FormItem label={label} tooltipTitle={tooltipTitle}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {questions.map(({ name, label, defaultValue }, key) => (
          <div
            key={key}
            style={{
              width: "30%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <span className="form-multiple-items-label" id={`label-${name}`}>
              {label}
            </span>
            <InputNumber
              id={name}
              className="form-multiple-items-input"
              defaultValue={defaultValue}
              onChange={(value) => onChange(value, name)}
              onFocus={() => onFocus(name)}
              onBlur={() => onBlur(name)}
            />
            <Form.Item
              className="hidden-form-multiple-items"
              name={name}
              initialValue={defaultValue}
              rules={[
                {
                  required: true,
                  message: `⚠ Veuillez remplir le champs ${label}`,
                },
              ]}
            />
          </div>
        ))}
      </div>
    </FormItem>
  );
}
