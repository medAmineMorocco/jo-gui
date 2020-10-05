import React, { useEffect, useState } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemSelectWithDetails } from "@components/form/formItemSelectWithDetails/FormItemSelectWithDetails";
import { FormCounter } from "@components/form/formCounter/FormCounter";
import {
  LaptopIcon,
  ScreenIcon,
  SmartphoneIcon,
} from "@components/icons/Icons";
import {
  TITLE_ORDINATEURS,
  TITLE_TELEPHONES,
  TITLE_ECRANS,
} from "@utils/constants";
import {
  saveResponsesOfQuestionsStep,
  getResponsesOfQuestionsOfStep,
} from "@services/responseService";
import { emplacementBureauOptions, subQuestions } from "./ProStep1Config";

// Au bureau
export function ProStep1({ step, setNextStep }) {
  const [form] = Form.useForm();

  const [emplacementBureau, setEmplacementBureau] = useState(
    emplacementBureauOptions[0].value
  );
  const [nbrOrdinateurs, setNbrOrdinateurs] = useState(0);
  const [nbrTelephones, setNbrTelephones] = useState(0);
  const [nbrEcrans, setNbrEcrans] = useState(0);

  useEffect(() => {
    const setReponsesOfStep = (stepState) => {
      stepState.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });
      setEmplacementBureau(form.getFieldValue("emplacement_bureau"));
      setNbrOrdinateurs(form.getFieldValue("nombre_ordinateurs"));
      setNbrTelephones(form.getFieldValue("nombre_telephones"));
      setNbrEcrans(form.getFieldValue("nombre_ecrans"));
    };
    const stepState = getResponsesOfQuestionsOfStep(step);
    if (stepState) {
      setReponsesOfStep(stepState);
    }
  }, [form, step]);

  const onFinish = (values) => {
    const stepState = [
      {
        question: "emplacement_bureau",
        response: values["emplacement_bureau"],
      },
      {
        question: "nombre_ordinateurs",
        response: values["nombre_ordinateurs"],
      },
      {
        question: "nombre_telephones",
        response: values["nombre_telephones"],
      },
      {
        question: "nombre_ecrans",
        response: values["nombre_ecrans"],
      },
    ];

    subQuestions[values["emplacement_bureau"]].forEach((res) => {
      stepState.push({
        question: res.name,
        response: res.defaultResponse,
      });
    });

    saveResponsesOfQuestionsStep(stepState, step);
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
          <span className="pro-step-title">Au bureau</span>
        </div>

        <FormItemSelectWithDetails
          form={form}
          name="emplacement_bureau"
          tooltipTitle="Ces émissions concernent les consommations des bâtiments, rapportées à chaque collaborateur."
          label="Votre bureau est situé"
          options={emplacementBureauOptions}
          subQuestions={subQuestions}
          selectedValue={emplacementBureau}
          setSelectedValue={setEmplacementBureau}
        />

        <div className="forms-margin">
          <FormCounter
            form={form}
            name="nombre_ordinateurs"
            iconCounter={LaptopIcon}
            textCounter={TITLE_ORDINATEURS}
            value={nbrOrdinateurs}
            max={9}
          />
        </div>

        <FormCounter
          form={form}
          name="nombre_telephones"
          iconCounter={SmartphoneIcon}
          textCounter={TITLE_TELEPHONES}
          value={nbrTelephones}
          max={9}
        />

        <FormCounter
          form={form}
          name="nombre_ecrans"
          iconCounter={ScreenIcon}
          textCounter={TITLE_ECRANS}
          value={nbrEcrans}
          max={9}
        />
      </div>
    </ConfiguredForm>
  );
}
