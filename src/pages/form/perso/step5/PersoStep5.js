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
import {
  ALIMENTATION_QUESTION1,
  ALIMENTATION_QUESTION2,
  ALIMENTATION_QUESTION3,
  ALIMENTATION_QUESTION4,
  ALIMENTATION_QUESTION5,
  ALIMENTATION_QUESTION6,
  ALIMENTATION_QUESTION7,
  ALIMENTATION_QUESTION8,
  ALIMENTATION_QUESTION9,
  POPIN_INFOS,
  OVERLAY_TITLE,
  ALIMENATTION_ERROR_MSG,
  ALIMENTATION_QUESTION3_TOOTLTIP,
  ALIMENTATION_QUESTION4_TOOTLTIP,
  ALIMENTATION_SAVIEZ_VOUS,
} from "@utils/constants";
import { FormCounter } from "@components/form/formCounter/FormCounter";
import { MealsOfWeek } from "@components/form/mealsOfWeek/MealsOfWeek";
import { Overlay } from "@components/overlay/Overlay";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { scrollToTopOfThePage } from "@hooks/window";
import {
  question2_subQuestions,
  question3_subQuestions,
  question4_subQuestions,
  selectDetail,
  selectDetail2,
} from "./step5Config";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { persostep5State } from "./step5State";
import { notify } from "@utils/notification";

