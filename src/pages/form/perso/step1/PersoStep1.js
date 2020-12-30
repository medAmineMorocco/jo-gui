import React, { Fragment, useEffect, useState } from "react";
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
  HOUSE_QUESTION16,
  HOUSE_QUESTION17,
  HOUSE_QUESTION18,
  OVERLAY_TITLE_HOUSE,
  OVERLAY_SOUSTEXTE_HOUSE,
  HOUSE_ERROR_MSG,
  HOUSE_SAVIEZ_VOUS,
  OVERLAY_IMAGE_ALT,
  HOUSE_QUESTION2_TOOLTIP,
  HOUSE_QUESTION4_TOOLTIP,
} from "@utils/constants";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { FormCounter } from "@components/form/formCounter/FormCounter";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import { Overlay } from "@components/overlay/Overlay";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { FormItemRadioButtons } from "@components/form/formItemRadioButtons/FormItemRadioButtons";
import { FormItemCheckboxes } from "@components/form/formItemCheckboxes/FormItemCheckboxes";
import { ElectriqueQuestions } from "./ElectriqueQuestions";
import { GazQuestions } from "./GazQuestions";
import { FioulQuestions } from "./FioulQuestions";
import { BoisQuestions } from "./BoisQuestions";
import {
  optionsClasses,
  selectDetailLunch,
  consommation_options,
  live_in_options,
  consommation_details_options,
  is_renewable_energy_options,
  chauffage_options,
  energy_type_options,
  eau_chaude_energy_type_options,
} from "./step1Config";
import { persostep1State } from "./step1State";
import { notify } from "@utils/notification";

