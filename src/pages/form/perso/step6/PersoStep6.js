import React, { Fragment, useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import { FormItemWithTwoInputs } from "@components/form/formItemWithTwoInputs/FormItemWithTwoInputs";
import { FormItemMultipleInputNumber } from "@components/form/formItemMultipleInputNumber/FormItemMultipleInputNumber";
import { FormItemCheckboxes } from "@components/form/formItemCheckboxes/FormItemCheckboxes";
import {
  DEPLACEMENTS_QUESTION1,
  DEPLACEMENTS_QUESTION2,
  DEPLACEMENTS_QUESTION3,
  DEPLACEMENTS_QUESTION3_INFO,
  DEPLACEMENTS_QUESTION4,
  DEPLACEMENTS_QUESTION5,
  DEPLACEMENTS_QUESTION6,
  DEPLACEMENTS_QUESTION7,
  DEPLACEMENTS_QUESTION1_ERROR_MSG,
  DEPLACEMENTS_SAVIEZ_VOUS,
  TRANSPORTATION_LABEL,
} from "@utils/constants";
import { scrollToTopOfThePage } from "@hooks/window";
import {
  transportation_options,
  question2_options,
  actionReduction1_selectDetail,
  question4_questions,
  question5_questions,
  actionReduction2_selectDetail,
  question6_questions,
  question7_questions,
  actionReduction3_selectDetail,
  question3_questions,
} from "./step6Config";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { persostep6State } from "./step6State";
import { notify } from "@utils/notification";

// Déplacements
export function PersoStep6({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [render, setRender] = useState(0);
  const [areCarQuestionsVisible, setCarQuestionsVisible] = useState(false);
  const [areTrainQuestionsVisible, setTrainQuestionsVisible] = useState(false);
  const [arePlaneQuestionsVisible, setPlaneQuestionsVisible] = useState(false);

  const [, setQuestion1DefaultValue] = useState();
  const [question3IncomingChoice, setQuestion3IncomingChoice] = useState(
    "gasoline"
  );
  const [isReductionAction1Opened, setReductionAction1Opened] = useState(false);
  const [isReductionAction2Opened, setReductionAction2Opened] = useState(false);
  const [isReductionAction3Opened, setReductionAction3Opened] = useState(false);

  const getValueLessThanQuestionValue = (options, questionValue) => {
    return options.reverse().find(({ value }) => value <= questionValue).value;
  };

  const sumFieldsValuesQuestion5 = (value1, value2, value3) => {
    return value1 + value2 + value3;
  };

  const sum = sumFieldsValuesQuestion5(
    Number(form.getFieldValue("5f55791c16575")) || 0,
    Number(form.getFieldValue("5f55797b8b5f2")) || 0,
    Number(form.getFieldValue("5f55799ed06a0")) || 0
  );

  actionReduction2_selectDetail[0].options = [{ text: "0", value: 0 }];
  for (let i = 1; i <= sum; i++) {
    actionReduction2_selectDetail[0].options.push({ text: `${i}`, value: i });
  }

  const actionAvion = "5f60aac6c60bf";
  if (sum < form.getFieldValue(actionAvion)) {
    const resultat = getValueLessThanQuestionValue(
      actionReduction2_selectDetail[0].options,
      form.getFieldValue(actionAvion)
    );
    form.setFieldsValue({
      [actionAvion]: resultat,
    });
  }

  const handleSwitchReductionAction1Change = (isChecked) => {
    setReductionAction1Opened(isChecked);
  };

  const handleSwitchReductionAction2Change = (isChecked) => {
    setReductionAction2Opened(isChecked);
  };
  const handleSwitchReductionAction3Change = (isChecked) => {
    setReductionAction3Opened(isChecked);
  };

  const getNewChoice = (value) =>
    value === "Essence" || value === "Diesel" ? "gasoline" : "electric";

  useEffect(() => {
    scrollToTopOfThePage();
    const setReponsesOfStep = (stepState) => {
      stepState.questions.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });

      stepState.actions.forEach(({ action, response }) => {
        form.setFieldsValue({
          [action]: response,
        });
      });

      stepState.settings.forEach(({ setting, response }) => {
        form.setFieldsValue({
          [setting]: response,
        });
      });

      setCarQuestionsVisible(
        form.getFieldValue("to-insert").includes("Voiture")
      );
      setTrainQuestionsVisible(
        form.getFieldValue("to-insert").includes("Train")
      );
      setPlaneQuestionsVisible(
        form.getFieldValue("to-insert").includes("Avion")
      );

      setQuestion1DefaultValue(form.getFieldValue("5f5575ba93b32"));
      setQuestion3IncomingChoice(
        getNewChoice(form.getFieldValue("5f5575dc9b4ac"))
      );
      setReductionAction1Opened(
        form.getFieldValue("action-reduction-switch-1")
      );
      setReductionAction2Opened(
        form.getFieldValue("action-reduction-switch-2")
      );
      setReductionAction3Opened(
        form.getFieldValue("action-reduction-switch-3")
      );
    };

    getResponsesOfStep("DEPLACEMENT")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, step]);

  const onFinish = (values) => {
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.disabled = true;

    saveResponsesOfStep(persostep6State(values))
      .then(() => {
        submitButton.disabled = false;
        submitButton.blur();
        setNextStep();
      })
      .catch(() => {
        submitButton.disabled = false;
        notify("Erreur serveur, veuillez réessayer ultérieurement");
      });
  };

  const onChangeQuestion2 = (value) => {
    setQuestion3IncomingChoice(getNewChoice(value));
  };

  const onChange = () => {
    setRender(Math.random);
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
          <span className="pro-step-title">Déplacements personnels</span>
        </div>
      </div>

      <div className="wizard-content-right-form-parent">
        <div className="forms-margin">
          <FormItemCheckboxes
            name="to-insert"
            text={TRANSPORTATION_LABEL}
            options={transportation_options(
              (isChecked) => {
                setCarQuestionsVisible(isChecked);
              },
              (isChecked) => {
                setTrainQuestionsVisible(isChecked);
              },
              (isChecked) => {
                setPlaneQuestionsVisible(isChecked);
              }
            )}
          />
        </div>
      </div>

      {areCarQuestionsVisible && (
        <Fragment>
          <div className="wizard-content-right-form-parent">
            <TitleWithHorizontalLine title="En voiture" />
            <div className="forms-margin">
              <FormItemInputNumberWithUnit
                form={form}
                name="5f5575ba93b32"
                label={DEPLACEMENTS_QUESTION1}
                unit="Km"
                rules={[
                  { required: true, message: DEPLACEMENTS_QUESTION1_ERROR_MSG },
                ]}
                onChange={onChange}
              />
            </div>
            <div className="forms-margin">
              <FormItemSelect
                name="5f5575dc9b4ac"
                label={DEPLACEMENTS_QUESTION2}
                options={question2_options}
                onChange={onChangeQuestion2}
                disabled={false}
              />
            </div>
            <div className="forms-margin">
              <FormItemWithTwoInputs
                form={form}
                label={DEPLACEMENTS_QUESTION3}
                incomingChoice={question3IncomingChoice}
                questions={question3_questions}
                tooltipTitle={DEPLACEMENTS_QUESTION3_INFO}
              />
            </div>
          </div>
          {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
            <div className="forms-margin">
              <FormItemActionReduction
                form={form}
                selectDetail={actionReduction1_selectDetail}
                switchName="action-reduction-switch-1"
                setSwitchValue={handleSwitchReductionAction1Change}
                isOpened={isReductionAction1Opened}
                render={render}
              />
            </div>
          )}
        </Fragment>
      )}
      {areTrainQuestionsVisible && (
        <div className="wizard-content-right-form-parent">
          <div className="forms-margin">
            <TitleWithHorizontalLine title="En train" />
          </div>
          <div className="forms-margin">
            <FormItemMultipleInputNumber
              form={form}
              name="multi1"
              label={DEPLACEMENTS_QUESTION4}
              questions={question4_questions}
            />
          </div>
        </div>
      )}
      {arePlaneQuestionsVisible && (
        <Fragment>
          <div className="wizard-content-right-form-parent">
            <div className="forms-margin">
              <TitleWithHorizontalLine title="En avion" />
            </div>
            <div className="forms-margin">
              <FormItemMultipleInputNumber
                form={form}
                name="multi2"
                label={DEPLACEMENTS_QUESTION5}
                questions={question5_questions}
                onChange={onChange}
              />
            </div>
          </div>
          {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
            <div className="forms-margin">
              <FormItemActionReduction
                form={form}
                selectDetail={actionReduction2_selectDetail}
                switchName="action-reduction-switch-2"
                setSwitchValue={handleSwitchReductionAction2Change}
                isOpened={isReductionAction2Opened}
              />
            </div>
          )}
          <div className="wizard-content-right-form-parent">
            <div className="forms-margin">
              <FormItemMultipleInputNumber
                form={form}
                name="multi3"
                label={DEPLACEMENTS_QUESTION6}
                questions={question6_questions}
              />
            </div>
            <div className="forms-margin">
              <FormItemMultipleInputNumber
                form={form}
                name="multi4"
                label={DEPLACEMENTS_QUESTION7}
                questions={question7_questions}
              />
            </div>
          </div>
          {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
            <div className="forms-margin">
              <FormItemActionReduction
                form={form}
                savierVous={DEPLACEMENTS_SAVIEZ_VOUS}
                saviezVousPosition={0}
                selectDetail={actionReduction3_selectDetail}
                switchName="action-reduction-switch-3"
                setSwitchValue={handleSwitchReductionAction3Change}
                isOpened={isReductionAction3Opened}
              />
            </div>
          )}
        </Fragment>
      )}
    </ConfiguredForm>
  );
}
