import React, { useEffect, useState, useCallback } from "react";
import { Form } from "antd";
import {
  CoffeeIcon,
  SodaIcon,
  WaterIcon,
  WineIcon,
  BeerIcon,
  WhiskyIcon,
} from "@components/icons/Icons";
import { Form as ConfiguredForm } from "@components/form/Form";
import { ReactComponent as MeatSvg } from "@components/form/formSlider/meat.svg";
import { ReactComponent as ChickenSvg } from "@components/form/formSlider/chicken.svg";
import { ReactComponent as VegetablesSvg } from "@components/form/formSlider/vegetables.svg";
import { ReactComponent as FishSvg } from "@components/form/formSlider/fish.svg";
import { ReactComponent as EggSvg } from "@components/form/formSlider/egg.svg";
import { FormSlider } from "@components/form/formSlider/FormSlider";
import {
  ALIMENTATION_QUESTION1,
  ALIMENTATION_QUESTION5,
  ALIMENTATION_QUESTION6,
  ALIMENTATION_QUESTION7,
  ALIMENTATION_QUESTION8,
  ALIMENTATION_QUESTION9,
  POPIN_INFOS,
  OVERLAY_TITLE,
  ALIMENTATION_SAVIEZ_VOUS,
  ALIMENTATION_QUESTION,
} from "@utils/constants";
import { FormCounter } from "@components/form/formCounter/FormCounter";
import { Overlay } from "@components/overlay/Overlay";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { scrollToTopOfThePage } from "@hooks/window";
import { selectDetail, selectDetail2, curseurQuestion } from "./step5Config";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { persostep5State } from "./step5State";
import { notify } from "@utils/notification";

