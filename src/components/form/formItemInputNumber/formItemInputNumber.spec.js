import React from "react";
import { mount } from "cypress-react-unit-test";
import { FormItemInputNumber } from "./FormItemInputNumber";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";

const errorMsg = "Please input the distance!";

function FormItemInputNumberForm({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormItemInputNumber
        form={form}
        name="distance"
        label="what is the distance between USA and AUS ?"
        rules={[{ required: true, message: "⚠ Please input the distance!" }]}
        tooltipTitle="this is a tooltip"
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("FormItemInputNumberForm component", () => {
  it("should show error when the input number is not filled", () => {
    const onFinishFailed = cy.stub();
    mount(
      <FormItemInputNumberForm
        onFinish={() => cy.stub()}
        onFinishFailed={onFinishFailed}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("button:contains(Submit)").click();

    cy.get(".ant-form-item-explain > div")
      .contains(errorMsg)
      .should("exist")
      .then(() => {
        expect(onFinishFailed).to.be.calledOnce;
      });
  });

  it("should not show error when the input number is filled", () => {
    const onFinish = cy.stub();
    mount(
      <FormItemInputNumberForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );
    cy.get(".ant-input-number-input").type("15");

    cy.get("button:contains(Submit)").click();

    cy.get(`body:contains(${errorMsg})`)
      .should("not.exist")
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          distance: 15,
        });
      });
  });
});
