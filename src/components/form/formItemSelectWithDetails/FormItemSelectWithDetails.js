import React, { Fragment, useEffect, useState } from "react";
import { Collapse, Form } from "antd";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import "./formItemSelectWithDetails.css";

export function FormItemSelectWithDetails({
  form,
  name,
  label,
  tooltipTitle,
  options,
  subQuestions,
}) {
  const [selectedValue, setSelectedValue] = useState(options[0].value);
  const [isDetailsVisible, setDetailsVisible] = useState(
    subQuestions[options[0].value]
  );

  useEffect(() => {
    if (subQuestions[selectedValue]) {
      subQuestions[selectedValue].forEach(({ name, defaultResponse }) =>
        form.setFieldsValue({
          [name]: defaultResponse,
        })
      );
    }
  }, [selectedValue]);

  const onChange = (value) => {
    setSelectedValue(value);
    if (subQuestions[value]) {
      setDetailsVisible(true);
    } else {
      setDetailsVisible(false);
    }
  };

  return (
    <Fragment>
      <FormItemSelect
        form={form}
        name={name}
        label={label}
        tooltipTitle={tooltipTitle}
        options={options}
        onChange={onChange}
      />
      {isDetailsVisible && (
        <Collapse ghost>
          <Collapse.Panel header="Détails" key="2" forceRender={true}>
            <table className="select-details-table">
              <tbody>
                {subQuestions[selectedValue] &&
                  subQuestions[selectedValue].map(
                    ({ question, name, defaultResponse }, key) => (
                      <tr key={key}>
                        <Form.Item
                          className="hidden-form-item"
                          name={name}
                          initialValue={defaultResponse}
                          hidden={true}
                        />
                        <td className="select-details-question">{question}</td>
                        <td className="select-details-value">
                          {defaultResponse}
                        </td>
                      </tr>
                    )
                  )}
              </tbody>
            </table>
          </Collapse.Panel>
        </Collapse>
      )}
    </Fragment>
  );
}
