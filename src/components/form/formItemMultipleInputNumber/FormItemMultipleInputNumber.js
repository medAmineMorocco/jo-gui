import React from "react";
import { Form, InputNumber } from "antd";
import { FormItem } from "@components/form/formItem/FormItem";
import { getColor } from "@utils/cssUtil";
import "./formItemMultipleInputNumber.css";

export function FormItemMultipleInputNumber({
  form,
  name,
  label,
  tooltipTitle,
  questions,
  isRequired,
  onChange,
}) {
  const mainColor = getColor("--main-color");

  const onChangeFieldValue = (value, name) => {
    form.setFieldsValue({
      [name]: value,
    });
    if (onChange) {
      onChange();
    }
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

  const check = () => {
    const isAllQuestionsNotFilled = questions
      .map(({ name }) => form.getFieldValue(name))
      .filter((questionName) => questionName !== name)
      .every((value) => value === undefined || value === null);
    if (isAllQuestionsNotFilled) {
      return Promise.reject("⚠ Merci de remplir au moins une réponse");
    }
    return Promise.resolve();
  };

  return (
    <FormItem
      label={label}
      name={name}
      tooltipTitle={tooltipTitle}
      {...(isRequired && { rules: [{ validator: check }] })}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {questions.map(({ name, label, defaultValue }, key) => {
          return (
            <div
              key={key}
              style={{ width: 100 / questions.length - 3 + "%" }}
              className="multiple-item-child-container"
            >
              <span className="form-multiple-items-label" id={`label-${name}`}>
                {label}
              </span>
              <Form.Item name={name}>
                <InputNumber
                  id={name}
                  className="form-multiple-items-input"
                  value={defaultValue}
                  onChange={(value) => onChangeFieldValue(value, name)}
                  onFocus={() => onFocus(name)}
                  onBlur={() => onBlur(name)}
                  min={0}
                />
              </Form.Item>
            </div>
          );
        })}
      </div>
    </FormItem>
  );
}
