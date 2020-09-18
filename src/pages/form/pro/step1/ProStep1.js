import React, { useEffect } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";

// Au bureau
export function ProStep1({ step, setNextStep }) {
  const [form] = Form.useForm();

  useEffect(() => {
    console.log("get storedValues");
  }, []);

  const onFinish = () => {
    console.log("onFinish");
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.blur();
    setNextStep();
  };

  return (
    <ConfiguredForm
      id={step}
      form={form}
      onFinish={onFinish}
      onFinishFailed={() => console.log("onFinishFailed")}
    >
      proStep1
    </ConfiguredForm>
  );
}
