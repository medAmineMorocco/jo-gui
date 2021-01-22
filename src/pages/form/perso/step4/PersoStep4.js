import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemMultipleInputNumber } from "@components/form/formItemMultipleInputNumber/FormItemMultipleInputNumber";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { scrollToTopOfThePage } from "@hooks/window";
import {
  question1_questions,
  question2_questions,
  selectDetail,
} from "./step4Config";
import {
  NUMERIC_QUESTION1_LABEL,
  NUMERIC_QUESTION1_TOOLTIP,
  NUMERIC_QUESTION2_LABEL,
  NUMERIC_QUESTION2_TOOLTIP,
  NUMERIC_SAVIEZ_VOUS,
} from "@utils/constants";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { persostep4State } from "./step4State";
import { notify } from "@utils/notification";

// Numérique
export function PersoStep4({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [isReductionAction1Opened, setReductionAction1Opened] = useState(false);

  const handleSwitchReductionAction1Change = (isChecked) => {
    setReductionAction1Opened(isChecked);
  };

  useEffect(() => {
    scrollToTopOfThePage();
    const setReponsesOfStep = (stepState) => {
      stepState.questions.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });

      if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true") {
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
        setReductionAction1Opened(form.getFieldValue("numerique-switch-1"));
      }
    };

    getResponsesOfStep("NUMERIQUE")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, step]);

  const onFinish = (values) => {
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.disabled = true;

    saveResponsesOfStep(persostep4State(values))
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

  return (
    <ConfiguredForm
      id={step}
      form={form}
      onFinish={onFinish}
      onFinishFailed={() => console.log("onFinishFailed")}
    >
      <div className="wizard-content-right-form-parent">
        <div className="pro-step-title-container">
          <span className="pro-step-title">
            Utilisation du numérique (perso)
          </span>
        </div>

        <div className="forms-margin">
          <FormItemMultipleInputNumber
            form={form}
            name="question_1"
            label={NUMERIC_QUESTION1_LABEL}
            questions={question1_questions}
            tooltipTitle={NUMERIC_QUESTION1_TOOLTIP}
          />
        </div>

        <div className="forms-margin">
          <FormItemMultipleInputNumber
            form={form}
            name="question_2"
            label={NUMERIC_QUESTION2_LABEL}
            tooltipTitle={NUMERIC_QUESTION2_TOOLTIP}
            questions={question2_questions}
          />
        </div>
      </div>

      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            savierVous={NUMERIC_SAVIEZ_VOUS}
            saviezVousPosition={0}
            selectDetail={selectDetail}
            switchName="numerique-switch-1"
            setSwitchValue={handleSwitchReductionAction1Change}
            isOpened={isReductionAction1Opened}
          />
        </div>
      )}
    </ConfiguredForm>
  );
}
