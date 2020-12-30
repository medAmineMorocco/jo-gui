import React, { Fragment } from "react";
import { TitleWithHorizontalLine } from "@components/title/TitleWithHorizontalLine";
import { FormItemInputNumberWithUnit } from "@components/form/formItemInputNumberWithUnit/FormItemInputNumberWithUnit";
import {
  HOUSE_QUESTION14,
  HOUSE_ERROR_MSG,
  HOUSE_QUESTION14_TOOLTIP,
} from "@utils/constants";

export function BoisQuestions({ form }) {
  return (
    <Fragment>
      <div className="forms-margin">
        <TitleWithHorizontalLine title="Bois" />
      </div>

      <div className="forms-margin">
        <FormItemInputNumberWithUnit
          form={form}
          name="5f55600ed2c60"
          label={HOUSE_QUESTION14}
          tooltipTitle={HOUSE_QUESTION14_TOOLTIP}
          rules={[{ required: true, message: HOUSE_ERROR_MSG }]}
          unit={"kg"}
        />
      </div>
    </Fragment>
  );
}
