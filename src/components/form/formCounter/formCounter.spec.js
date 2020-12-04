import React, { useState } from "react";
import { mount } from "cypress-react-unit-test";
import { FormCounter } from "./FormCounter";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";
import { LaptopOutlined } from "@ant-design/icons";

function CounterForm({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();
  const [count, setCount] = useState(0);
  let textCounter =
    "Nombre d'ordinateurs portable professionnels mis à votre disposition";
  let title = "Test";
  let name = "countValue";
  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormCounter
        iconCounter={LaptopOutlined}
        textCounter={textCounter}
        tooltipTitle={title}
        form={form}
        name={name}
        value={count}
        setValue={setCount}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("Counter component", () => {
  it("Test to find out if the value of the counter is the value displayed and sent to the form", () => {
    mount(<CounterForm />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });

    cy.count("#countValue", 5);

    cy.get("button:contains(Submit)").click();

    cy.get("#result-counter").contains(5);
  });

  it("Test submit nerver click in button minus or plus", () => {
    mount(<CounterForm />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });

    cy.get("button:contains(Submit)").click();

    cy.get("#result-counter").contains(0);
  });
});
