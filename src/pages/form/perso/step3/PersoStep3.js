import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { scrollToTopOfThePage } from "@hooks/window";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormCounter } from "@components/form/formCounter/FormCounter";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import {
  persoStep3State,
  persoStep3ActionReductionState,
} from "./PersoStep3State";
import {
  MATERIELS_QUESTIONS_ERROR_MSG,
  MATERIELS_QUESTION1_LABEL,
  MATERIELS_QUESTION2_LABEL,
  MATERIELS_QUESTION3_LABEL,
  MATERIELS_QUESTION4_LABEL,
  MATERIELS_QUESTION5_LABEL,
  MATERIELS_QUESTION6_LABEL,
  MATERIELS_QUESTION7_LABEL,
  MATERIELS_QUESTION8_LABEL,
  MATERIELS_QUESTION9_LABEL,
  MATERIELS_QUESTION10_LABEL,
  MATERIELS_QUESTION11_LABEL,
  MATERIELS_QUESTION12_LABEL,
  MATERIELS_QUESTION13_LABEL,
  MATERIELS_QUESTION14_LABEL,
  MATERIELS_QUESTION15_LABEL,
} from "@utils/constants";
import {
  saveResponsesOfQuestionsStep,
  getResponsesOfQuestionsOfStep,
  saveSettingsStep,
  getSettingsOfStep,
} from "@services/responseService";
import { actionReduction1Data, actionReduction2Data } from "./PersoStep3Config";

