import React, { useState } from "react";
import { mount } from "cypress-react-unit-test";
import { FormSlider } from "./FormSlider";
import { Button, Form } from "antd";
import { ReactComponent as CapsuleSvg } from "@components/form/formSlider/capsule.svg";
import { Form as ConfiguredForm } from "../Form";

function SliderForm({ onFinish }) {
  const [form] = Form.useForm();

  const [cafeCapsule, setCafeCapsule] = useState(0);

  const tooltipTitle = "Test";
  const questions = [
    {
      label: "Café en capsule",
      name: "erf12",
      logo: <CapsuleSvg />,
      min: 0,
      max: 10,
      value: cafeCapsule,
      setValue: setCafeCapsule,
    },
  ];

  return (
    <ConfiguredForm form={form} onFinish={onFinish}>
      <FormSlider
        form={form}
        labels={"Combien de boissons prenez-vous par jour ?"}
        tooltipTitle={tooltipTitle}
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

describe("Slider component", () => {
  it("Test data pick value in sliderbar", () => {
    const onFinish = cy.stub();

    mount(<SliderForm onFinish={onFinish} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });

    cy.pickValue("", "6");

    cy.get("button:contains(Submit)")
      .click()
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          erf12: 6,
        })
      );
  });

  it("Test data doesn't picking sliderbar", () => {
    const onFinish = cy.stub();

    mount(<SliderForm onFinish={onFinish} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });

    cy.get("button:contains(Submit)")
      .click()
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          erf12: undefined,
        })
      );
  });
});
