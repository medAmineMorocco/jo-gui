import React, { Fragment, useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import { FormItemMultipleInputNumber } from "@components/form/formItemMultipleInputNumber/FormItemMultipleInputNumber";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import { FormItemRadioButtons } from "@components/form/formItemRadioButtons/FormItemRadioButtons";
import { FormItemCheckboxes } from "@components/form/formItemCheckboxes/FormItemCheckboxes";
import { Overlay } from "@components/overlay/Overlay";
import { stepState } from "./ProStep5State";
import {
  DEPLACEMENTS_PROFESSIONNEL_OVERLAY_TITLE,
  MAKE_TRANSPORTATION_LABEL,
  TRANSPORTATION_PRO_LABEL,
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
  overlay_items,
  make_transportation_options,
  transportation_options,
  question8options,
  question9options,
  question10options,
  question11options,
  actionReductionData,
} from "./ProStep5Config";
import { notify } from "@utils/notification";

// Déplacements professionnels
export function ProStep5({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [switchValue, setSwitchValue] = useState(false);
  const [
    isTransportationQuestionShown,
    setTransportationQuestionShown,
  ] = useState(false);
  const [areCarQuestionsVisible, setCarQuestionsVisible] = useState(false);
  const [areTrainQuestionsVisible, setTrainQuestionsVisible] = useState(false);
  const [arePlaneQuestionsVisible, setPlaneQuestionsVisible] = useState(false);

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
        setSwitchValue(form.getFieldValue("deplcament-pro-switch-1"));
      }

      setTransportationQuestionShown(form.getFieldValue("5fe088069900b"));

      if (form.getFieldValue("5fe088aa8d674")) {
        setCarQuestionsVisible(
          form.getFieldValue("5fe088aa8d674").includes("Voiture")
        );
        setTrainQuestionsVisible(
          form.getFieldValue("5fe088aa8d674").includes("Train")
        );
        setPlaneQuestionsVisible(
          form.getFieldValue("5fe088aa8d674").includes("Avion")
        );
      }
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

  const onIsTransportationChange = (checkedValue) => {
    setTransportationQuestionShown(checkedValue);
    if (!checkedValue) {
      setCarQuestionsVisible(false);
      setTrainQuestionsVisible(false);
      setPlaneQuestionsVisible(false);
    }
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
          <span className="pro-step-title">Déplacements Professionnels</span>
        </div>

        <div className="forms-margin">
          <FormItemRadioButtons
            form={form}
            label={MAKE_TRANSPORTATION_LABEL}
            name="5fe088069900b"
            options={make_transportation_options}
            isMultipleSelection={false}
            onChange={onIsTransportationChange}
          />
        </div>

        {isTransportationQuestionShown && (
          <div className="forms-margin">
            <FormItemCheckboxes
              form={form}
              name="5fe088aa8d674"
              text={TRANSPORTATION_PRO_LABEL}
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
            <Overlay
              title={DEPLACEMENTS_PROFESSIONNEL_OVERLAY_TITLE}
              items={overlay_items}
            />
          </div>
        )}
      </div>
      {areCarQuestionsVisible && (
        <div className="wizard-content-right-form-parent">
          <TitleWithHorizontalLine title="En voiture" />
          <div className="forms-margin">
            <FormItemInputNumber
              form={form}
              name="5f5557936a4cd"
              label={NBR_KM_VOITURE}
              rules={[{ required: true, message: DEPLACEMENT_MSG_ERROR }]}
            />
          </div>
        </div>
      )}

      {areTrainQuestionsVisible && (
        <div className="wizard-content-right-form-parent">
          <div className="forms-margin">
            <TitleWithHorizontalLine title="En train" />
          </div>
          {trajetsARIndex.map((index, key) => (
            <div className="forms-margin" key={key}>
              <FormItemInputNumber
                form={form}
                {...trajetsARDynamicProps[key]}
              />
            </div>
          ))}
        </div>
      )}

      {arePlaneQuestionsVisible && (
        <Fragment>
          <div className="wizard-content-right-form-parent">
            <div className="forms-margin">
              <TitleWithHorizontalLine title="En avion" />
            </div>
            <div className="forms-margin">
              <FormItemInputNumber
                form={form}
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

          {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
            <div className="forms-margin">
              <FormItemActionReduction
                form={form}
                selectDetail={actionReductionData}
                switchName="deplcament-pro-switch-1"
                setSwitchValue={handleSwitchChange}
                isOpened={switchValue}
              />
            </div>
          )}
        </Fragment>
      )}
    </ConfiguredForm>
  );
}
