import React, { useEffect } from "react";
import { mount } from "cypress-react-unit-test";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";
import { FormItemRadioButtons } from "./FormItemRadioButtons";

const errorMsg = "Veuillez sélectionner une option";

function FormItemRadioButtonsForm({
  onFinish,
  onFinishFailed,
  isMultipleSelection,
  initialValues,
}) {
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
      <FormItemRadioButtons
        form={form}
        name="country"
        label="quel moyen de transport ?"
        options={options}
        isMultipleSelection={isMultipleSelection}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("FormItemRadioButtons component", () => {
  it("should show error when any option is checked", () => {
    const onFinishFailed = cy.stub();
    mount(
      <FormItemRadioButtonsForm
        onFinish={() => cy.stub()}
        onFinishFailed={onFinishFailed}
        isMultipleSelection={false}
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
      <FormItemRadioButtonsForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
        isMultipleSelection={true}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );
    cy.get('input[value="Voiture"]').check({ force: true });
    cy.get('input[value="Avion"]').check({ force: true });

    cy.get("button:contains(Submit)").click();

    cy.get(`body:contains(${errorMsg})`)
      .should("not.exist")
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          country: ["Voiture", "Avion"],
        });
      });
  });

  it("should set initial value when render the component", () => {
    const onFinish = cy.stub();
    mount(
      <FormItemRadioButtonsForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
        initialValues="Voiture"
        isMultipleSelection={false}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get('input[value="Voiture"]').should("be.checked");
  });
});
