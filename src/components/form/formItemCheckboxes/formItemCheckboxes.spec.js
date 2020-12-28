import React, { useEffect } from "react";
import { mount } from "cypress-react-unit-test";
import { FormItemCheckboxes } from "./FormItemCheckboxes";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";

const errorMsg = "Veuillez sélectionner une option";

function FormItemCheckboxesForm({ onFinish, onFinishFailed, initialValues }) {
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialValues) {
      form.setFieldsValue({
        country: initialValues,
      });
    }
  }, [form, initialValues]);

  const options = [
    {
      label: "Voiture",
      value: "Voiture",
    },
    {
      label: "Train",
      value: "Train",
    },
    {
      label: "Avion",
      value: "Avion",
    },
  ];

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormItemCheckboxes
        name="country"
        text="quel moyen de transport ?"
        options={options}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("FormItemCheckboxes component", () => {
  it("should show error when any option is checked", () => {
    const onFinishFailed = cy.stub();
    mount(
      <FormItemCheckboxesForm
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

  it("should not show error when check some options", () => {
    const onFinish = cy.stub();
    mount(
      <FormItemCheckboxesForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );
    cy.get('input[value="Voiture"]').check();
    cy.get('input[value="Avion"]').check();

    cy.get("button:contains(Submit)").click();

    cy.get(`body:contains(${errorMsg})`)
      .should("not.exist")
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          country: ["Voiture", "Avion"],
        });
      });
  });

  it("should set initial values when render the component", () => {
    const onFinish = cy.stub();
    mount(
      <FormItemCheckboxesForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
        initialValues={["Voiture", "Train"]}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get('input[value="Voiture"]').should("be.checked");
    cy.get('input[value="Train"]').should("be.checked");
  });
});
