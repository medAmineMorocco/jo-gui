import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { scrollToTopOfThePage } from "@hooks/window";
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
  OVERLAY_IMAGE_ALT,
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

// À la maison
export function PersoStep1({ step, setNextStep }) {
  const mainColor = getColor("--main-color");
  const [form] = Form.useForm();
  const [render, setRender] = useState(0);
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

  const [isQuestion2Disabled, setIsQuestion2Disabled] = useState(false);
  const [isQuestion3Disabled, setIsQuestion3Disabled] = useState(false);
  const [isQuestion4Disabled, setIsQuestion4Disabled] = useState(false);
  const [isQuestion6Disabled, setIsQuestion6Disabled] = useState(false);
  const [isQuestion7Disabled, setIsQuestion7Disabled] = useState(false);
  const [isQuestion8Disabled, setIsQuestion8Disabled] = useState(false);

  const handleSwitchReductionActionChange = (isChecked) => {
    setReductionActionOpened(isChecked);
  };

  const onChange = () => {
    setRender(Math.random);
  };

  const isQuestionValid = (questionId) => {
    const question = form.getFieldValue(questionId);
    return question === null || question === undefined;
  };

  const onchangeQuestion2And6Value = () => {
    onChange();
    if (isQuestionValid("5f555f180a442") && isQuestionValid("5f7f230d75c78")) {
      setIsQuestion2Disabled(false);
      setIsQuestion6Disabled(false);
    } else if (
      isQuestionValid("5f555f180a442") &&
      !isQuestionValid("5f7f230d75c78")
    ) {
      setIsQuestion2Disabled(true);
      setIsQuestion6Disabled(false);
    } else {
      setIsQuestion2Disabled(false);
      setIsQuestion6Disabled(true);
    }
  };

  const onchangeQuestion3And7Value = () => {
    onChange();
    if (isQuestionValid("5f555f8af3776") && isQuestionValid("5f7f2382ba8a0")) {
      setIsQuestion3Disabled(false);
      setIsQuestion7Disabled(false);
    } else if (
      isQuestionValid("5f555f8af3776") &&
      !isQuestionValid("5f7f2382ba8a0")
    ) {
      setIsQuestion3Disabled(true);
      setIsQuestion7Disabled(false);
    } else {
      setIsQuestion3Disabled(false);
      setIsQuestion7Disabled(true);
    }
  };

  const onchangeQuestion4And8Value = () => {
    onChange();
    if (isQuestionValid("5f555faf640d3") && isQuestionValid("5f7f23ce239c1")) {
      setIsQuestion4Disabled(false);
      setIsQuestion8Disabled(false);
    } else if (
      isQuestionValid("5f555faf640d3") &&
      !isQuestionValid("5f7f23ce239c1")
    ) {
      setIsQuestion4Disabled(true);
      setIsQuestion8Disabled(false);
    } else {
      setIsQuestion4Disabled(false);
      setIsQuestion8Disabled(true);
    }
  };

  useEffect(() => {
    scrollToTopOfThePage();

    const isQuestionValid = (questionId) => {
      const question = form.getFieldValue(questionId);
      return question === null || question === undefined;
    };

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
      setQuestion1Count(form.getFieldValue("5f555eea00a7c"));
      setQuestion2Input(form.getFieldValue("5f555f180a442"));
      setQuestion3Input(form.getFieldValue("5f555f8af3776"));
      setQuestion4Input(form.getFieldValue("5f555faf640d3"));
      setQuestion5Input(form.getFieldValue("5f55600ed2c60"));
      setQuestion6Input(form.getFieldValue("5f7f230d75c78"));
      setQuestion7Input(form.getFieldValue("5f7f2382ba8a0"));
      setQuestion8Input(form.getFieldValue("5f7f23ce239c1"));
      setQuestion9Input(form.getFieldValue("5f556050d0a88"));
      setQuestion10Select(form.getFieldValue("5f55608002862"));
      setQuestion11Select(form.getFieldValue("5f55609bdcaae"));

      if (
        isQuestionValid("5f555f180a442") &&
        !isQuestionValid("5f7f230d75c78")
      ) {
        setIsQuestion2Disabled(true);
        setIsQuestion6Disabled(false);
      } else if (
        !isQuestionValid("5f555f180a442") &&
        isQuestionValid("5f7f230d75c78")
      ) {
        setIsQuestion2Disabled(false);
        setIsQuestion6Disabled(true);
      }

      if (
        isQuestionValid("5f555f8af3776") &&
        !isQuestionValid("5f7f2382ba8a0")
      ) {
        setIsQuestion3Disabled(true);
        setIsQuestion7Disabled(false);
      } else if (
        !isQuestionValid("5f555f8af3776") &&
        isQuestionValid("5f7f2382ba8a0")
      ) {
        setIsQuestion3Disabled(false);
        setIsQuestion7Disabled(true);
      }

      if (
        isQuestionValid("5f555faf640d3") &&
        !isQuestionValid("5f7f23ce239c1")
      ) {
        setIsQuestion4Disabled(true);
        setIsQuestion8Disabled(false);
      } else if (
        !isQuestionValid("5f555faf640d3") &&
        isQuestionValid("5f7f23ce239c1")
      ) {
        setIsQuestion4Disabled(false);
        setIsQuestion8Disabled(true);
      }
    };

    const setSettingsOfStep = (settingsOfStep) => {
      settingsOfStep.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });

      setReductionActionOpened(form.getFieldValue("lunch-switch-1"));
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
          Si tu les connais, indique tes consommations :
        </span>
        <div className="forms-margin">
          <FormCounter
            form={form}
            name="5f555eea00a7c"
            textCounter={HOUSE_QUESTION1}
            value={question1Count}
          />
        </div>
        <div className="forms-margin">
          <div className="overlay-house">
            <Overlay
              title={OVERLAY_TITLE_HOUSE}
              items={[
                {
                  image: "/images/conseil.png",
                  alt: OVERLAY_IMAGE_ALT,
                  sousText: [
                    "Encore plus de conseils pratiques sur : ",
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "black" }}
                      href={OVERLAY_SOUSTEXTE_HOUSE}
                    >
                      {OVERLAY_SOUSTEXTE_HOUSE}
                    </a>,
                    " (ADEME, 2020)",
                  ],
                },
              ]}
            />
          </div>
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f555f180a442"
            tooltipTitle={HOUSE_QUESTION2_TOOTLTIP}
            label={HOUSE_QUESTION2}
            rules={[
              { required: !isQuestion2Disabled, message: HOUSE_ERROR_MSG },
            ]}
            value={question2Input}
            unit={"kWh"}
            onChange={onchangeQuestion2And6Value}
            disabled={isQuestion2Disabled}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f555f8af3776"
            tooltipTitle={HOUSE_QUESTION3_TOOTLTIP}
            label={HOUSE_QUESTION3}
            rules={[
              { required: !isQuestion3Disabled, message: HOUSE_ERROR_MSG },
            ]}
            value={question3Input}
            unit={"kWh PCS"}
            onChange={onchangeQuestion3And7Value}
            disabled={isQuestion3Disabled}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f555faf640d3"
            tooltipTitle={HOUSE_QUESTION4_TOOTLTIP}
            label={HOUSE_QUESTION4}
            rules={[
              { required: !isQuestion4Disabled, message: HOUSE_ERROR_MSG },
            ]}
            value={question4Input}
            unit={"L"}
            onChange={onchangeQuestion4And8Value}
            disabled={isQuestion4Disabled}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f55600ed2c60"
            tooltipTitle={HOUSE_QUESTION5_TOOTLTIP}
            label={HOUSE_QUESTION5}
            rules={[{ required: true, message: HOUSE_ERROR_MSG }]}
            value={question5Input}
            unit={"kg"}
            onChange={onChange}
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
            name="5f7f230d75c78"
            tooltipTitle={HOUSE_QUESTION678_TOOTLTIP}
            label={HOUSE_QUESTION6}
            rules={[
              { required: !isQuestion6Disabled, message: HOUSE_ERROR_MSG },
            ]}
            value={question6Input}
            unit={"€/mois"}
            onChange={onchangeQuestion2And6Value}
            disabled={isQuestion6Disabled}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f7f2382ba8a0"
            tooltipTitle={HOUSE_QUESTION678_TOOTLTIP}
            label={HOUSE_QUESTION7}
            rules={[
              { required: !isQuestion7Disabled, message: HOUSE_ERROR_MSG },
            ]}
            value={question7Input}
            unit={"€/mois"}
            onChange={onchangeQuestion3And7Value}
            disabled={isQuestion7Disabled}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f7f23ce239c1"
            tooltipTitle={HOUSE_QUESTION678_TOOTLTIP}
            label={HOUSE_QUESTION8}
            rules={[
              { required: !isQuestion8Disabled, message: HOUSE_ERROR_MSG },
            ]}
            value={question8Input}
            unit={"€/mois"}
            onChange={onchangeQuestion4And8Value}
            disabled={isQuestion8Disabled}
          />
        </div>
        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f556050d0a88"
            tooltipTitle={HOUSE_QUESTION9_TOOTLTIP}
            label={HOUSE_QUESTION9}
            rules={[{ required: true, message: HOUSE_ERROR_MSG }]}
            value={question9Input}
            unit={"m²"}
            onChange={onChange}
          />
        </div>
        <div className="forms-margin">
          <FormItemSelect
            form={form}
            name="5f55608002862"
            label={HOUSE_QUESTION10}
            tooltipTitle={HOUSE_QUESTION10_TOOTLTIP}
            options={optionsClasses}
            value={question10Select}
            suffix={"kW EP/m²"}
          />
        </div>
        <div className="forms-margin">
          <FormItemSelect
            form={form}
            name="5f55609bdcaae"
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
          title="Consommation énergétique"
          savierVous={HOUSE_SAVIEZ_VOUS}
          saviezVousPosition={1}
          selectDetail={selectDetailLunch}
          switchName="lunch-switch-1"
          setSwitchValue={handleSwitchReductionActionChange}
          isOpened={isReductionActionOpened}
          render={render}
        />
      </div>
    </ConfiguredForm>
  );
}
