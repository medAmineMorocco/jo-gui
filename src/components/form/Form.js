import React from "react";
import { Form as FormAntd } from "antd";
import { getColor } from "@utils/cssUtil";

export function Form({
  name,
  form,
  onFinish,
  onFinishFailed,
  children,
  basicInputs = [],
}) {
  const errorColor = getColor("--error-color");
  const errorColorShade2 = getColor("--error-color-shade-2");

  const onDefaultFinishFailed = ({ _, errorFields }) => {
    errorFields.forEach((errors) =>
      errors.name.forEach((error) => {
        if (basicInputs && basicInputs.includes(error)) {
          setErrorStateForInput(error);
        }
      })
    );
    if (onFinishFailed) {
      onFinishFailed({ _, errorFields });
    }
  };

  const setErrorStateForInput = (error) => {
    const inputContainer = document.getElementById(error);
    inputContainer.style.backgroundColor = "black";
    inputContainer.style.borderColor = errorColor;
    inputContainer.style.color = errorColor;
    document.querySelector(
      `[for="${error}"]`
    ).firstElementChild.style.color = errorColorShade2;
  };

  return (
    <FormAntd
      labelCol={{ span: 24 }}
      wrapperCol={{ span: 24 }}
      layout="vertical"
      form={form}
      name={name}
      validateTrigger="onSubmit"
      onFinish={onFinish}
      onFinishFailed={onDefaultFinishFailed}
    >
      {children}
    </FormAntd>
  );
}
