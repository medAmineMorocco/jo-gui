import React from "react";
import { mount } from "cypress-react-unit-test";
import { FormItemActionReduction } from "./FormItemActionReduction";
import { Button, Form } from "antd";
import { Form as ConfiguredForm } from "../../Form";

function ActionReductionForm({ onFinish, onFinishFailed, isOpened }) {
  const [form] = Form.useForm();

  let savierVous =
    "Réduire sa consommation de café est plus facile que vous le pensez.Etiam sagittis et quam sed consectetur.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.Ut ut arcu in nisi ultrices accumsan.Donec in mi hendrerit pellent habitant morbi tristiqueligula sodales lobortis risus at dapibus.Vestibulum est metus.";

  const selectDetail = [
    {
      type: "select",
      firstText: "Chaque jour, privilégiez",
      name: "firstSelect",
      options: [
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
      ],
      secondText: "tasse(s) de café en vrac plutôt qu’en capsule.",
    },
    {
      type: "select",
      firstText: "Chaque jour, privilégiez",
      name: "secondSelect",
      options: [
        { text: "2", value: 2 },
        { text: "3", value: 3 },
        { text: "4", value: 4 },
        { text: "5", value: 5 },
      ],
      secondText: "tasse(s) de thé plutôt qu'un café en vrac.",
    },
    {
      type: "input",
      firstText: "Chaque jour, privilégiez",
      name: "thirdSelect",
      secondText: "tasse(s) de thé.",
    },
  ];

  return (
    <ConfiguredForm
      form={form}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <FormItemActionReduction
        form={form}
        title="Thé et café"
        savierVous={savierVous}
        selectDetail={selectDetail}
        isOpened={isOpened}
      />
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </ConfiguredForm>
  );
}

describe("FormItemActionReduction component", () => {
  it("should display details", () => {
    const onFinish = cy.stub();

    mount(
      <ActionReductionForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
        isOpened={true}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get(".panel-header-span-first-title").should(
      "contain",
      "ACTIONS DE RÉDUCTION"
    );

    cy.get(".first-para").should(
      "contain",
      "Calculez de combien votre empreinte pourrait baisser en mettant en place ces changements."
    );
  });

  it("should show more details (savier-vous)", () => {
    const onFinish = cy.stub();

    mount(
      <ActionReductionForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
        isOpened={true}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get(".showDetail").click();
  });

  it("should show success when submit with switch is OFF", () => {
    const onFinish = cy.stub();

    mount(
      <ActionReductionForm
        onFinish={onFinish}
        onFinishFailed={cy.stub()}
        isOpened={false}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("button:contains(Submit)")
      .click({ force: true })
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({})
      );
  });

  it("should show success when submit with default values", () => {
    const onFinish = cy.stub();

    mount(
      <ActionReductionForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
        isOpened={true}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.get("button:contains(Submit)")
      .click({ force: true })
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          firstSelect: 2,
          secondSelect: 2,
          thirdSelect: undefined,
        })
      );
  });

  it("should show success when user select one value and submit", () => {
    const onFinish = cy.stub();

    mount(
      <ActionReductionForm
        onFinish={onFinish}
        onFinishFailed={() => cy.stub()}
        isOpened={true}
      />,
      {
        style: `body {
                background-color: var(--bg-color)
            }`,
      }
    );

    cy.selectOption("#firstSelect", 3);

    cy.get("#thirdSelect").type(3);

    cy.get("button:contains(Submit)")
      .click({ force: true })
      .then(() =>
        expect(onFinish).to.be.calledOnce.and.have.been.calledWith({
          firstSelect: 3,
          secondSelect: 2,
          thirdSelect: 3,
        })
      );
  });
});