// Alimentation
export function PersoStep5({ step, setNextStep }) {
  const [form] = Form.useForm();
  const NUMBER_OF_MEALS_TO_BE_ENTERED = 9;

  const [slider1Value, setSlider1Value] = useState(0);
  const [slider2Value, setSlider2Value] = useState(0);
  const [slider3Value, setSlider3Value] = useState(0);
  const [slider4Value, setSlider4Value] = useState(0);
  const [slider5Value, setSlider5Value] = useState(0);

  const actionSoda = "5f60aa4172f98";
  const actionVin = "5f60aa6244f4d";
  const actionBiere = "5f60aa7235bfe";
  const actionAlcool = "5f60aa83e4aad";

  const [render, setRender] = useState(0);
  const [isReductionAction1Opened, setReductionAction1Opened] = useState(false);
  const [isReductionAction2Opened, setReductionAction2Opened] = useState(false);
  const [question1Count, setQuestion1Count] = useState(0);
  const [question5Count, setQuestion5Count] = useState(0);
  const [question6Count, setQuestion6Count] = useState(0);
  const [question7Count, setQuestion7Count] = useState(0);
  const [question8Count, setQuestion8Count] = useState(0);
  const [question9Count, setQuestion9Count] = useState(0);

  const [isQuestion2Valide, setIsQuestion2Valide] = useState(true);

  const handleSwitchReductionAction1Change = (isChecked) => {
    setReductionAction1Opened(isChecked);
  };

  const handleSwitchReductionAction2Change = (isChecked) => {
    setReductionAction2Opened(isChecked);
  };

  const getValueLessThanQuestionValue = (options, questionValue) => {
    return options.reverse().find(({ value }) => value <= questionValue).value;
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

  // change ActionSoda Value
  selectDetail2[0].options = [{ text: "0", value: 0 }];
  for (let i = 1; i <= question5Count; i++) {
    selectDetail2[0].options.push({ text: `${i}`, value: i });
  }
  if (question5Count < form.getFieldValue(actionSoda)) {
    const resultat = getValueLessThanQuestionValue(
      selectDetail2[0].options,
      form.getFieldValue(actionSoda)
    );
    form.setFieldsValue({
      [actionSoda]: resultat,
    });
  }

  // change ActionVin Value
  selectDetail2[2].options = [{ text: "0", value: 0 }];
  for (let i = 1; i <= question7Count; i++) {
    selectDetail2[2].options.push({ text: `${i}`, value: i });
  }
  if (question7Count < form.getFieldValue(actionVin)) {
    const resultat = getValueLessThanQuestionValue(
      selectDetail2[2].options,
      form.getFieldValue(actionVin)
    );
    form.setFieldsValue({
      [actionVin]: resultat,
    });
  }

  // change ActionBiere Value
  selectDetail2[3].options = [{ text: "0", value: 0 }];
  for (let i = 1; i <= question8Count; i++) {
    selectDetail2[3].options.push({ text: `${i}`, value: i });
  }
  if (question8Count < form.getFieldValue(actionBiere)) {
    const resultat = getValueLessThanQuestionValue(
      selectDetail2[3].options,
      form.getFieldValue(actionBiere)
    );
    form.setFieldsValue({
      [actionBiere]: resultat,
    });
  }

  // change ActionAlcool Value
  selectDetail2[4].options = [{ text: "0", value: 0 }];
  for (let i = 1; i <= question9Count; i++) {
    selectDetail2[4].options.push({ text: `${i}`, value: i });
  }
  if (question9Count < form.getFieldValue(actionAlcool)) {
    const resultat = getValueLessThanQuestionValue(
      selectDetail2[4].options,
      form.getFieldValue(actionAlcool)
    );
    form.setFieldsValue({
      [actionAlcool]: resultat,
    });
  }

  const setReponsesOfStep = useCallback(
    (stepState) => {
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
        setReductionAction1Opened(form.getFieldValue("alimentation-switch-1"));
        setReductionAction2Opened(form.getFieldValue("alimentation-switch-2"));
      }

      setSlider1Value(form.getFieldValue("5f5570ff217a4"));
      setSlider2Value(form.getFieldValue("5f55715960e9a"));
      setSlider3Value(form.getFieldValue("5fe086093c517"));
      setSlider4Value(form.getFieldValue("5f557184101ce"));
      setSlider5Value(form.getFieldValue("5fe085c49e973"));

      setQuestion1Count(form.getFieldValue("5f5570e5d882c"));
      setQuestion5Count(form.getFieldValue("5f557459e6c45"));
      setQuestion6Count(form.getFieldValue("5f5574ead218e"));
      setQuestion7Count(form.getFieldValue("5f557508ea4c5"));
      setQuestion8Count(form.getFieldValue("5f557531751f2"));
      setQuestion9Count(form.getFieldValue("5f55754725a12"));
    },
    [form]
  );

  useEffect(() => {
    scrollToTopOfThePage();

    getResponsesOfStep("ALIMENTATIONS")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, setReponsesOfStep, step]);

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
      setIsQuestion2Valide(true);

      const submitButton = document.querySelector('[type="submit"]');
      submitButton.disabled = true;

      saveResponsesOfStep(persostep5State(values))
        .then(() => {
          submitButton.disabled = false;
          submitButton.blur();
          setNextStep();
        })
        .catch(() => {
          submitButton.disabled = false;
          notify("Erreur serveur, veuillez réessayer ultérieurement");
        });
    } else {
      setIsQuestion2Valide(false);
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
          <span className="pro-step-title">Alimentation personnelle</span>
        </div>

        <FormCounter
          form={form}
          name="5f5570e5d882c"
          iconCounter={CoffeeIcon}
          textCounter={ALIMENTATION_QUESTION1}
          value={question1Count}
          setValue={setQuestion1Count}
        />

        <div className="forms-margin nombres-repas">
          <FormSlider
            form={form}
            labels={ALIMENTATION_QUESTION}
            tooltipTitle={"Le total doit faire 9 pour vos 9 repas restants"}
            questions={[
              curseurQuestion(
                "5f5570ff217a4",
                <MeatSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider1Value,
                setSlider1Value
              ),
              curseurQuestion(
                "5f55715960e9a",
                <ChickenSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider2Value,
                setSlider2Value
              ),
              curseurQuestion(
                "5fe086093c517",
                <FishSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider3Value,
                setSlider3Value
              ),
              curseurQuestion(
                "5f557184101ce",
                <EggSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider4Value,
                setSlider4Value
              ),
              curseurQuestion(
                "5fe085c49e973",
                <VegetablesSvg />,
                NUMBER_OF_MEALS_TO_BE_ENTERED,
                slider5Value,
                setSlider5Value
              ),
            ]}
            isInline={true}
          />
          {!isQuestion2Valide && (
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
            savierVous={ALIMENTATION_SAVIEZ_VOUS}
            saviezVousPosition={3}
            selectDetail={selectDetail}
            switchName="alimentation-switch-1"
            setSwitchValue={handleSwitchReductionAction1Change}
            isOpened={isReductionAction1Opened}
            render={render}
          />
        </div>
      )}

      <div className="wizard-content-right-form-parent">
        <div className="forms-margin">
          <FormCounter
            form={form}
            name="5f557459e6c45"
            iconCounter={SodaIcon}
            textCounter={ALIMENTATION_QUESTION5}
            value={question5Count}
            setValue={setQuestion5Count}
          />
        </div>

        <FormCounter
          form={form}
          name="5f5574ead218e"
          iconCounter={WaterIcon}
          textCounter={ALIMENTATION_QUESTION6}
          value={question6Count}
          setValue={setQuestion6Count}
        />

        <FormCounter
          form={form}
          name="5f557508ea4c5"
          iconCounter={WineIcon}
          textCounter={ALIMENTATION_QUESTION7}
          value={question7Count}
          setValue={setQuestion7Count}
        />

        <FormCounter
          form={form}
          name="5f557531751f2"
          iconCounter={BeerIcon}
          textCounter={ALIMENTATION_QUESTION8}
          value={question8Count}
          setValue={setQuestion8Count}
        />

        <FormCounter
          form={form}
          name="5f55754725a12"
          iconCounter={WhiskyIcon}
          textCounter={ALIMENTATION_QUESTION9}
          value={question9Count}
          setValue={setQuestion9Count}
        />

        <Overlay
          title={OVERLAY_TITLE}
          items={[
            {
              text: POPIN_INFOS,
            },
          ]}
        />
      </div>

      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            selectDetail={selectDetail2}
            switchName="alimentation-switch-2"
            setSwitchValue={handleSwitchReductionAction2Change}
            isOpened={isReductionAction2Opened}
            render={render}
          />
        </div>
      )}
    </ConfiguredForm>
  );
}
