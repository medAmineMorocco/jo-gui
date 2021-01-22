import React, { useEffect } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import {
  saveResponsesOfStep,
  getResponsesOfStep,
} from "@services/responseService";
import { scrollToTopOfThePage } from "@hooks/window";
import {
  INTRODUCTION_QUESTION1,
  INTRODUCTION_QUESTION1_INFOS,
  INTRODUCTION_QUESTION1_ERROR_MSG,
  INTRODUCTION_QUESTION3,
  INTRODUCTION_QUESTION3_ERROR_MSG,
} from "@utils/constants";
import { notify } from "@utils/notification";

// introduction
export function ProStep0({ step, setNextStep }) {
  const [form] = Form.useForm();

  useEffect(() => {
    scrollToTopOfThePage();
    const setReponsesOfStep = (stepState) => {
      stepState.questions.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });
    };

    getResponsesOfStep("GENERAL")
      .then((stepState) => setReponsesOfStep(stepState))
      .catch(() => notify("Erreur serveur, veuillez réessayer ultérieurement"));
  }, [form, step]);

  const onFinish = (values) => {
    const stepState = {
      thematic: "GENERAL",
      questions: [
        {
          question: "5f554172a13c7",
          response: values["5f554172a13c7"],
        },
        {
          question: "5f5541ba9b096",
          response: values["5f5541ba9b096"],
        },
      ],
      ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
        actions: [],
      }),
      ...(process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === "true" && {
        settings: [],
      }),
    };

    const submitButton = document.querySelector('[type="submit"]');
    submitButton.disabled = true;

    saveResponsesOfStep(stepState)
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
        <FormItemInputNumber
          form={form}
          name="5f554172a13c7"
          tooltipTitle={INTRODUCTION_QUESTION1_INFOS}
          label={INTRODUCTION_QUESTION1}
          rules={[
            { required: true, message: INTRODUCTION_QUESTION1_ERROR_MSG },
          ]}
        />

        <div className="forms-margin">
          <FormItemInputNumber
            form={form}
            name="5f5541ba9b096"
            label={INTRODUCTION_QUESTION3}
            rules={[
              { required: true, message: INTRODUCTION_QUESTION3_ERROR_MSG },
            ]}
          />
        </div>
      </div>
    </ConfiguredForm>
  );
}
