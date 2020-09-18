import React from "react";
import { mount } from "cypress-react-unit-test";
import { FormItemSelect } from "./FormItemSelect";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";

function SelectForm({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormItemSelect
        form={form}
        name="persons"
        label="Select a person"
        tooltipTitle="details of question"
        options={[
          { text: "Jack", value: "Jack" },
          { text: "Lucy", value: "Lucy" },
          { text: "yiminghe", value: "yiminghe" },
        ]}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("FormItemSelect component", () => {
  it("should show success when select an item and submit", () => {
    const onFinish = cy.stub();

    mount(<SelectForm onFinish={onFinish} onFinishFailed={() => cy.stub()} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });

    cy.selectOption("#persons", "yiminghe");

    cy.get("button:contains(Submit)")
      .click()
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          persons: "yiminghe",
        })
      );
  });
});
