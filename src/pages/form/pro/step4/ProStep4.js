import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { stepState } from "./ProStep4State";
import {
  DISTANCE_DOMICILE_TRAVAIL,
  DISTANCE_DOMICILE_TRAVAIL_ERROR_MSG,
  MODE_DEPLACEMENT,
  MOTORISATION,
  MOTORISATION_INFOS,
  SAVIER_VOUS_TRAJETS,
} from "@utils/constants";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { scrollToTopOfThePage } from "@hooks/window";
import {
  modeDeplacementOptions,
  motorisationOptions,
  actionReductionData,
  electricTravelModes,
} from "./ProStep4Config";
import { notify } from "@utils/notification";

// Trajets Domicile-travail
export function ProStep4({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [switchValue, setSwitchValue] = useState(false);
  const [modeDeplacement, setModeDeplacement] = useState(
    modeDeplacementOptions[0].value
  );
  const [motorisationOptionsState, setMotorisationOptionsState] = useState(
    motorisationOptions
  );

  const handleSwitchChange = (isChecked) => {
    setSwitchValue(isChecked);
  };

  const handleModeDeplacementChange = (mode) => {
    const motorisationName = "5f555681b8e00";
    const actionDeplacement = "5f60a09bc059e";
    setModeDeplacement(mode);
    if (electricTravelModes.includes(mode)) {
      setMotorisationOptionsState([
        { text: "Électrique", value: "electrique" },
      ]);
      form.setFieldsValue({
        [motorisationName]: "electrique",
      });
      actionReductionData[0].disabled = false;
    } else if (mode === "pied-velo") {
      actionReductionData[0].disabled = true;
      form.setFieldsValue({
        [actionDeplacement]: "pied-velo",
      });
    } else {
      setMotorisationOptionsState(motorisationOptions);
      actionReductionData[0].disabled = false;
    }
  };

  useEffect(() => {
    if (modeDeplacement === "pied-velo") {
      actionReductionData[0].disabled = true;
    } else if (electricTravelModes.includes(modeDeplacement)) {
      setMotorisationOptionsState([
        { text: "Électrique", value: "electrique" },
      ]);
      actionReductionData[0].disabled = false;
    }
  }, [modeDeplacement]);

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
        setSwitchValue(form.getFieldValue("trajets-switch-1"));
      }

      setModeDeplacement(form.getFieldValue("5f55561b34276"));
    };

    getResponsesOfStep("TRAJETS_DOMICILE_TRAVAIL")
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
      basicInputs={["without"]}
    >
      <div className="wizard-content-right-form-parent">
        <div className="pro-step-title-container">
          <span className="pro-step-title">Déplacements Domicile-Travail</span>
        </div>

        <FormItemInputNumber
          form={form}
          name="5f55554022dc3"
          label={DISTANCE_DOMICILE_TRAVAIL}
          rules={[
            { required: true, message: DISTANCE_DOMICILE_TRAVAIL_ERROR_MSG },
          ]}
        />

        <div className="forms-margin">
          <FormItemSelect
            name="5f55561b34276"
            label={MODE_DEPLACEMENT}
            options={modeDeplacementOptions}
            onChange={handleModeDeplacementChange}
            disabled={false}
          />
        </div>

        <div className="forms-margin">
          <FormItemSelect
            name="5f555681b8e00"
            label={MOTORISATION}
            tooltipTitle={MOTORISATION_INFOS}
            options={motorisationOptionsState}
            disabled={modeDeplacement === "pied-velo"}
          />
        </div>
      </div>

      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            savierVous={SAVIER_VOUS_TRAJETS}
            saviezVousPosition={0}
            selectDetail={actionReductionData}
            switchName="trajets-switch-1"
            setSwitchValue={handleSwitchChange}
            isOpened={switchValue}
          />
        </div>
      )}
    </ConfiguredForm>
  );
}
