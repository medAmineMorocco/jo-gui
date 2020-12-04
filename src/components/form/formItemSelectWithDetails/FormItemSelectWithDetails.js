import React, { Fragment, useEffect, useState } from "react";
import { Collapse, Form, Divider } from "antd";
import { FormItemSelect } from "@components/form/formItemSelect/FormItemSelect";
import "./formItemSelectWithDetails.css";

export function FormItemSelectWithDetails({
  form,
  name,
  label,
  tooltipTitle,
  options,
  subQuestions,
  selectedValue,
  setSelectedValue,
}) {
  const [isDetailsVisible, setDetailsVisible] = useState(
    subQuestions[selectedValue]
  );

  useEffect(() => {
    if (subQuestions[selectedValue]) {
      subQuestions[selectedValue].forEach(({ name, defaultResponse }) =>
        form.setFieldsValue({
          [name]: defaultResponse,
        })
      );
    }
  }, [form, selectedValue, subQuestions]);

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
        disabled={false}
        selectedValue={selectedValue}
      />
      {isDetailsVisible && (
        <div className="select-with-details-collapse">
          <Collapse ghost>
            <Collapse.Panel header="Détails" key="2" forceRender={true}>
              <Divider className="detail-divider" plain></Divider>
              <table className="select-details-table">
                <tbody>
                  {subQuestions[selectedValue] &&
                    subQuestions[selectedValue].map(
                      ({ question, defaultResponse }, key) => (
                        <tr key={key}>
                          <td className="hidden-form-item">
                            <Form.Item
                              initialValue={defaultResponse}
                              hidden={true}
                            />
                          </td>
                          <td className="select-details-question">
                            {question}
                          </td>
                          <td className="select-details-value">
                            {defaultResponse}
                          </td>
                        </tr>
                      )
                    )}
                </tbody>
              </table>
              <Divider className="detail-divider" plain></Divider>
            </Collapse.Panel>
          </Collapse>
        </div>
      )}
    </Fragment>
  );
}
