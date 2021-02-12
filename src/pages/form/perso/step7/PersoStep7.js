import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInput } from "@components/form/formItemInput/FormItemInput";
import { notify } from "@utils/notification";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { persostep7State } from "./step7State";
import { scrollToTopOfThePage } from "@hooks/window";

// Services publics
export function PersoStep7({ step }) {
  const [form] = Form.useForm();
  const history = useHistory();

  const QUESTION1_LABEL =
    "Chaque français partage les émissions générées par les Services de l'Etat et des collectivités (Santé, Education, Justice, Défense, etc…). Elle s'ajoute à votre empreinte carbone :";
  useEffect(() => {
    scrollToTopOfThePage();
    const setReponsesOfStep = (stepState) => {
      stepState.questions.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });
    };

    getResponsesOfStep("SERVICES")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, step]);

  const onFinish = (values) => {
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.disabled = true;

    saveResponsesOfStep(persostep7State(values))
      .then(() => {
        history.push("/results");
        submitButton.disabled = false;
        submitButton.blur();
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
          <span className="pro-step-title">Services publics</span>
        </div>
        <FormItemInput
          form={form}
          name="5f557a78e938b"
          label={QUESTION1_LABEL}
          disabled={true}
          defaultValue="1283,76 kgCO₂/citoyen"
          tooltipTitle={false}
        />
      </div>
    </ConfiguredForm>
  );
}
