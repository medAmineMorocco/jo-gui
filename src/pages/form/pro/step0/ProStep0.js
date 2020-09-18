import React, { useEffect } from "react";
import { Form } from "antd";
import { Form as ConfiguredForm } from "@components/form/Form";
import { FormItemInputNumber } from "@components/form/formItemInputNumber/FormItemInputNumber";
import {
  saveResponsesOfQuestionsStep,
  getResponsesOfQuestionsOfStep,
} from "@services/responseService";
import {
  INTRODUCTION_QUESTION1,
  INTRODUCTION_QUESTION1_INFOS,
  INTRODUCTION_QUESTION1_ERROR_MSG,
  INTRODUCTION_QUESTION2,
  INTRODUCTION_QUESTION2_ERROR_MSG,
  INTRODUCTION_QUESTION3,
  INTRODUCTION_QUESTION3_ERROR_MSG,
} from "@utils/constants";

// introduction
export function ProStep0({ step, setNextStep }) {
  const [form] = Form.useForm();

  useEffect(() => {
    const setReponsesOfStep = (stepState) => {
      stepState.forEach(({ question, response }) => {
        form.setFieldsValue({
          [question]: response,
        });
      });
    };

    const stepState = getResponsesOfQuestionsOfStep(step);
    if (stepState) {
      setReponsesOfStep(stepState);
    }
  }, [form, step]);

  const onFinish = (values) => {
    const stepState = [
      {
        question: "intro_question1",
        response: values["intro_question1"],
      },
      {
        question: "intro_question2",
        response: values["intro_question2"],
      },
      {
        question: "intro_question3",
        response: values["intro_question3"],
      },
    ];
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
      onFinishFailed={() => console.log("onFinishFailed")}
    >
      <div className="wizard-content-right-form-parent">
        <FormItemInputNumber
          name="intro_question1"
          tooltipTitle={INTRODUCTION_QUESTION1_INFOS}
          label={INTRODUCTION_QUESTION1}
          rules={[
            { required: true, message: INTRODUCTION_QUESTION1_ERROR_MSG },
          ]}
        />
        <FormItemInputNumber
          name="intro_question2"
          label={INTRODUCTION_QUESTION2}
          rules={[
            { required: true, message: INTRODUCTION_QUESTION2_ERROR_MSG },
          ]}
        />
        <FormItemInputNumber
          name="intro_question3"
          label={INTRODUCTION_QUESTION3}
          rules={[
            { required: true, message: INTRODUCTION_QUESTION3_ERROR_MSG },
          ]}
        />
      </div>
    </ConfiguredForm>
  );
}
