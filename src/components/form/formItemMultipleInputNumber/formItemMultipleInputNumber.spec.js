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
        name="multi"
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
  it("should show error when submit questions without filling it", () => {
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
    const onFinishFailed = cy.stub();
    mount(
      <FormItemMultipleInputNumberForm
        onFinish={cy.stub()}
        onFinishFailed={onFinishFailed}
        questions={questions}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("button:contains(Submit)").click();

    cy.get(".ant-form-item-explain > div")
      .contains("Merci de remplir au moins une réponse")
      .should("exist")
      .then(() => {
        expect(onFinishFailed).to.be.calledOnce;
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
          multi: "40",
        });
      });
  });
});
