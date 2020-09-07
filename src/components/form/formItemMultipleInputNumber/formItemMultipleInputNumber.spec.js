import React from "react";
import { mount } from "cypress-react-unit-test";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";
import { FormItemMultipleInputNumber } from "./FormItemMultipleInputNumber";

function FormItemMultipleInputNumberForm({
  onFinish,
  onFinishFailed,
  questions,
}) {
  const [form] = Form.useForm();

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormItemMultipleInputNumber
        form={form}
        label="Label with toolitp"
        tooltipTitle="this is a tooltip"
        questions={questions}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("FormItemMultipleInputNumber component", () => {
  it("should show success when submit questions with default response", () => {
    const questions = [
      {
        name: "eco",
        label: "Économie",
        defaultValue: 50,
      },
      {
        name: "busi",
        label: "Business",
        defaultValue: 60,
      },
      {
        name: "prem",
        label: "Première",
        defaultValue: 70,
      },
    ];
    const onFinish = cy.stub();
    mount(
      <FormItemMultipleInputNumberForm
        onFinish={onFinish}
        onFinishFailed={cy.stub()}
        questions={questions}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("button:contains(Submit)")
      .click()
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          eco: 50,
          busi: 60,
          prem: 70,
        });
      });
  });

  it("should show success when respond to all questions", () => {
    const questions = [
      {
        name: "eco",
        label: "Économie",
      },
      {
        name: "busi",
        label: "Business",
      },
      {
        name: "prem",
        label: "Première",
      },
    ];
    const onFinish = cy.stub();
    mount(
      <FormItemMultipleInputNumberForm
        onFinish={onFinish}
        onFinishFailed={cy.stub()}
        questions={questions}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.typeNumber([
      {
        name: "eco",
        value: 20,
      },
      {
        name: "busi",
        value: 30,
      },
      {
        name: "prem",
        value: 40,
      },
    ]);

    cy.get("button:contains(Submit)")
      .click()
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          eco: 20,
          busi: 30,
          prem: 40,
        });
      });
  });
});
