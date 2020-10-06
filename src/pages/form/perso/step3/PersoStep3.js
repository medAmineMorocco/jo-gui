import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormCounter } from "@components/form/formCounter/FormCounter.js";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
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

  useEffect(() => {
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
      setQuestion1(form.getFieldValue("materiels_question1"));
      setQuestion2(form.getFieldValue("materiels_question2"));
      setQuestion3(form.getFieldValue("materiels_question3"));
      setQuestion4(form.getFieldValue("materiels_question4"));
      setQuestion5(form.getFieldValue("materiels_question5"));
      setQuestion6(form.getFieldValue("materiels_question6"));
      setQuestion7(form.getFieldValue("materiels_question7"));
      setQuestion8(form.getFieldValue("materiels_question8"));
      setQuestion9(form.getFieldValue("materiels_question9"));
      setQuestion10(form.getFieldValue("materiels_question10"));
      setQuestion11(form.getFieldValue("materiels_question11"));
      setQuestion12(form.getFieldValue("materiels_question12"));
      setQuestion13(form.getFieldValue("materiels_question13"));
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

  return (
    <ConfiguredForm
      id={step}
      form={form}
      onFinish={onFinish}
      onFinishFailed={() => console.log("onFinishFailed")}
    >
      <div className="wizard-content-right-form-parent">
        <div className="pro-step-title-container">
          <span className="pro-step-title">Biens matériels</span>
        </div>

        <FormCounter
          form={form}
          name="materiels_question1"
          textCounter={MATERIELS_QUESTION1_LABEL}
          value={question1}
        />

        <div className="forms-margin">
          <FormCounter
            form={form}
            name="materiels_question2"
            textCounter={MATERIELS_QUESTION2_LABEL}
            value={question2}
          />

          <FormCounter
            form={form}
            name="materiels_question3"
            textCounter={MATERIELS_QUESTION3_LABEL}
            value={question3}
          />

          <FormItemInputNumberWithUnit
            form={form}
            name="materiels_question4"
            label={MATERIELS_QUESTION4_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
            unit="ans"
            value={question4}
          />

          <FormCounter
            form={form}
            name="materiels_question5"
            textCounter={MATERIELS_QUESTION5_LABEL}
            value={question5}
          />

          <FormItemInputNumberWithUnit
            form={form}
            name="materiels_question6"
            label={MATERIELS_QUESTION6_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
            unit="ans"
            value={question6}
          />

          <FormCounter
            form={form}
            name="materiels_question7"
            textCounter={MATERIELS_QUESTION7_LABEL}
            value={question7}
          />

          <FormItemInputNumberWithUnit
            form={form}
            name="materiels_question8"
            label={MATERIELS_QUESTION8_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
            unit="ans"
            value={question8}
          />

          <FormCounter
            form={form}
            name="materiels_question9"
            textCounter={MATERIELS_QUESTION9_LABEL}
            value={question9}
          />

          <FormCounter
            form={form}
            name="materiels_question10"
            textCounter={MATERIELS_QUESTION10_LABEL}
            value={question10}
          />

          <FormItemInputNumberWithUnit
            form={form}
            name="materiels_question11"
            label={MATERIELS_QUESTION11_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
            unit="ans"
            value={question11}
          />

          <FormCounter
            form={form}
            name="materiels_question12"
            textCounter={MATERIELS_QUESTION12_LABEL}
            value={question12}
          />

          <FormItemInputNumberWithUnit
            form={form}
            name="materiels_question13"
            label={MATERIELS_QUESTION13_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
            unit="ans"
            value={question13}
          />
        </div>
      </div>

      <div className="forms-margin">
        <FormItemActionReduction
          form={form}
          title="Appareils électroniques"
          selectDetail={actionReduction1Data}
          switchName="materiels_switch1"
          setSwitchValue={handleSwitch1Change}
          isOpened={switch1Value}
        />
      </div>

      <div className="wizard-content-right-form-parent">
        <div className="forms-margin">
          <FormItemInputNumber
            name="materiels_question14"
            label={MATERIELS_QUESTION14_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
          />

          <FormItemInputNumber
            name="materiels_question15"
            label={MATERIELS_QUESTION15_LABEL}
            rules={[{ required: true, message: MATERIELS_QUESTIONS_ERROR_MSG }]}
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
        />
      </div>
    </ConfiguredForm>
  );
}