// Alimentation
export function PersoStep5({ step, setNextStep }) {
  const [form] = Form.useForm();

  const mealBetail1 = "5f5570ff217a4";
  const mealPoulet1 = "5f55715960e9a";
  const actionBetail1 = "5f60a1d33da5f";
  const actionPoulet1 = "5f60a1e56f9be";

  const mealBetail2 = "5f5572735716e";
  const mealPoulet2 = "5f5572b1b9be9";
  const actionBetail2 = "5f60a1f6aa5d9";
  const actionPoulet2 = "5f60a209470be";

  const mealBetail3 = "5f5572e23ac37";
  const mealPoulet3 = "5f5572f94a692";
  const actionBetail3 = "5f60a21ef0fe9";
  const actionPoulet3 = "5f60a24828ffa";

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
  const [question2State, setQuestion2State] = useState({
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
  });
  const [question3State, setQuestion3State] = useState({
    saturday: null,
    sunday: null,
  });
  const [question4State, setQuestion4State] = useState({
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
  });

  const handleSwitchReductionAction1Change = (isChecked) => {
    setReductionAction1Opened(isChecked);
  };

  const handleSwitchReductionAction2Change = (isChecked) => {
    setReductionAction2Opened(isChecked);
  };

  const getValueLessThanQuestionValue = (options, questionValue) => {
    return options.reverse().find(({ value }) => value <= questionValue).value;
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

  const setResponsesToMealsOfWeek = useCallback(
    (mainQuestion, questionsResponses) => {
      const mainQuestionResponse = {};
      ["monday", "tuesday", "wednesday", "thursday", "friday"].forEach(
        (day) => {
          const { question } = questionsResponses.find(({ response }) =>
            response.includes(day)
          );
          mainQuestionResponse[day] = question;
        }
      );

      form.setFieldsValue({
        [mainQuestion]: mainQuestionResponse,
      });
    },
    [form]
  );

  const setResponsesToMealsOfWeekEnd = useCallback(
    (mainQuestion, questionsResponses) => {
      const mainQuestionResponse = {};
      ["saturday", "sunday"].forEach((day) => {
        const { question } = questionsResponses.find(({ response }) =>
          response.includes(day)
        );
        mainQuestionResponse[day] = question;
      });

      form.setFieldsValue({
        [mainQuestion]: mainQuestionResponse,
      });
    },
    [form]
  );

  const setReponsesOfStep = useCallback(
    (stepState) => {
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

      const choices2 = ["5f5570ff217a4", "5f55715960e9a", "5f557184101ce"];
      setResponsesToMealsOfWeek(
        "alimentation_question2",
        stepState.questions.filter(({ question }) =>
          choices2.includes(question)
        )
      );

      const choices3 = ["5f5572735716e", "5f5572b1b9be9", "5f5572cda4e57"];
      setResponsesToMealsOfWeekEnd(
        "alimentation_question3",
        stepState.questions.filter(({ question }) =>
          choices3.includes(question)
        )
      );

      const choices4 = ["5f5572e23ac37", "5f5572f94a692", "5f55732d44ed6"];
      setResponsesToMealsOfWeek(
        "alimentation_question4",
        stepState.questions.filter(({ question }) =>
          choices4.includes(question)
        )
      );

      setQuestion1Count(form.getFieldValue("5f5570e5d882c"));
      setQuestion5Count(form.getFieldValue("5f557459e6c45"));
      setQuestion6Count(form.getFieldValue("5f5574ead218e"));
      setQuestion7Count(form.getFieldValue("5f557508ea4c5"));
      setQuestion8Count(form.getFieldValue("5f557531751f2"));
      setQuestion9Count(form.getFieldValue("5f55754725a12"));

      setQuestion2State(form.getFieldValue("alimentation_question2"));
      setQuestion3State(form.getFieldValue("alimentation_question3"));
      setQuestion4State(form.getFieldValue("alimentation_question4"));

      setReductionAction1Opened(
        form.getFieldValue("action-reduction-switch-1")
      );
      setReductionAction2Opened(
        form.getFieldValue("action-reduction-switch-2")
      );

      // Calendar 1
      let nbrBetail1 = 0;
      let nbrPoulet1 = 0;
      ["monday", "tuesday", "wednesday", "thursday", "friday"].forEach(
        async (day) => {
          if (
            form.getFieldValue("alimentation_question2")[day] === mealBetail1
          ) {
            nbrBetail1++;
          } else if (
            form.getFieldValue("alimentation_question2")[day] === mealPoulet1
          ) {
            nbrPoulet1++;
          }
        }
      );
      for (let i = 1; i <= nbrBetail1; i++) {
        selectDetail[0].options.push({
          text: `${i}`,
          value: i,
        });
      }
      for (let i = 1; i <= nbrPoulet1; i++) {
        selectDetail[1].options.push({
          text: `${i}`,
          value: i,
        });
      }

      // Calendar weekend
      let nbrBetail2 = 0;
      let nbrPoulet2 = 0;
      ["saturday", "sunday"].forEach(async (day) => {
        if (form.getFieldValue("alimentation_question3")[day] === mealBetail2) {
          nbrBetail2++;
        } else if (
          form.getFieldValue("alimentation_question3")[day] === mealPoulet2
        ) {
          nbrPoulet2++;
        }
      });
      for (let i = 1; i <= nbrBetail2; i++) {
        selectDetail[2].options.push({
          text: `${i}`,
          value: i,
        });
      }
      for (let i = 1; i <= nbrPoulet2; i++) {
        selectDetail[3].options.push({
          text: `${i}`,
          value: i,
        });
      }

      // Calendar 3
      let nbrBetail3 = 0;
      let nbrPoulet3 = 0;
      ["monday", "tuesday", "wednesday", "thursday", "friday"].forEach(
        async (day) => {
          if (
            form.getFieldValue("alimentation_question4")[day] === mealBetail3
          ) {
            nbrBetail3++;
          } else if (
            form.getFieldValue("alimentation_question4")[day] === mealPoulet3
          ) {
            nbrPoulet3++;
          }
        }
      );
      for (let i = 1; i <= nbrBetail3; i++) {
        selectDetail[4].options.push({
          text: `${i}`,
          value: i,
        });
      }
      for (let i = 1; i <= nbrPoulet3; i++) {
        selectDetail[5].options.push({
          text: `${i}`,
          value: i,
        });
      }
    },
    [form, setResponsesToMealsOfWeek, setResponsesToMealsOfWeekEnd]
  );

  useEffect(() => {
    scrollToTopOfThePage();

    getResponsesOfStep("ALIMENTATIONS")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, setReponsesOfStep, step]);

  const onFinish = (values) => {
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
  };

  const onFieldsChange = () => {
    setRender(Math.random);
  };

  const onChangeMealsOfWeek1 = (data) => {
    let nbrBetail = 0;
    let nbrPoulet = 0;
    ["monday", "tuesday", "wednesday", "thursday", "friday"].forEach(
      async (day) => {
        if (data[day] === mealBetail1) {
          nbrBetail++;
        } else if (data[day] === mealPoulet1) {
          nbrPoulet++;
        }
      }
    );
    selectDetail[0].options = [{ text: "0", value: 0 }];
    selectDetail[1].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= nbrBetail; i++) {
      selectDetail[0].options.push({ text: `${i}`, value: i });
    }
    for (let i = 1; i <= nbrPoulet; i++) {
      selectDetail[1].options.push({ text: `${i}`, value: i });
    }
    if (data.monday) {
      if (nbrBetail < form.getFieldValue(actionBetail1)) {
        const value = getValueLessThanQuestionValue(
          selectDetail[0].options,
          nbrBetail
        );
        form.setFieldsValue({
          [actionBetail1]: value,
        });
      }
      if (nbrPoulet < form.getFieldValue(actionPoulet1)) {
        const value = getValueLessThanQuestionValue(
          selectDetail[1].options,
          nbrPoulet
        );
        form.setFieldsValue({
          [actionPoulet1]: value,
        });
      }
    }
  };

  const onChangeMealsOfWeekend = (data) => {
    let nbrBetail = 0;
    let nbrPoulet = 0;
    ["saturday", "sunday"].forEach(async (day) => {
      if (data[day] === mealBetail2) {
        nbrBetail++;
      } else if (data[day] === mealPoulet2) {
        nbrPoulet++;
      }
    });
    selectDetail[2].options = [{ text: "0", value: 0 }];
    selectDetail[3].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= nbrBetail; i++) {
      selectDetail[2].options.push({ text: `${i}`, value: i });
    }
    for (let i = 1; i <= nbrPoulet; i++) {
      selectDetail[3].options.push({ text: `${i}`, value: i });
    }
    if (data.saturday) {
      if (nbrBetail < form.getFieldValue(actionBetail2)) {
        const value = getValueLessThanQuestionValue(
          selectDetail[2].options,
          nbrBetail
        );
        form.setFieldsValue({
          [actionBetail2]: value,
        });
      }
      if (nbrPoulet < form.getFieldValue(actionPoulet2)) {
        const value = getValueLessThanQuestionValue(
          selectDetail[3].options,
          nbrPoulet
        );
        form.setFieldsValue({
          [actionPoulet2]: value,
        });
      }
    }
  };

  const onChangeMealsOfWeek3 = (data) => {
    let nbrBetail = 0;
    let nbrPoulet = 0;
    ["monday", "tuesday", "wednesday", "thursday", "friday"].forEach(
      async (day) => {
        if (data[day] === mealBetail3) {
          nbrBetail++;
        } else if (data[day] === mealPoulet3) {
          nbrPoulet++;
        }
      }
    );
    selectDetail[4].options = [{ text: "0", value: 0 }];
    selectDetail[5].options = [{ text: "0", value: 0 }];
    for (let i = 1; i <= nbrBetail; i++) {
      selectDetail[4].options.push({ text: `${i}`, value: i });
    }
    for (let i = 1; i <= nbrPoulet; i++) {
      selectDetail[5].options.push({ text: `${i}`, value: i });
    }
    if (data.monday) {
      if (nbrBetail < form.getFieldValue(actionBetail3)) {
        const value = getValueLessThanQuestionValue(
          selectDetail[5].options,
          nbrBetail
        );
        form.setFieldsValue({
          [actionBetail3]: value,
        });
      }
      if (nbrPoulet < form.getFieldValue(actionPoulet3)) {
        const value = getValueLessThanQuestionValue(
          selectDetail[5].options,
          nbrPoulet
        );
        form.setFieldsValue({
          [actionPoulet3]: value,
        });
      }
    }
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
          <span className="pro-step-title">Alimentation</span>
        </div>

        <FormCounter
          form={form}
          name="5f5570e5d882c"
          iconCounter={CoffeeIcon}
          textCounter={ALIMENTATION_QUESTION1}
          value={question1Count}
          setValue={setQuestion1Count}
        />

        <div className="forms-margin">
          <MealsOfWeek
            form={form}
            name="alimentation_question2"
            questions={question2_subQuestions}
            label={ALIMENTATION_QUESTION2}
            errorMsg={ALIMENATTION_ERROR_MSG}
            state={question2State}
            onChange={onChangeMealsOfWeek1}
          />
        </div>

        <div className="forms-margin">
          <MealsOfWeek
            form={form}
            name="alimentation_question3"
            questions={question3_subQuestions}
            label={ALIMENTATION_QUESTION3}
            tooltipTitle={ALIMENTATION_QUESTION3_TOOTLTIP}
            errorMsg={ALIMENATTION_ERROR_MSG}
            state={question3State}
            weekend={true}
            onChange={onChangeMealsOfWeekend}
          />
        </div>

        <div className="forms-margin">
          <MealsOfWeek
            form={form}
            name="alimentation_question4"
            questions={question4_subQuestions}
            label={ALIMENTATION_QUESTION4}
            tooltipTitle={ALIMENTATION_QUESTION4_TOOTLTIP}
            errorMsg={ALIMENATTION_ERROR_MSG}
            state={question4State}
            onChange={onChangeMealsOfWeek3}
          />
        </div>
      </div>

      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            savierVous={ALIMENTATION_SAVIEZ_VOUS}
            saviezVousPosition={3}
            selectDetail={selectDetail}
            switchName="action-reduction-switch-1"
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
            switchName="action-reduction-switch-2"
            setSwitchValue={handleSwitchReductionAction2Change}
            isOpened={isReductionAction2Opened}
            render={render}
          />
        </div>
      )}
    </ConfiguredForm>
  );
}
