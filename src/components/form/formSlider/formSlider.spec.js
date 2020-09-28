import React from "react";
import { mount } from "cypress-react-unit-test";
import { FormSlider } from "./FormSlider";
import { Button, Form } from "antd";
import { ReactComponent as TeaSvg } from "@components/form/formSlider/tea.svg";
import { ReactComponent as CapsuleSvg } from "@components/form/formSlider/capsule.svg";
import { ReactComponent as CoffeeSvg } from "@components/form/formSlider/coffee.svg";
import { Form as ConfiguredForm } from "../Form";

function SliderForm({ onFinish }) {
  const [form] = Form.useForm();
  let questions = [
    {
      label: "Café en capsule",
      name: "erf12",
      logo: <CapsuleSvg />,
    },
    {
      label: "Café en vrac",
      name: "erf13",
      logo: <CoffeeSvg />,
    },
    {
      label: "Tasse de Thé",
      name: "erf14",
      logo: <TeaSvg />,
    },
  ];

  const tooltipTitle = "Test";
  return (
    <ConfiguredForm form={form} onFinish={onFinish}>
      <FormSlider
        labels={"Combien de boissons chaudes prenez-vous par jour ?"}
        questions={questions}
        tooltipTitle={tooltipTitle}
        form={form}
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
  it("Test data pick 2 in sliderbar", () => {
    const onFinish = cy.stub();

    mount(<SliderForm onFinish={onFinish} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });

    cy.get(".ant-slider-with-marks")
      .eq(1)
      .trigger("mousedown", { which: 1, pageX: 450, pageY: 108 })
      .click();
    cy.get("button:contains(Submit)")
      .click()
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          erf12: 0,
          erf13: 2,
          erf14: 0,
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
          erf12: 0,
          erf13: 0,
          erf14: 0,
        })
      );
  });
});
