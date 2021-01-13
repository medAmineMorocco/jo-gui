import React, { Fragment, useCallback, useEffect, useState } from "react";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import {
  HOUSE_QUESTION10,
  HOUSE_QUESTION11,
  HOUSE_ERROR_MSG,
  HOUSE_QUESTION10_TOOLTIP,
  HOUSE_QUESTION11_TOOLTIP,
} from "@utils/constants";

export function GazQuestions({ form }) {
  const [question10Input, setQuestion10Input] = useState(0);
  const [question11Input, setQuestion11Input] = useState(0);
  const [isQuestion10Disabled, setIsQuestion10Disabled] = useState(false);
  const [isQuestion11Disabled, setIsQuestion11Disabled] = useState(false);

  const isQuestionValid = useCallback(
    (questionId) => {
      const question = form.getFieldValue(questionId);
      return question === null || question === undefined;
    },
    [form]
  );

  useEffect(() => {
    setQuestion10Input(form.getFieldValue("5f555f8af3776"));
    setQuestion11Input(form.getFieldValue("5f7f2382ba8a0"));

    if (isQuestionValid("5f555f8af3776") && !isQuestionValid("5f7f2382ba8a0")) {
      setIsQuestion10Disabled(true);
      setIsQuestion11Disabled(false);
    } else if (
      !isQuestionValid("5f555f8af3776") &&
      isQuestionValid("5f7f2382ba8a0")
    ) {
      setIsQuestion10Disabled(false);
      setIsQuestion11Disabled(true);
    }
  }, [form, isQuestionValid]);

  const onchangeQuestion10And11Value = () => {
    if (isQuestionValid("5f555f8af3776") && isQuestionValid("5f7f2382ba8a0")) {
      setIsQuestion10Disabled(false);
      setIsQuestion11Disabled(false);
    } else if (
      isQuestionValid("5f555f8af3776") &&
      !isQuestionValid("5f7f2382ba8a0")
    ) {
      setIsQuestion10Disabled(true);
      setIsQuestion11Disabled(false);
    } else {
      setIsQuestion10Disabled(false);
      setIsQuestion11Disabled(true);
    }
  };

  return (
    <Fragment>
      <div className="forms-margin">
        <TitleWithHorizontalLine title="Gaz" />
      </div>

      <div className="forms-margin">
        <FormItemInputNumberWithUnit
          form={form}
          name="5f555f8af3776"
          label={HOUSE_QUESTION10}
          tooltipTitle={HOUSE_QUESTION10_TOOLTIP}
          rules={[
            {
              required: !isQuestion10Disabled,
              message: HOUSE_ERROR_MSG,
            },
          ]}
          value={question10Input}
          unit={"kWh PCS"}
          onChange={onchangeQuestion10And11Value}
          disabled={isQuestion10Disabled}
        />
      </div>

      <div className="forms-margin">
        <FormItemInputNumberWithUnit
          form={form}
          name="5f7f2382ba8a0"
          label={HOUSE_QUESTION11}
          tooltipTitle={HOUSE_QUESTION11_TOOLTIP}
          rules={[
            {
              required: !isQuestion11Disabled,
              message: HOUSE_ERROR_MSG,
            },
          ]}
          value={question11Input}
          unit={"€/mois"}
          onChange={onchangeQuestion10And11Value}
          disabled={isQuestion11Disabled}
        />
      </div>
    </Fragment>
  );
}
