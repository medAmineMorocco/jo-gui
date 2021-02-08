import React, { useEffect } from "react";
import { Form, InputNumber } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";
import { getColor } from "@utils/cssUtil";
import "./formItemWithTwoInputs.css";

export function FormItemWithTwoInputs({
  form,
  label,
  tooltipTitle,
  incomingChoice,
  questions,
}) {
  const mainColor = getColor("--main-color");

  useEffect(() => {
    return () => {
      questions.forEach(({ response }) => {
        form.setFieldsValue({
          [response.name]: null,
        });
      });
    };
  }, [form, questions]);

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
        {questions.map(({ choice, response, defaultValue }, index) => (
          <div
            key={index}
            style={{
              width: "45%",
              display: "flex",
              flexDirection: "column",
              textAlign: "center",
            }}
          >
            <Form.Item
              {...(incomingChoice === choice && {
                name: response.name,
              })}
              initialValue={defaultValue}
              {...(incomingChoice === choice && {
                rules: [
                  {
                    required: true,
                    message: `⚠ Veuillez remplir le champs ${response.label}`,
                  },
                ],
              })}
            >
              <InputNumber
                id={response.name}
                className={
                  incomingChoice === choice
                    ? "form-two-items-input"
                    : "form-two-items-input-disabled"
                }
                defaultValue={defaultValue}
                min={1}
                disabled={incomingChoice !== choice}
                onChange={(value) => onChange(value, response.name)}
                onFocus={() => onFocus(response.name)}
                onBlur={() => onBlur(response.name)}
                inputMode="tel"
              />
            </Form.Item>
            <span
              id={`label-${response.name}`}
              className={
                incomingChoice === choice
                  ? "form-two-items-label"
                  : "form-two-items-label-disabled"
              }
            >
              {response.label}
            </span>
          </div>
        ))}
      </div>
    </FormItem>
  );
}
