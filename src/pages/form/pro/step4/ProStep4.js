import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { proStep4State, proStep4ActionReductionState } from "./ProStep4State";
import {
  DISTANCE_DOMICILE_TRAVAIL,
  DISTANCE_DOMICILE_TRAVAIL_ERROR_MSG,
  MODE_DEPLACEMENT,
  MOTORISATION,
  MOTORISATION_INFOS,
  SAVIER_VOUS_TRAJETS,
} from "@utils/constants";
import {
  saveResponsesOfQuestionsStep,
  getResponsesOfQuestionsOfStep,
  saveSettingsStep,
  getSettingsOfStep,
} from "@services/responseService";

// Trajets
export function ProStep4({ step, setNextStep }) {
  const [form] = Form.useForm();

  const modeDeplacementOptions = [
    { text: "A pied / en vélo", value: "pied-velo" },
    { text: "En vélo électrique", value: "velo-electrique" },
    {
      text: "En trottinette électrique",
      value: "trottinette-electrique",
    },
    { text: "En bus", value: "bus" },
    { text: "En métro/tramway", value: "metro-tramway" },
    { text: "En train/RER", value: "train-rer" },
    {
      text: "En voiture individuelle (conducteur)",
      value: "voiture-individuelle",
    },
    { text: "En covoiturage", value: "covoiturage" },
    { text: "En moto/scooter", value: "moto-scooter" },
    { text: "En taxi", value: "taxi" },
    { text: "En TGV", value: "tgv" },
  ];

  const motorisationOptions = [
    { text: "Essence", value: "essence" },
    { text: "Diesel", value: "diesel" },
    { text: "Electrique", value: "electrique" },
    { text: "GPL", value: "gpl" },
    { text: "Hybride essence", value: "hybride-essence" },
    { text: "Hybride diesel", value: "hybride-diesel" },
  ];

  const actionReductionData = [
    {
      type: "select",
      name: "ar_mode_deplacement",
      options: modeDeplacementOptions,
      firstText: "Changer de mode de déplacement pour se rendre au travail",
      secondText: "",
    },
    {
      type: "input",
      name: "ar_nbr_jours_travail_domicile",
      firstText: "Travailler à domicile",
      secondText: "jours par mois en plus du télétravail actuel",
    },
  ];

  const [switchValue, setSwitchValue] = useState(true);
  const [modeDeplacement, setModeDeplacement] = useState(
    modeDeplacementOptions[0].value
  );

  const handleSwitchChange = (isChecked) => {
    setSwitchValue(isChecked);
  };

  const handleModeDeplacementChange = (mode) => {
    setModeDeplacement(mode);
  };

  useEffect(() => {
    if (modeDeplacement === "pied-velo") {
      setSwitchValue(true);
    }
  }, [modeDeplacement]);

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
      setModeDeplacement(form.getFieldValue("mode_deplacement"));
    };

    const setSettingsOfStep = (settingsOfStep) => {
      settingsOfStep.forEach(({ question, response }) =>
        form.setFieldsValue({
          [question]: response,
        })
      );
      setSwitchValue(form.getFieldValue("trajets-switch-1"));
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
    saveResponsesOfQuestionsStep(proStep4State(values), step);
    saveSettingsStep(proStep4ActionReductionState(values), step);
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.blur();
    setNextStep();
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
          <span className="pro-step-title">Trajets</span>
        </div>

        <FormItemInputNumber
          name="distance"
          label={DISTANCE_DOMICILE_TRAVAIL}
          rules={[
            { required: true, message: DISTANCE_DOMICILE_TRAVAIL_ERROR_MSG },
          ]}
        />

        <div className="forms-margin">
          <FormItemSelect
            name="mode_deplacement"
            label={MODE_DEPLACEMENT}
            options={modeDeplacementOptions}
            onChange={handleModeDeplacementChange}
            disabled={false}
          />
        </div>

        <div className="forms-margin">
          <FormItemSelect
            name="motorisation"
            label={MOTORISATION}
            tooltipTitle={MOTORISATION_INFOS}
            options={motorisationOptions}
            disabled={
              modeDeplacement === "metro-tramway" ||
              modeDeplacement === "train-rer" ||
              modeDeplacement === "tgv"
            }
          />
        </div>
      </div>

      <div className="forms-margin">
        <FormItemActionReduction
          form={form}
          title="Trajets"
          savierVous={SAVIER_VOUS_TRAJETS}
          saviezVousPosition={0}
          selectDetail={actionReductionData}
          switchName="trajets-switch-1"
          setSwitchValue={handleSwitchChange}
          isOpened={switchValue}
        />
      </div>
    </ConfiguredForm>
  );
}