// Biens matériels
export function PersoStep3({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [render, setRender] = useState(0);
  const [switch1Value, setSwitch1Value] = useState(false);
  const [switch2Value, setSwitch2Value] = useState(false);
  const [question1, setQuestion1] = useState(0);
  const [question2, setQuestion2] = useState(0);
  const [question3, setQuestion3] = useState(0);
  const [question4, setQuestion4] = useState(0);
  const [question5, setQuestion5] = useState(0);
  const [question6, setQuestion6] = useState(0);
  const [question7, setQuestion7] = useState(0);
  const [question8, setQuestion8] = useState(0);
  const [question9, setQuestion9] = useState(0);
  const [question10, setQuestion10] = useState(0);
  const [question11, setQuestion11] = useState(0);
  const [question12, setQuestion12] = useState(0);
  const [question13, setQuestion13] = useState(0);

  const handleSwitch1Change = (isChecked) => {
    setSwitch1Value(isChecked);
  };

  const handleSwitch2Change = (isChecked) => {
    setSwitch2Value(isChecked);
  };

  const onchangeQuestion4 = () => {
    setRender(Math.random);
    actionReduction1Data[0].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= form.getFieldValue("5f55692a73b55"); i++) {
      actionReduction1Data[0].options.push({ text: `${i}`, value: i });
    }
  };

  const onchangeQuestion6 = () => {
    setRender(Math.random);
    actionReduction1Data[1].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= form.getFieldValue("5f5569587abe3"); i++) {
      actionReduction1Data[1].options.push({ text: `${i}`, value: i });
    }
  };

  const onchangeQuestion8 = () => {
    setRender(Math.random);
    actionReduction1Data[2].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= form.getFieldValue("5f55697f50057"); i++) {
      actionReduction1Data[2].options.push({ text: `${i}`, value: i });
    }
  };

  const onchangeQuestion11 = () => {
    setRender(Math.random);
    actionReduction1Data[3].options = [{ text: "0", value: 0 }];
    actionReduction1Data[4].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= form.getFieldValue("5f556b3b7aeaf"); i++) {
      actionReduction1Data[3].options.push({ text: `${i}`, value: i });
      actionReduction1Data[4].options.push({ text: `${i}`, value: i });
    }
  };

  const onchangeQuestion13 = () => {
    setRender(Math.random);
    actionReduction1Data[5].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= form.getFieldValue("5f556b6cefd5a"); i++) {
      actionReduction1Data[5].options.push({ text: `${i}`, value: i });
    }
  };

  const onchangeQuestion14 = (value) => {
    actionReduction2Data[1].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= value; i++) {
      actionReduction2Data[1].options.push({ text: `${i}`, value: i });
    }
  };

  const onchangeQuestion15 = (value) => {
    actionReduction2Data[0].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= value; i++) {
      actionReduction2Data[0].options.push({ text: `${i}`, value: i });
    }
  };

  useEffect(() => {
    scrollToTopOfThePage();
    const setReponsesOfStep = (stepState) => {
      stepState.forEach(({ question, response, actions }) => {
        form.setFieldsValue({
          [question]: response,
        });
        if (actions) {
          actions.forEach(({ id, response }) => {
            form.setFieldsValue({
              [id]: response,
            });
          });
        }
      });
      onchangeQuestion14(form.getFieldValue("5f556b94d465c"));
      onchangeQuestion15(form.getFieldValue("5f556baea779b"));
      setQuestion1(form.getFieldValue("5f5568d39449f"));
      setQuestion2(form.getFieldValue("5f5568e651349"));
      setQuestion3(form.getFieldValue("5f5568f49b63c"));
      setQuestion4(form.getFieldValue("5f55692a73b55"));
      setQuestion5(form.getFieldValue("5f5569516acd3"));
      setQuestion6(form.getFieldValue("5f5569587abe3"));
      setQuestion7(form.getFieldValue("5f55697727f39"));
      setQuestion8(form.getFieldValue("5f55697f50057"));
      setQuestion9(form.getFieldValue("5f55699e36c16"));
      setQuestion10(form.getFieldValue("5f556b379a8d1"));
      setQuestion11(form.getFieldValue("5f556b3b7aeaf"));
      setQuestion12(form.getFieldValue("5f556b6b5abc8"));
      setQuestion13(form.getFieldValue("5f556b6cefd5a"));
    };

    const setSettingsOfStep = (settingsOfStep) => {
      settingsOfStep.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });
      setSwitch1Value(form.getFieldValue("materiels_switch1"));
      setSwitch2Value(form.getFieldValue("materiels_switch2"));
    };

    const stepState = getResponsesOfQuestionsOfStep(step);
    if (stepState) {
      setReponsesOfStep(stepState);
    }
    const settingsOfStep = getSettingsOfStep(step);
    if (settingsOfStep) {
      setSettingsOfStep(settingsOfStep);
    }
  }, [form, step]);

  const onFinish = (values) => {
    saveResponsesOfQuestionsStep(persoStep3State(values), step);
    saveSettingsStep(persoStep3ActionReductionState(values), step);
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.blur();
    setNextStep();
  };

  const onFieldsChange = () => {
    setRender(Math.random);
  };

  return (
    <ConfiguredForm
      id={step}
      form={form}
      onFinish={onFinish}
      onFinishFailed={() => console.log("onFinishFailed")}
      onFieldsChange={onFieldsChange}
    >
      <div className="wizard-content-right-form-parent">
        <div className="pro-step-title-container">
          <span className="pro-step-title">Biens matériels</span>
        </div>

        <TitleWithHorizontalLine title="Véhicules" />

        <FormCounter
          form={form}
          name="5f5568d39449f"
          textCounter={MATERIELS_QUESTION1_LABEL}
          value={question1}
        />

        <FormCounter
          form={form}
          name="5f5568e651349"
          textCounter={MATERIELS_QUESTION2_LABEL}
          value={question2}
        />

        <FormCounter
          form={form}
          name="5f5568f49b63c"
          textCounter={MATERIELS_QUESTION3_LABEL}
          value={question3}
        />

        <FormItemInputNumberWithUnit
          form={form}
          name="5f55692a73b55"
          label={MATERIELS_QUESTION4_LABEL}
          unit="ans"
          value={question4}
          onChange={onchangeQuestion4}
          oneLineInput={true}
        />

        <div className="forms-margin">
          <TitleWithHorizontalLine title="Électroniques" />
        </div>

        <FormCounter
          form={form}
          name="5f5569516acd3"
          textCounter={MATERIELS_QUESTION5_LABEL}
          value={question5}
        />

        <FormItemInputNumberWithUnit
          form={form}
          name="5f5569587abe3"
          label={MATERIELS_QUESTION6_LABEL}
          unit="ans"
          value={question6}
          onChange={onchangeQuestion6}
          oneLineInput={true}
        />

        <FormCounter
          form={form}
          name="5f55697727f39"
          textCounter={MATERIELS_QUESTION7_LABEL}
          value={question7}
        />

        <FormItemInputNumberWithUnit
          form={form}
          name="5f55697f50057"
          label={MATERIELS_QUESTION8_LABEL}
          unit="ans"
          value={question8}
          onChange={onchangeQuestion8}
          oneLineInput={true}
        />

        <FormCounter
          form={form}
          name="5f55699e36c16"
          textCounter={MATERIELS_QUESTION9_LABEL}
          value={question9}
        />

        <FormCounter
          form={form}
          name="5f556b379a8d1"
          textCounter={MATERIELS_QUESTION10_LABEL}
          value={question10}
        />

        <FormItemInputNumberWithUnit
          form={form}
          name="5f556b3b7aeaf"
          label={MATERIELS_QUESTION11_LABEL}
          unit="ans"
          value={question11}
          onChange={onchangeQuestion11}
          oneLineInput={true}
        />

        <FormCounter
          form={form}
          name="5f556b6b5abc8"
          textCounter={MATERIELS_QUESTION12_LABEL}
          value={question12}
        />

        <FormItemInputNumberWithUnit
          form={form}
          name="5f556b6cefd5a"
          label={MATERIELS_QUESTION13_LABEL}
          unit="ans"
          value={question13}
          onChange={onchangeQuestion13}
          oneLineInput={true}
        />
      </div>

      <div className="forms-margin">
        <FormItemActionReduction
          form={form}
          title="Appareils électroniques"
          selectDetail={actionReduction1Data}
          switchName="materiels_switch1"
          setSwitchValue={handleSwitch1Change}
          isOpened={switch1Value}
          render={render}
        />
      </div>

      <div className="wizard-content-right-form-parent">
        <TitleWithHorizontalLine title="Dressing" />

        <div className="forms-margin">
          <FormItemInputNumber
            name="5f556b94d465c"
            label={MATERIELS_QUESTION14_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
            onChange={onchangeQuestion14}
          />

          <FormItemInputNumber
            name="5f556baea779b"
            label={MATERIELS_QUESTION15_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
            onChange={onchangeQuestion15}
          />
        </div>
      </div>

      <div className="forms-margin">
        <FormItemActionReduction
          form={form}
          title="Vêtements et chaussures"
          selectDetail={actionReduction2Data}
          switchName="materiels_switch2"
          setSwitchValue={handleSwitch2Change}
          isOpened={switch2Value}
          render={render}
        />
      </div>
    </ConfiguredForm>
  );
}
