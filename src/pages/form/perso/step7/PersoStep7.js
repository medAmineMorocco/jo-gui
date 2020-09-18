import React, { useEffect } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";

// Services publics
export function PersoStep7({ step }) {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("get storedValues");
  }, []);

  const onFinish = () => {
    console.log("onFinish");
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.blur();
  };

  return (
    <ConfiguredForm
      id={step}
      form={form}
      onFinish={onFinish}
      onFinishFailed={() => console.log("onFinishFailed")}
    >
      PersoStep7
    </ConfiguredForm>
  );
}
