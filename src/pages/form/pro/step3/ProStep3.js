import { Form } from "antd";
import React, { useEffect, useState } from "react";
import { scrollToTopOfThePage } from "@hooks/window";
import { Form as ConfiguredForm } from "@components/form/Form";
import { ReactComponent as TeaSvg } from "@components/form/formSlider/tea.svg";
import { ReactComponent as CapsuleSvg } from "@components/form/formSlider/capsule.svg";
import { ReactComponent as CoffeeSvg } from "@components/form/formSlider/coffee.svg";
import { ReactComponent as MeatSvg } from "@components/form/formSlider/meat.svg";
import { ReactComponent as ChickenSvg } from "@components/form/formSlider/chicken.svg";
import { ReactComponent as VegetablesSvg } from "@components/form/formSlider/vegetables.svg";
import { ReactComponent as FishSvg } from "@components/form/formSlider/fish.svg";
import { ReactComponent as EggSvg } from "@components/form/formSlider/egg.svg";
import { FormSlider } from "@components/form/formSlider/FormSlider";
import { stepState } from "./ProStep3State";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import {
  REPAS_QUESTION1,
  SAVIER_VOUS_RESTAU,
  CURSEUR_BOISSONS,
} from "@utils/constants";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import {
  actionReductionDataDejeuners,
  curseurQuestion,
  actionReductionDataCafe,
} from "./ProStep3Config";
import { notify } from "@utils/notification";

// Restauration
export function ProStep3({ step, setNextStep }) {
  const [form] = Form.useForm();

  const [render, setRender] = useState(0);
  const [switch1Value, setSwitch1Value] = useState(false);
  const [switch2Value, setSwitch2Value] = useState(false);

  const [slider1Value, setSlider1Value] = useState(0);
  const [slider1Max, setSlider1Max] = useState(5);
  const [slider2Value, setSlider2Value] = useState(0);
  const [slider2Max, setSlider2Max] = useState(5);
  const [slider3Value, setSlider3Value] = useState(0);
  const [slider3Max, setSlider3Max] = useState(5);
  const [slider4Value, setSlider4Value] = useState(0);
  const [slider4Max, setSlider4Max] = useState(5);
  const [slider5Value, setSlider5Value] = useState(0);
  const [slider5Max, setSlider5Max] = useState(5);

  const [slider6Value, setSlider6Value] = useState(0);
  const [slider7Value, setSlider7Value] = useState(0);
  const [slider8Value, setSlider8Value] = useState(0);

  const handleSwitch1Change = (isChecked) => {
    setSwitch1Value(isChecked);
  };

  const handleSwitch2Change = (isChecked) => {
    setSwitch2Value(isChecked);
  };

  useEffect(() => {
    const getSliderMaxValues = (val1 = 0, val2 = 0, val3 = 0, val4 = 0) => {
      const result = 5 - val1 - val2 - val3 - val4;
      return result < 0 ? 0 : result;
    };

    setSlider1Max(
      getSliderMaxValues(slider2Value, slider3Value, slider4Value, slider5Value)
    );
    setSlider2Max(
      getSliderMaxValues(slider1Value, slider3Value, slider4Value, slider5Value)
    );
    setSlider3Max(
      getSliderMaxValues(slider1Value, slider2Value, slider4Value, slider5Value)
    );
    setSlider4Max(
      getSliderMaxValues(slider1Value, slider2Value, slider3Value, slider5Value)
    );
    setSlider5Max(
      getSliderMaxValues(slider1Value, slider2Value, slider3Value, slider4Value)
    );
  }, [slider1Value, slider2Value, slider3Value, slider4Value, slider5Value]);

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
        setSwitch1Value(form.getFieldValue("restauration-switch-1"));
        setSwitch2Value(form.getFieldValue("restauration-switch-2"));
      }

      setSlider1Value(form.getFieldValue("5f55500f273e7"));
      setSlider2Value(form.getFieldValue("5f5550293a164"));
      setSlider3Value(form.getFieldValue("5fe08273352c1"));
      setSlider4Value(form.getFieldValue("5f5550530eaf3"));
      setSlider5Value(form.getFieldValue("5fe08462b666d"));
      setSlider6Value(form.getFieldValue("5f5550724626b"));
      setSlider7Value(form.getFieldValue("5f55508b92e6c"));
      setSlider8Value(form.getFieldValue("5f5550b00730d"));
    };

    getResponsesOfStep("RESTAURATION")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() =>
        notify("Erreur serveur, veuillez réessayer ultérieurement :(")
      );
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
          <span className="pro-step-title">Restauration au bureau</span>
        </div>

        <div className="nombres-repas">
          <FormSlider
            form={form}
            labels={REPAS_QUESTION1}
            questions={[
              curseurQuestion(
                "",
                "5f55500f273e7",
                <MeatSvg />,
                slider1Max,
                slider1Value,
                setSlider1Value
              ),
              curseurQuestion(
                "",
                "5f5550293a164",
                <ChickenSvg />,
                slider2Max,
                slider2Value,
                setSlider2Value
              ),
              curseurQuestion(
                "",
                "5fe08273352c1",
                <FishSvg />,
                slider3Max,
                slider3Value,
                setSlider3Value
              ),
              curseurQuestion(
                "",
                "5f5550530eaf3",
                <EggSvg />,
                slider4Max,
                slider4Value,
                setSlider4Value
              ),
              curseurQuestion(
                "",
                "5fe08462b666d",
                <VegetablesSvg />,
                slider5Max,
                slider5Value,
                setSlider5Value
              ),
            ]}
            isInline={true}
          />
        </div>
      </div>

      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            savierVous={SAVIER_VOUS_RESTAU}
            saviezVousPosition={-1}
            selectDetail={actionReductionDataDejeuners}
            switchName="restauration-switch-1"
            setSwitchValue={handleSwitch1Change}
            isOpened={switch1Value}
          />
        </div>
      )}

      <div className="wizard-content-right-form-parent">
        <div className="forms-margin boissons-chaudes">
          <FormSlider
            form={form}
            labels={CURSEUR_BOISSONS}
            questions={[
              curseurQuestion(
                "Café en capsule",
                "5f5550724626b",
                <CapsuleSvg />,
                10,
                slider6Value,
                setSlider6Value
              ),
              curseurQuestion(
                "Café en vrac",
                "5f55508b92e6c",
                <CoffeeSvg />,
                10,
                slider7Value,
                setSlider7Value
              ),
              curseurQuestion(
                "Thé",
                "5f5550b00730d",
                <TeaSvg />,
                10,
                slider8Value,
                setSlider8Value
              ),
            ]}
          />
        </div>
      </div>

      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            savierVous={SAVIER_VOUS_RESTAU}
            saviezVousPosition={0}
            selectDetail={actionReductionDataCafe}
            switchName="restauration-switch-2"
            setSwitchValue={handleSwitch2Change}
            isOpened={switch2Value}
            render={render}
          />
        </div>
      )}
    </ConfiguredForm>
  );
}
