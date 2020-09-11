import React from "react";
import { mount } from "cypress-react-unit-test";
import { MealsOfWeek } from "./MealsOfWeek";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../Form";
import { ReactComponent as MeatSvg } from "@components/form/mealsOfWeek/meat.svg";
import { ReactComponent as ChickenSvg } from "@components/form/mealsOfWeek/chicken.svg";
import { ReactComponent as VegetablesSvg } from "@components/form/mealsOfWeek/vegetables.svg";

const errorMsg = "plz fill meals of all days";

function MealsForm({ onFinish, onFinishFailed }) {
  const [form] = Form.useForm();

  const questions = [
    {
      name: "meat",
      icon: MeatSvg,
    },
    {
      name: "chicken",
      icon: ChickenSvg,
    },
    {
      name: "vegetables",
      icon: VegetablesSvg,
    },
  ];
  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <MealsOfWeek
        form={form}
        name="meals"
        questions={questions}
        label="meals of week"
        tooltipTitle="plz fill meals of all days"
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("MealsOfWeek component", () => {
  it("should show error msg when no day is filled", () => {
    const onFinishFailed = cy.stub();

    mount(
      <MealsForm onFinish={() => cy.stub()} onFinishFailed={onFinishFailed} />,
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

  it("should show error msg when all days are not filled", () => {
    const onFinishFailed = cy.stub();
    mount(
      <MealsForm onFinish={() => cy.stub()} onFinishFailed={onFinishFailed} />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );
    cy.checkMeals({
      monday: "meat",
      tuesday: "chicken",
      wednesday: "chicken",
      thursday: "chicken",
    });

    cy.get("button:contains(Submit)").click();

    cy.get(".ant-form-item-explain > div")
      .contains(errorMsg)
      .should("exist")
      .then(() => {
        expect(onFinishFailed).to.be.calledOnce;
      });
  });

  it("should not show error msg when all days are filled", () => {
    const onFinish = cy.stub();
    mount(<MealsForm onFinish={onFinish} onFinishFailed={() => cy.stub()} />, {
      style: `body {
                background-color: var(--bg-color)
            }`,
    });
    cy.checkMeals({
      monday: "meat",
      tuesday: "chicken",
      wednesday: "chicken",
      thursday: "chicken",
      friday: "vegetables",
    });

    cy.get("button:contains(Submit)").click();

    cy.get(`body:contains(${errorMsg})`)
      .should("not.exist")
      .then(() => {
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          meals: {
            monday: "meat",
            tuesday: "chicken",
            wednesday: "chicken",
            thursday: "chicken",
            friday: "vegetables",
          },
        });
      });
  });
});
