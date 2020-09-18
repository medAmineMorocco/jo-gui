import React from "react";
import { mount } from "cypress-react-unit-test";
import { FormItemWithTwoInputs } from "./FormItemWithTwoInputs";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";

function FormItemWithTwoInputsForm({
  onFinish,
  onFinishFailed,
  incomingChoice,
  questions,
}) {
  const [form] = Form.useForm();

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormItemWithTwoInputs
        form={form}
        label="Consommation moyenne aux 100 km (si connue)"
        tooltipTitle="Consommation moyenne aux 100 km"
        incomingChoice={incomingChoice}
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

describe("FormItemWithTwoInputs component", () => {
  it("should show success when user select electric and add value and submit", () => {
    const questions = [
      {
        choice: "gasoline",
        response: {
          name: "litre",
          label: "L/100 km",
        },
      },
      {
        choice: "electric",
        response: {
          name: "kilowatt",
          label: "kWh/100 km",
        },
      },
    ];
    const onFinish = cy.stub();
    mount(
      <FormItemWithTwoInputsForm
        onFinish={onFinish}
        onFinishFailed={cy.stub()}
        incomingChoice="electric"
        questions={questions}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("#litre").should("be.disabled");

    cy.get("#kilowatt").type("99");

    cy.get("button:contains(Submit)")
      .click()
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          kilowatt: 99,
        });
      });
  });

  it("should show success when user select gasoline and add value and submit", () => {
    const questions = [
      {
        choice: "gasoline",
        response: {
          name: "litre",
          label: "L/100 km",
        },
      },
      {
        choice: "electric",
        response: {
          name: "kilowatt",
          label: "kWh/100 km",
        },
      },
    ];
    const onFinish = cy.stub();
    mount(
      <FormItemWithTwoInputsForm
        onFinish={onFinish}
        onFinishFailed={cy.stub()}
        incomingChoice="gasoline"
        questions={questions}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("#kilowatt").should("be.disabled");

    cy.get("#litre").type("88");

    cy.get("button:contains(Submit)")
      .click()
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          litre: 88,
        });
      });
  });

  it("should show failed when submit questions with default response", () => {
    const questions = [
      {
        choice: "gasoline",
        response: {
          name: "litre",
          label: "L/100 km",
        },
      },
      {
        choice: "electric",
        response: {
          name: "kilowatt",
          label: "kWh/100 km",
        },
      },
    ];
    const onFinishFailed = cy.stub();
    mount(
      <FormItemWithTwoInputsForm
        onFinish={cy.stub()}
        onFinishFailed={onFinishFailed}
        incomingChoice="gasoline"
        questions={questions}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("#kilowatt").should("be.disabled");

    cy.get("button:contains(Submit)")
      .click()
      .then(() => {
        expect(onFinishFailed).to.be.calledOnce;
      });
  });
});
