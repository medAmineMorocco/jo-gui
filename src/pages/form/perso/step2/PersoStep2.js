import React, { useState, useEffect } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormCounter } from "@components/form/formCounter/FormCounter";
import {
  EQUIPMENT_QUESTION1,
  EQUIPMENT_QUESTION2,
  EQUIPMENT_QUESTION3,
  EQUIPMENT_QUESTION4,
  EQUIPMENT_QUESTION5,
  EQUIPMENT_QUESTION6,
  EQUIPMENT_QUESTION,
  EQUIPMENT_QUESTION8,
  EQUIPMENT_QUESTION10,
  EQUIPMENT_QUESTION11,
  EQUIPMENT_ERROR_MSG,
  EQUIPMENT_SAVIEZ_VOUS,
} from "@utils/constants";
import { scrollToTopOfThePage } from "@hooks/window";
import { optionsFibre, selectDetailEquipment } from "./step2Config";
import { FormItemActionReduction } from "@components/form/action/formItemActionReduction/FormItemActionReduction";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { persostep2State } from "./step2State";
import { notify } from "@utils/notification";

// Équipement du logement
export function PersoStep2({ step, setNextStep }) {
  const [form] = Form.useForm();
  const [render, setRender] = useState(0);
  const [isReductionActionOpened, setReductionActionOpened] = useState(false);
  const [question1Count, setQuestion1Count] = useState(0);
  const [question2Count, setQuestion2Count] = useState(0);
  const [question3Count, setQuestion3Count] = useState(0);
  const [question4Count, setQuestion4Count] = useState(0);
  const [question5Count, setQuestion5Count] = useState(0);
  const [question6Count, setQuestion6Count] = useState(0);
  const [question7Input, setQuestion7Input] = useState(0);
  const [question8Count, setQuestion8Count] = useState(0);
  const [question9Input, setQuestion9Input] = useState(0);
  const [question10Select, setQuestion10Select] = useState("Oui");
  const [question11Count, setQuestion11Count] = useState(0);
  const [question12Input, setQuestion12Input] = useState(0);

  const handleSwitchReductionActionChange = (isChecked) => {
    setReductionActionOpened(isChecked);
  };

  const checkIfQuestion7Required = (
    value1,
    value2,
    value3,
    value4,
    value5,
    value6
  ) => {
    return (
      value1 > 0 ||
      value2 > 0 ||
      value3 > 0 ||
      value4 > 0 ||
      value5 > 0 ||
      value6 > 0
    );
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
        setReductionActionOpened(form.getFieldValue("equipment-switch-1"));
      }

      setQuestion1Count(form.getFieldValue("5f556168dab39"));
      setQuestion2Count(form.getFieldValue("5f5561e5eb854"));
      setQuestion3Count(form.getFieldValue("5f55664839d67"));
      setQuestion4Count(form.getFieldValue("5f55667459f85"));
      setQuestion5Count(form.getFieldValue("5f55669ad8400"));
      setQuestion6Count(form.getFieldValue("5f5566c7a6e7c"));
      setQuestion7Input(form.getFieldValue("5f5566d80117c"));
      setQuestion8Count(form.getFieldValue("5f5566f657df4"));
      setQuestion9Input(form.getFieldValue("5f5566f868949"));
      setQuestion10Select(form.getFieldValue("5f556711c1671"));
      setQuestion11Count(form.getFieldValue("5f55674380953"));
      setQuestion12Input(form.getFieldValue("5f5567451cb10"));
    };

    getResponsesOfStep("APPAREILS")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, step]);

  const onFinish = (values) => {
    const submitButton = document.querySelector('[type="submit"]');
    submitButton.disabled = true;

    saveResponsesOfStep(persostep2State(values))
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

  const onChange = () => {
    setRender(Math.random);
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
          <span className="pro-step-title">Appareils et électroménager</span>
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f556168dab39"
            textCounter={EQUIPMENT_QUESTION1}
            value={question1Count}
            setValue={setQuestion1Count}
          />
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f5561e5eb854"
            textCounter={EQUIPMENT_QUESTION2}
            value={question2Count}
            setValue={setQuestion2Count}
          />
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f55664839d67"
            textCounter={EQUIPMENT_QUESTION3}
            value={question3Count}
            setValue={setQuestion3Count}
          />
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f55667459f85"
            textCounter={EQUIPMENT_QUESTION4}
            value={question4Count}
            setValue={setQuestion4Count}
          />
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f55669ad8400"
            textCounter={EQUIPMENT_QUESTION5}
            value={question5Count}
            setValue={setQuestion5Count}
          />
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f5566c7a6e7c"
            textCounter={EQUIPMENT_QUESTION6}
            value={question6Count}
            setValue={setQuestion6Count}
          />
        </div>

        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f5566d80117c"
            tooltipTitle={false}
            label={EQUIPMENT_QUESTION}
            rules={[
              {
                required: checkIfQuestion7Required(
                  question1Count,
                  question2Count,
                  question3Count,
                  question4Count,
                  question5Count,
                  question6Count
                ),
                message: EQUIPMENT_ERROR_MSG,
              },
            ]}
            value={question7Input}
            unit={"ans"}
            onChange={onChange}
            oneLineInput={true}
          />
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f5566f657df4"
            textCounter={EQUIPMENT_QUESTION8}
            value={question8Count}
            setValue={setQuestion8Count}
          />
        </div>

        <div className="forms-margin">
          <FormItemInputNumberWithUnit
            form={form}
            name="5f5566f868949"
            tooltipTitle={false}
            label={EQUIPMENT_QUESTION}
            rules={[
              { required: question8Count > 0, message: EQUIPMENT_ERROR_MSG },
            ]}
            value={question9Input}
            unit={"ans"}
            onChange={onChange}
            oneLineInput={true}
          />
        </div>

        <div className="forms-margin">
          <FormItemSelect
            form={form}
            name="5f556711c1671"
            label={EQUIPMENT_QUESTION10}
            tooltipTitle={false}
            options={optionsFibre}
            value={question10Select}
          />
        </div>

        <div className="forms-margin">
          <FormCounter
            form={form}
            iconCounter={false}
            name="5f55674380953"
            textCounter={EQUIPMENT_QUESTION11}
            value={question11Count}
            setValue={setQuestion11Count}
          />
        </div>

        <FormItemInputNumberWithUnit
          form={form}
          name="5f5567451cb10"
          tooltipTitle={false}
          label={EQUIPMENT_QUESTION}
          rules={[
            { required: question11Count > 0, message: EQUIPMENT_ERROR_MSG },
          ]}
          value={question12Input}
          unit={"ans"}
          onChange={onChange}
          oneLineInput={true}
        />
      </div>

      {process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && (
        <div className="forms-margin">
          <FormItemActionReduction
            form={form}
            savierVous={EQUIPMENT_SAVIEZ_VOUS}
            saviezVousPosition={1}
            selectDetail={selectDetailEquipment}
            switchName="equipment-switch-1"
            setSwitchValue={handleSwitchReductionActionChange}
            isOpened={isReductionActionOpened}
            render={render}
          />
        </div>
      )}
    </ConfiguredForm>
  );
}
