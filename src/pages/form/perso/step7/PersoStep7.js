import React from "react";
import { useHistory } from "react-router-dom";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInput } from "@components/form/formItemInput/FormItemInput";
import { saveResponses } from "@services/responseService";
import { notify } from "@utils/notification";

// Services publics
export function PersoStep7({ step }) {
  const [form] = Form.useForm();
  const history = useHistory();

  const QUESTION1_LABEL =
    "Quote-part des émissions liées aux Services de l'Etat et des collectivités\n" +
    "                          (Santé, Education, Justice, Défense, etc.) (kg éq CO2)";
  const QUESTION1_TOOLTIP =
    "Les émissions du service public dont nous disposons sont réparties\n" +
    "                                  entre tous les français.";

  const onFinish = (values) => {
    saveResponses()
      .then(() => history.push("/results"))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.blur();
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
          name="question1"
          label={QUESTION1_LABEL}
          disabled={true}
          defaultValue="1283,76 kgCO2/citoyen"
          tooltipTitle={QUESTION1_TOOLTIP}
        />
      </div>
    </ConfiguredForm>
  );
}
