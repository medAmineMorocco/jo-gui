import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { Overlay } from "@components/overlay/Overlay";
import { FormSlider } from "@components/form/formSlider/FormSlider";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { stepState } from "./ProStep2State";
import {
  TAILLE_BOITE,
  TAILLE_BOITE_INFO,
  TAILLE_BOITE_ERROR_MSG,
  EMPREINTE_OVERLAY_TITLE,
  TAILLE_STOCKAGE,
  NBR_RECHERCHE,
  NBR_CONFERENCE,
  NBR_STREAMING,
  SAVIER_VOUS_EMPREINTE,
} from "@utils/constants";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { scrollToTopOfThePage } from "@hooks/window";
import {
  QUESTION2_DEFAULT_VALUE,
  overlayItems,
  curseurQuestions,
  actionReductionData,
} from "./ProStep2Config";
import { notify } from "@utils/notification";

// Empreinte numérique
export function ProStep2({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [render, setRender] = useState(0);
  const [switchValue, setSwitchValue] = useState(false);
  const [nbrRecherche, setNbrRecherche] = useState(0);
  const [nbrConference, setNbrConference] = useState(0);
  const [nbrStreaming, setNbrStreaming] = useState(0);

  const handleSwitchChange = (isChecked) => {
    setSwitchValue(isChecked);
  };

  const handleTailleBoite = (taille) => {
    actionReductionData[0].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= taille; i++) {
      actionReductionData[0].options.push({ text: `${i}`, value: i });
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      "5f554eddc68dd": QUESTION2_DEFAULT_VALUE,
    });
  }, [form]);

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
      setSwitchValue(form.getFieldValue("empreinte-switch-1"));
      handleTailleBoite(form.getFieldValue("5f554eb63be47"));
      setNbrRecherche(form.getFieldValue("5f554f1127cec"));
      setNbrConference(form.getFieldValue("5f554f36de849"));
      setNbrStreaming(form.getFieldValue("5f554fb2238b4"));
    };

    getResponsesOfStep("EMPREINTE_NUMERIQUE")
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
          <span className="pro-step-title">Empreinte numérique</span>
        </div>

        <FormItemInputNumber
          name="5f554eb63be47"
          label={TAILLE_BOITE}
          tooltipTitle={TAILLE_BOITE_INFO}
          rules={[{ required: true, message: TAILLE_BOITE_ERROR_MSG }]}
          onChange={handleTailleBoite}
        />

        <div className="forms-margin">
          <Overlay title={EMPREINTE_OVERLAY_TITLE} items={overlayItems} />
        </div>

        <div className="forms-margin">
          <FormItemInputNumber
            name="5f554eddc68dd"
            label={TAILLE_STOCKAGE}
            disabled={true}
          />
        </div>

        <div className="forms-margin nbr-recherche">
          <FormSlider
            form={form}
            labels={NBR_RECHERCHE}
            questions={curseurQuestions(
              "",
              "5f554f1127cec",
              nbrRecherche,
              setNbrRecherche
            )}
          />
        </div>

        <div className="forms-margin nbr-conference">
          <FormSlider
            form={form}
            labels={NBR_CONFERENCE}
            questions={curseurQuestions(
              "",
              "5f554f36de849",
              nbrConference,
              setNbrConference
            )}
          />
        </div>

        <div className="forms-margin nbr-streaming">
          <FormSlider
            form={form}
            labels={NBR_STREAMING}
            questions={curseurQuestions(
              "",
              "5f554fb2238b4",
              nbrStreaming,
              setNbrStreaming
            )}
          />
        </div>
      </div>

      <div className="forms-margin">
        <FormItemActionReduction
          form={form}
          savierVous={SAVIER_VOUS_EMPREINTE}
          saviezVousPosition={0}
          selectDetail={actionReductionData}
          switchName="empreinte-switch-1"
          setSwitchValue={handleSwitchChange}
          isOpened={switchValue}
          render={render}
        />
      </div>
    </ConfiguredForm>
  );
}
