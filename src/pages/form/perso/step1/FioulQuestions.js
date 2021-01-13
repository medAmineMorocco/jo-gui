import React, { Fragment, useCallback, useEffect, useState } from "react";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import {
  HOUSE_QUESTION12,
  HOUSE_QUESTION13,
  HOUSE_ERROR_MSG,
  HOUSE_QUESTION12_TOOLTIP,
  HOUSE_QUESTION13_TOOLTIP,
} from "@utils/constants";

export function FioulQuestions({ form }) {
  const [question12Input, setQuestion12Input] = useState(0);
  const [question13Input, setQuestion13Input] = useState(0);
  const [isQuestion12Disabled, setIsQuestion12Disabled] = useState(false);
  const [isQuestion13Disabled, setIsQuestion13Disabled] = useState(false);

  const isQuestionValid = useCallback(
    (questionId) => {
      const question = form.getFieldValue(questionId);
      return question === null || question === undefined;
    },
    [form]
  );

  useEffect(() => {
    setQuestion12Input(form.getFieldValue("5f555faf640d3"));
    setQuestion13Input(form.getFieldValue("5f7f23ce239c1"));

    if (isQuestionValid("5f555faf640d3") && !isQuestionValid("5f7f23ce239c1")) {
      setIsQuestion12Disabled(true);
      setIsQuestion13Disabled(false);
    } else if (
      !isQuestionValid("5f555faf640d3") &&
      isQuestionValid("5f7f23ce239c1")
    ) {
      setIsQuestion12Disabled(false);
      setIsQuestion13Disabled(true);
    }
  }, [form, isQuestionValid]);

  const onchangeQuestion12And13Value = () => {
    if (isQuestionValid("5f555faf640d3") && isQuestionValid("5f7f23ce239c1")) {
      setIsQuestion12Disabled(false);
      setIsQuestion13Disabled(false);
    } else if (
      isQuestionValid("5f555faf640d3") &&
      !isQuestionValid("5f7f23ce239c1")
    ) {
      setIsQuestion12Disabled(true);
      setIsQuestion13Disabled(false);
    } else {
      setIsQuestion12Disabled(false);
      setIsQuestion13Disabled(true);
    }
  };

  return (
    <Fragment>
      <div className="forms-margin">
        <TitleWithHorizontalLine title="Fioul domestique" />
      </div>

      <div className="forms-margin">
        <FormItemInputNumberWithUnit
          form={form}
          name="5f555faf640d3"
          label={HOUSE_QUESTION12}
          tooltipTitle={HOUSE_QUESTION12_TOOLTIP}
          rules={[
            {
              required: !isQuestion12Disabled,
              message: HOUSE_ERROR_MSG,
            },
          ]}
          value={question12Input}
          unit={"L"}
          onChange={onchangeQuestion12And13Value}
          disabled={isQuestion12Disabled}
        />
      </div>

      <div className="forms-margin">
        <FormItemInputNumberWithUnit
          form={form}
          name="5f7f23ce239c1"
          label={HOUSE_QUESTION13}
          tooltipTitle={HOUSE_QUESTION13_TOOLTIP}
          rules={[
            {
              required: !isQuestion13Disabled,
              message: HOUSE_ERROR_MSG,
            },
          ]}
          value={question13Input}
          unit={"€/mois"}
          onChange={onchangeQuestion12And13Value}
          disabled={isQuestion13Disabled}
        />
      </div>
    </Fragment>
  );
}
