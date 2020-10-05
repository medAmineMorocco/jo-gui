import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import {
  HOUSE_QUESTION1,
  HOUSE_QUESTION2,
  HOUSE_QUESTION3,
  HOUSE_QUESTION4,
  HOUSE_QUESTION5,
  HOUSE_QUESTION6,
  HOUSE_QUESTION7,
  HOUSE_QUESTION8,
  HOUSE_QUESTION9,
  HOUSE_QUESTION10,
  HOUSE_QUESTION11,
  OVERLAY_TITLE_HOUSE,
  OVERLAY_SOUSTEXTE_HOUSE,
  HOUSE_ERROR_MSG,
  HOUSE_QUESTION2_TOOTLTIP,
  HOUSE_QUESTION3_TOOTLTIP,
  HOUSE_QUESTION4_TOOTLTIP,
  HOUSE_QUESTION5_TOOTLTIP,
  HOUSE_QUESTION678_TOOTLTIP,
  HOUSE_QUESTION9_TOOTLTIP,
  HOUSE_QUESTION10_TOOTLTIP,
  HOUSE_SAVIEZ_VOUS,
} from "@utils/constants";
import {
  saveResponsesOfQuestionsStep,
  getResponsesOfQuestionsOfStep,
  saveSettingsStep,
  getSettingsOfStep,
} from "@services/responseService";
import { getColor } from "@utils/cssUtil";
import { FormCounter } from "@components/form/formCounter/FormCounter";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import { Overlay } from "@components/overlay/Overlay";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import {
  optionsClasses,
  optionsLogement,
  selectDetailLunch,
} from "./step1Config";
import { housestep1State, house1ActionReductionState } from "./step1State";

// A la maison
export function PersoStep1({ step, setNextStep }) {
  const mainColor = getColor("--main-color");
  const [form] = Form.useForm();
  const [question1Count, setQuestion1Count] = useState(0);
  const [question2Input, setQuestion2Input] = useState(0);
  const [question3Input, setQuestion3Input] = useState(0);
  const [question4Input, setQuestion4Input] = useState(0);
  const [question5Input, setQuestion5Input] = useState(0);
  const [question6Input, setQuestion6Input] = useState(0);
  const [question7Input, setQuestion7Input] = useState(0);
  const [question8Input, setQuestion8Input] = useState(0);
  const [question9Input, setQuestion9Input] = useState(0);
  const [question10Select, setQuestion10Select] = useState(0);
  const [question11Select, setQuestion11Select] = useState(0);

  const [isReductionActionOpened, setReductionActionOpened] = useState(false);

  const handleSwitchReductionActionChange = (isChecked) => {
    setReductionActionOpened(isChecked);
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
      setQuestion1Count(form.getFieldValue("house_question1"));
      setQuestion2Input(form.getFieldValue("house_question2"));
      setQuestion3Input(form.getFieldValue("house_question3"));
      setQuestion4Input(form.getFieldValue("house_question4"));
      setQuestion5Input(form.getFieldValue("house_question5"));
      setQuestion6Input(form.getFieldValue("house_question6"));
      setQuestion7Input(form.getFieldValue("house_question7"));
      setQuestion8Input(form.getFieldValue("house_question8"));
      setQuestion9Input(form.getFieldValue("house_question9"));
      setQuestion10Select(form.getFieldValue("house_question10"));
      setQuestion11Select(form.getFieldValue("house_question11"));
    };

    const setSettingsOfStep = (settingsOfStep) => {
      settingsOfStep.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });

      setReductionActionOpened(form.getFieldValue("lunch-switch-1"));
      console.log(form.getFieldValue("lunch1"));
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
    saveResponsesOfQuestionsStep(housestep1State(values), step);
    saveSettingsStep(house1ActionReductionState(values), step);
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
          <span className="pro-step-title">À la maison</span>
        </div>
        <span className="form-questions-title" style={{ color: mainColor }}>
          Indique tes consommations si tu les connais :
        </span>
        <div className="forms-margin">
          <FormCounter
            form={form}
            name="house_question1"
            textCounter={HOUSE_QUESTION1}
            value={question1Count}
          />
        </div>
        <div className="forms-margin">
          <Overlay
            title={OVERLAY_TITLE_HOUSE}
            items={[
              {
                image: "/images/conseil.png",
                sousText: OVERLAY_SOUSTEXTE_HOUSE,
              },
            ]}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question2"
            tooltipTitle={HOUSE_QUESTION2_TOOTLTIP}
            label={HOUSE_QUESTION2}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question2Input}
            unit={"kWh"}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question3"
            tooltipTitle={HOUSE_QUESTION3_TOOTLTIP}
            label={HOUSE_QUESTION3}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question3Input}
            unit={"kWh PCS"}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question4"
            tooltipTitle={HOUSE_QUESTION4_TOOTLTIP}
            label={HOUSE_QUESTION4}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question4Input}
            unit={"L"}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question5"
            tooltipTitle={HOUSE_QUESTION5_TOOTLTIP}
            label={HOUSE_QUESTION5}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question5Input}
            unit={"kg"}
          />
        </div>
        <div className="forms-margin">
          <span className="form-questions-title" style={{ color: mainColor }}>
            Sinon, indique :
          </span>
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question6"
            tooltipTitle={HOUSE_QUESTION678_TOOTLTIP}
            label={HOUSE_QUESTION6}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question6Input}
            unit={"€/mois"}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question7"
            tooltipTitle={HOUSE_QUESTION678_TOOTLTIP}
            label={HOUSE_QUESTION7}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question7Input}
            unit={"€/mois"}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question8"
            tooltipTitle={HOUSE_QUESTION678_TOOTLTIP}
            label={HOUSE_QUESTION8}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question8Input}
            unit={"€/mois"}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="house_question9"
            tooltipTitle={HOUSE_QUESTION9_TOOTLTIP}
            label={HOUSE_QUESTION9}
            rules={[{ required: false, message: HOUSE_ERROR_MSG }]}
            value={question9Input}
            unit={"m²"}
          />
        </div>
        <div className="forms-margin">
          <FormItemSelect
            form={form}
            name="house_question10"
            label={HOUSE_QUESTION10}
            tooltipTitle={HOUSE_QUESTION10_TOOTLTIP}
            options={optionsClasses}
            value={question10Select}
          />
        </div>
        <div className="forms-margin">
          <FormItemSelect
            form={form}
            name="house_question11"
            label={HOUSE_QUESTION11}
            tooltipTitle={false}
            options={optionsLogement}
            value={question11Select}
          />
        </div>
      </div>
      <div className="forms-margin">
        <FormItemActionReduction
          form={form}
          title="Dejeuners"
          savierVous={HOUSE_SAVIEZ_VOUS}
          saviezVousPosition={1}
          selectDetail={selectDetailLunch}
          switchName="lunch-switch-1"
          setSwitchValue={handleSwitchReductionActionChange}
          isOpened={isReductionActionOpened}
        />
      </div>
    </ConfiguredForm>
  );
}
