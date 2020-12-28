import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import { FormItemMultipleInputNumber } from "@components/form/formItemMultipleInputNumber/FormItemMultipleInputNumber";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import { stepState } from "./ProStep5State";
import {
  NBR_KM_VOITURE,
  QUESTION2_NBR_TRAJETS_AR,
  QUESTION3_NBR_TRAJETS_AR,
  QUESTION4_NBR_TRAJETS_AR,
  QUESTION5_NBR_TRAJETS_AR,
  QUESTION6_NBR_TRAJETS_AR,
  QUESTION7_NBR_TRAJETS_AR,
  QUESTION8_NBR_VOLS_AR,
  QUESTION9_NBR_VOLS_AR,
  QUESTION10_NBR_VOLS_AR,
  QUESTION11_NBR_VOLS_AR,
  DEPLACEMENT_MSG_ERROR,
} from "@utils/constants";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { scrollToTopOfThePage } from "@hooks/window";
import {
  question8options,
  question9options,
  question10options,
  question11options,
  actionReductionData,
} from "./ProStep5Config";
import { notify } from "@utils/notification";

// Déplacements
export function ProStep5({ step, setNextStep }) {
  const [form] = Form.useForm();

  const [switchValue, setSwitchValue] = useState(false);

  const handleSwitchChange = (isChecked) => {
    setSwitchValue(isChecked);
  };

  // tarjets AR data pour les champs de saisies
  const trajetsARIndex = [2, 3, 4, 5, 6];
  const trajetsARDynamicProps = [
    {
      label: QUESTION2_NBR_TRAJETS_AR,
      name: "5f5557c81d9d6",
    },
    {
      label: QUESTION3_NBR_TRAJETS_AR,
      name: "5f5557ec74a11",
    },
    {
      label: QUESTION4_NBR_TRAJETS_AR,
      name: "5f555809e50b5",
    },
    {
      label: QUESTION5_NBR_TRAJETS_AR,
      name: "5f5558209ce59",
    },
    {
      label: QUESTION6_NBR_TRAJETS_AR,
      name: "5f55582edaeda",
    },
  ];

  // vols AR data pour les champs multiples
  const volsARIndex = [8, 9, 10, 11];
  const volsARDynamicProps = [
    {
      label: QUESTION8_NBR_VOLS_AR,
      questions: question8options,
    },
    {
      label: QUESTION9_NBR_VOLS_AR,
      questions: question9options,
    },
    {
      label: QUESTION10_NBR_VOLS_AR,
      questions: question10options,
    },
    {
      label: QUESTION11_NBR_VOLS_AR,
      questions: question11options,
    },
  ];

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
      setSwitchValue(form.getFieldValue("deplacement-switch-1"));
    };

    getResponsesOfStep("DEPLACEMENTS_PROFESSIONNELS")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, step]);

  const onFinish = (values) => {
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.disabled = true;

    saveResponsesOfStep(stepState(values))
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
            Déplacements professionnels sur l'année
          </span>
        </div>

        <TitleWithHorizontalLine title="En voiture" />
        <div className="forms-margin">
          <FormItemInputNumber
            name="5f5557936a4cd"
            label={NBR_KM_VOITURE}
            rules={[{ required: true, message: DEPLACEMENT_MSG_ERROR }]}
          />
        </div>
        <div className="forms-margin">
          <TitleWithHorizontalLine title="En train" />
        </div>
        {trajetsARIndex.map((index, key) => (
          <div className="forms-margin" key={key}>
            <FormItemInputNumber {...trajetsARDynamicProps[key]} />
          </div>
        ))}
        <div className="forms-margin">
          <TitleWithHorizontalLine title="En avion" />
        </div>
        <div className="forms-margin">
          <FormItemInputNumber
            label={QUESTION7_NBR_TRAJETS_AR}
            name="5f55584be6d5b"
          />
        </div>
        {volsARIndex.map((index, key) => (
          <div className="forms-margin" key={key}>
            <FormItemMultipleInputNumber
              isRequired={false}
              form={form}
              name={`deplacement-multi-${index}`}
              {...volsARDynamicProps[key]}
            />
          </div>
        ))}
      </div>

      <div className="forms-margin">
        <FormItemActionReduction
          form={form}
          selectDetail={actionReductionData}
          switchName="deplacement-switch-1"
          setSwitchValue={handleSwitchChange}
          isOpened={switchValue}
        />
      </div>
    </ConfiguredForm>
  );
}
