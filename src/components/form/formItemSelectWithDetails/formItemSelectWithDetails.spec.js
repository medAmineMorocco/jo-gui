import React from "react";
import { mount } from "cypress-react-unit-test";
import { FormItemSelectWithDetails } from "./FormItemSelectWithDetails";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";

function SelectWithDetailsForm({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();

  const subQuestions = {
    Jack: [
      {
        question: "question 1",
        name: "question1",
        defaultResponse: 200,
      },
      {
        question: "question 2",
        name: "question2",
        defaultResponse: 230,
      },
    ],
    Lucy: [
      {
        question: "question 1",
        name: "question1",
        defaultResponse: 100,
      },
      {
        question: "question 2",
        name: "question2",
        defaultResponse: 130,
      },
    ],
  };

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      <FormItemSelectWithDetails
        form={form}
        name="persons"
        label="Select a person"
        tooltipTitle="details of question"
        options={[
          { text: "Jack", value: "Jack" },
          { text: "Lucy", value: "Lucy" },
          { text: "yiminghe", value: "yiminghe" },
        ]}
        subQuestions={subQuestions}
      />
    </ConfiguredForm>
  );
}

describe("FormItemSelectWithDetails component", () => {
  it("should show success without selecting a response and submit", () => {
    const onFinish = cy.stub();
    mount(
      <SelectWithDetailsForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("button:contains(Submit)")
      .click()
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          persons: "Jack",
        })
      );
  });

  it("should show success when select a response and submit", () => {
    const onFinish = cy.stub();
    mount(
      <SelectWithDetailsForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.selectOption("#persons", "Lucy");

    cy.get("button:contains(Submit)")
      .click()
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          persons: "Lucy",
        })
      );
  });

  it("should show success when select a response of a question that does not have subquestions and submit", () => {
    const onFinish = cy.stub();
    mount(
      <SelectWithDetailsForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.selectOption("#persons", "yiminghe");

    cy.get("button:contains(Submit)")
      .click()
      .then(() => {
        cy.get("body:contains(Détails)").should("not.exist");
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          persons: "yiminghe",
        });
      });
  });
});