// À la maison
export function PersoStep1({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [render, setRender] = useState(0);
  const [question1Count, setQuestion1Count] = useState(0);
  const [question9Input, setQuestion9Input] = useState(0);
  const [question10Select, setQuestion10Select] = useState(0);
  const [isReductionActionOpened, setReductionActionOpened] = useState(false);

  const [
    areConsommationQuestionsVisible,
    setConsommationQuestionsVisible,
  ] = useState();
  const [
    areElectriqueQuestionsVisible,
    setElectriqueQuestionsVisible,
  ] = useState(false);
  const [areGazQuestionsVisible, setGazQuestionsVisible] = useState(false);
  const [areFioulQuestionsVisible, setFioulQuestionsVisible] = useState(false);
  const [areBoisQuestionsVisible, setBoisQuestionsVisible] = useState(false);

  const [selectedChauffage, setSelectedChauffage] = useState();

  const handleSwitchReductionActionChange = (isChecked) => {
    setReductionActionOpened(isChecked);
  };

  const onChange = () => {
    setRender(Math.random);
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
        setReductionActionOpened(form.getFieldValue("lunch-switch-1"));
      }

      setQuestion1Count(form.getFieldValue("5f555eea00a7c"));
      setQuestion9Input(form.getFieldValue("5f556050d0a88"));
      setQuestion10Select(form.getFieldValue("5f55608002862"));

      setConsommationQuestionsVisible(form.getFieldValue("5fe30bac50656"));
      if (form.getFieldValue("5fe30b3a5a6b4")) {
        setElectriqueQuestionsVisible(
          form.getFieldValue("5fe30b3a5a6b4").includes("Electrique")
        );
        setGazQuestionsVisible(
          form.getFieldValue("5fe30b3a5a6b4").includes("Gaz")
        );
        setFioulQuestionsVisible(
          form.getFieldValue("5fe30b3a5a6b4").includes("Fioul")
        );
        setBoisQuestionsVisible(
          form.getFieldValue("5fe30b3a5a6b4").includes("Bois")
        );
      }

      setSelectedChauffage(form.getFieldValue("5fe468b6e6a06"));
    };

    getResponsesOfStep("MAISON")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, step]);

  const onFinish = (values) => {
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.disabled = true;

    saveResponsesOfStep(persostep1State(values))
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
          <span className="pro-step-title">Logement</span>
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            name="5f555eea00a7c"
            textCounter={HOUSE_QUESTION1}
            value={question1Count}
            setValue={setQuestion1Count}
          />
        </div>

        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f556050d0a88"
            label={HOUSE_QUESTION2}
            tooltipTitle={HOUSE_QUESTION2_TOOLTIP}
            rules={[{ required: true, message: HOUSE_ERROR_MSG }]}
            value={question9Input}
            unit={"m²"}
            onChange={onChange}
          />
        </div>

        <div className="forms-margin">
          <FormItemRadioButtons
            form={form}
            label={HOUSE_QUESTION3}
            name="5fe305634e6f2"
            options={live_in_options}
            isMultipleSelection={false}
            onChange={() => console.log("change")}
          />
        </div>

        <div className="forms-margin">
          <FormItemSelect
            form={form}
            name="5f55608002862"
            label={HOUSE_QUESTION4}
            tooltipTitle={HOUSE_QUESTION4_TOOLTIP}
            options={optionsClasses}
            value={question10Select}
            suffix={"kW EP/m²"}
          />
        </div>

        <div className="forms-margin">
          <FormItemRadioButtons
            form={form}
            label={HOUSE_QUESTION5}
            name="5fe30bac50656"
            options={consommation_details_options}
            isMultipleSelection={false}
            onChange={(isChecked) => {
              setConsommationQuestionsVisible(isChecked);
              setElectriqueQuestionsVisible(false);
              setGazQuestionsVisible(false);
              setFioulQuestionsVisible(false);
              setBoisQuestionsVisible(false);
              setSelectedChauffage(null);
            }}
          />
        </div>

        {areConsommationQuestionsVisible === false && (
          <div className="forms-margin">
            <FormItemRadioButtons
              form={form}
              label={HOUSE_QUESTION6}
              name="5fe46949b764d"
              options={is_renewable_energy_options}
              isMultipleSelection={false}
              onChange={() => console.log("change")}
            />
          </div>
        )}

        {areConsommationQuestionsVisible && (
          <Fragment>
            <div className="forms-margin">
              <FormItemCheckboxes
                form={form}
                name="5fe30b3a5a6b4"
                text={HOUSE_QUESTION7}
                options={consommation_options(
                  (isChecked) => {
                    setElectriqueQuestionsVisible(isChecked);
                  },
                  (isChecked) => {
                    setGazQuestionsVisible(isChecked);
                  },
                  (isChecked) => {
                    setFioulQuestionsVisible(isChecked);
                  },
                  (isChecked) => {
                    setBoisQuestionsVisible(isChecked);
                  }
                )}
              />
            </div>

            {areElectriqueQuestionsVisible && (
              <ElectriqueQuestions form={form} />
            )}

            {areGazQuestionsVisible && <GazQuestions form={form} />}

            {areFioulQuestionsVisible && <FioulQuestions form={form} />}

            {areBoisQuestionsVisible && <BoisQuestions form={form} />}

            <Fragment>
              <div className="forms-margin">
                <FormItemRadioButtons
                  form={form}
                  label={HOUSE_QUESTION16}
                  name="5fe468b6e6a06"
                  options={chauffage_options}
                  isMultipleSelection={false}
                  onChange={(checked) => setSelectedChauffage(checked)}
                />
              </div>

              {(selectedChauffage === "chauffage_collectif" ||
                selectedChauffage === "les_deux") && (
                <div className="forms-margin">
                  <FormItemRadioButtons
                    form={form}
                    label={HOUSE_QUESTION17}
                    name="5fec50d0b6047"
                    options={energy_type_options}
                    isMultipleSelection={false}
                    onChange={() => console.log("change")}
                  />
                </div>
              )}

              {(selectedChauffage === "eau_chaude_collective" ||
                selectedChauffage === "les_deux") && (
                <div className="forms-margin">
                  <FormItemRadioButtons
                    form={form}
                    label={HOUSE_QUESTION18}
                    name="5fec531f4416c"
                    options={eau_chaude_energy_type_options}
                    isMultipleSelection={false}
                    onChange={() => console.log("change")}
                  />
                </div>
              )}
            </Fragment>
          </Fragment>
        )}

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
      </div>
      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            savierVous={HOUSE_SAVIEZ_VOUS}
            saviezVousPosition={1}
            selectDetail={selectDetailLunch}
            switchName="lunch-switch-1"
            setSwitchValue={handleSwitchReductionActionChange}
            isOpened={isReductionActionOpened}
            render={render}
          />
        </div>
      )}
    </ConfiguredForm>
  );
}
