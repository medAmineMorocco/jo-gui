import React, { useEffect, useState } from "react";
import { FormItem } from "@components/form/formItem/FormItem";
import { Radio } from "@components/form/radio/Radio";
import "./mealsOfWeek.css";

export function MealsOfWeek({
  form,
  label,
  name,
  questions,
  tooltipTitle,
  errorMsg,
  state,
}) {
  const [selectedOnMonday, setSelectedOnMonday] = useState();
  const [selectedOnTuesday, setSelectedOnTuesday] = useState();
  const [selectedOnWednesday, setSelectedOnWednesday] = useState();
  const [selectedOnThursday, setSelectedOnThursday] = useState();
  const [selectedOnFriday, setSelectedOnFriday] = useState();

  useEffect(() => {
    setSelectedOnMonday(state.monday);
    setSelectedOnTuesday(state.tuesday);
    setSelectedOnWednesday(state.wednesday);
    setSelectedOnThursday(state.thursday);
    setSelectedOnFriday(state.friday);
  }, [state]);

  useEffect(() => {
    const triggerChange = () => {
      form.setFieldsValue({
        [name]: {
          monday: selectedOnMonday,
          tuesday: selectedOnTuesday,
          wednesday: selectedOnWednesday,
          thursday: selectedOnThursday,
          friday: selectedOnFriday,
        },
      });
    };

    triggerChange();
  }, [
    form,
    name,
    selectedOnMonday,
    selectedOnTuesday,
    selectedOnWednesday,
    selectedOnThursday,
    selectedOnFriday,
  ]);

  const checkMeals = () => {
    const mealsOfWeek = form.getFieldValue(name);
    if (
      Object.values(mealsOfWeek).includes(null) ||
      Object.values(mealsOfWeek).includes(undefined)
    ) {
      return Promise.reject(errorMsg);
    }
    return Promise.resolve();
  };

  return (
    <FormItem
      label={label}
      name={name}
      tooltipTitle={tooltipTitle}
      rules={[
        {
          validator: checkMeals,
        },
      ]}
    >
      <table className="meals-of-week">
        <thead>
          <tr>
            <td />
            <td>Lun</td>
            <td>Mar</td>
            <td>Mer</td>
            <td>Jeu</td>
            <td>Ven</td>
          </tr>
        </thead>
        <tbody>
          {questions.map(({ name, icon: Icon }, index) => {
            return (
              <tr key={index}>
                <td>
                  <Icon />
                </td>
                <td>
                  <Radio
                    type="radio"
                    name="monday"
                    data-label={`monday-${name}`}
                    checked={selectedOnMonday === name}
                    onChange={() => setSelectedOnMonday(name)}
                  />
                </td>
                <td>
                  <Radio
                    type="radio"
                    name="tuesday"
                    data-label={`tuesday-${name}`}
                    checked={selectedOnTuesday === name}
                    onChange={() => setSelectedOnTuesday(name)}
                  />
                </td>
                <td>
                  <Radio
                    type="radio"
                    name="wednesday"
                    data-label={`wednesday-${name}`}
                    checked={selectedOnWednesday === name}
                    onChange={() => setSelectedOnWednesday(name)}
                  />
                </td>
                <td>
                  <Radio
                    type="radio"
                    name="thursday"
                    data-label={`thursday-${name}`}
                    checked={selectedOnThursday === name}
                    onChange={() => setSelectedOnThursday(name)}
                  />
                </td>
                <td>
                  <Radio
                    type="radio"
                    name="friday"
                    data-label={`friday-${name}`}
                    checked={selectedOnFriday === name}
                    onChange={() => setSelectedOnFriday(name)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </FormItem>
  );
}
