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
  const NUMBER_OF_MEALS_TO_BE_ENTERED = 5;

  const [render, setRender] = useState(0);
  const [switch1Value, setSwitch1Value] = useState(false);
  const [switch2Value, setSwitch2Value] = useState(false);

  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [slider3Value, setSlider3Value] = useState(0);
  const [slider4Value, setSlider4Value] = useState(0);
  const [slider5Value, setSlider5Value] = useState(0);

  const [slider6Value, setSlider6Value] = useState(0);
  const [slider7Value, setSlider7Value] = useState(0);
  const [slider8Value, setSlider8Value] = useState(0);

  const [isQuestion1Valide, setIsQuestion1Valide] = useState(true);

  const handleSwitch1Change = (isChecked) => {
    setSwitch1Value(isChecked);
  };

  const handleSwitch2Change = (isChecked) => {
    setSwitch2Value(isChecked);
  };

  const getNombreOfMeals = (
    val1 = 0,
    val2 = 0,
    val3 = 0,
    val4 = 0,
    val5 = 0
  ) => {
    return val1 + val2 + val3 + val4 + val5;
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
        notify("Erreur serveur, veuillez r??essayer ult??rieurement :(")
      );
  }, [form, step]);

  const onFinish = (values) => {
    if (
      getNombreOfMeals(
        slider1Value,
        slider2Value,
        slider3Value,
        slider4Value,
        slider5Value
      ) === NUMBER_OF_MEALS_TO_BE_ENTERED
    ) {
      setIsQuestion1Valide(true);
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
          notify("Erreur serveur, veuillez r??essayer ult??rieurement");
        });
    } else {
      setIsQuestion1Valide(false);
    }
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
            tooltipTitle={
              "Le total doit faire 5 pour vos 5 d??jeuners au bureau"
            }
            questions={[
              curseurQuestion(
                "",
                "5f55500f273e7",
                <MeatSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider1Value,
                setSlider1Value
              ),
              curseurQuestion(
                "",
                "5f5550293a164",
                <ChickenSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider2Value,
                setSlider2Value
              ),
              curseurQuestion(
                "",
                "5fe08273352c1",
                <FishSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider3Value,
                setSlider3Value
              ),
              curseurQuestion(
                "",
                "5f5550530eaf3",
                <EggSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider4Value,
                setSlider4Value
              ),
              curseurQuestion(
                "",
                "5fe08462b666d",
                <VegetablesSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider5Value,
                setSlider5Value
              ),
            ]}
            isInline={true}
          />
          {!isQuestion1Valide && (
            <span style={{ color: "var(--error-color)" }}>
              Veuillez renseigner {NUMBER_OF_MEALS_TO_BE_ENTERED} repas !
            </span>
          )}
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
                "Caf?? en capsule",
                "5f5550724626b",
                <CapsuleSvg />,
                10,
                slider6Value,
                setSlider6Value
              ),
              curseurQuestion(
                "Caf?? en vrac",
                "5f55508b92e6c",
                <CoffeeSvg />,
                10,
                slider7Value,
                setSlider7Value
              ),
              curseurQuestion(
                "Th??",
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
