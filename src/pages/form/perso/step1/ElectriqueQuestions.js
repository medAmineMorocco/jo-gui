import React, { Fragment, useCallback, useEffect, useState } from "react";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import {
  HOUSE_QUESTION8,
  HOUSE_QUESTION9,
  HOUSE_ERROR_MSG,
  HOUSE_QUESTION8_TOOLTIP,
  HOUSE_QUESTION9_TOOLTIP,
} from "@utils/constants";

export function ElectriqueQuestions({ form }) {
  const [question8Input, setQuestion8Input] = useState(0);
  const [question9Input, setQuestion9Input] = useState(0);
  const [isQuestion8Disabled, setIsQuestion8Disabled] = useState(false);
  const [isQuestion9Disabled, setIsQuestion9Disabled] = useState(false);

  const isQuestionValid = useCallback(
    (questionId) => {
      const question = form.getFieldValue(questionId);
      return question === null || question === undefined;
    },
    [form]
  );

  useEffect(() => {
    setQuestion8Input(form.getFieldValue("5f555f180a442"));
    setQuestion9Input(form.getFieldValue("5f7f230d75c78"));

    if (isQuestionValid("5f555f180a442") && !isQuestionValid("5f7f230d75c78")) {
      setIsQuestion8Disabled(true);
      setIsQuestion9Disabled(false);
    } else if (
      !isQuestionValid("5f555f180a442") &&
      isQuestionValid("5f7f230d75c78")
    ) {
      setIsQuestion8Disabled(false);
      setIsQuestion9Disabled(true);
    }
  }, [form, isQuestionValid]);

  const onchangeQuestion8And9Value = () => {
    if (isQuestionValid("5f555f180a442") && isQuestionValid("5f7f230d75c78")) {
      setIsQuestion8Disabled(false);
      setIsQuestion9Disabled(false);
    } else if (
      isQuestionValid("5f555f180a442") &&
      !isQuestionValid("5f7f230d75c78")
    ) {
      setIsQuestion8Disabled(true);
      setIsQuestion9Disabled(false);
    } else {
      setIsQuestion8Disabled(false);
      setIsQuestion9Disabled(true);
    }
  };

  return (
    <Fragment>
      <div className="forms-margin">
        <TitleWithHorizontalLine title="Electricité" />
      </div>

      <div className="forms-margin">
        <FormItemInputNumberWithUnit
          form={form}
          name="5f555f180a442"
          label={HOUSE_QUESTION8}
          tooltipTitle={HOUSE_QUESTION8_TOOLTIP}
          rules={[
            {
              required: !isQuestion8Disabled,
              message: HOUSE_ERROR_MSG,
            },
          ]}
          value={question8Input}
          unit={"kWh"}
          onChange={onchangeQuestion8And9Value}
          disabled={isQuestion8Disabled}
        />
      </div>

      <div className="forms-margin">
        <FormItemInputNumberWithUnit
          form={form}
          name="5f7f230d75c78"
          label={HOUSE_QUESTION9}
          tooltipTitle={HOUSE_QUESTION9_TOOLTIP}
          rules={[
            {
              required: !isQuestion9Disabled,
              message: HOUSE_ERROR_MSG,
            },
          ]}
          value={question9Input}
          unit={"€/mois"}
          onChange={onchangeQuestion8And9Value}
          disabled={isQuestion9Disabled}
        />
      </div>
    </Fragment>
  );
}
