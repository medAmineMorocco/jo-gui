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
  onChange,
  weekend,
}) {
  const [selectedOnMonday, setSelectedOnMonday] = useState();
  const [selectedOnTuesday, setSelectedOnTuesday] = useState();
  const [selectedOnWednesday, setSelectedOnWednesday] = useState();
  const [selectedOnThursday, setSelectedOnThursday] = useState();
  const [selectedOnFriday, setSelectedOnFriday] = useState();
  const [selectedOnSaturday, setSelectedOnSaturday] = useState();
  const [selectedOnSunday, setSelectedOnSunday] = useState();

  useEffect(() => {
    if (onChange) {
      if (weekend) {
        onChange({
          saturday: selectedOnSaturday,
          sunday: selectedOnSunday,
        });
      } else {
        onChange({
          monday: selectedOnMonday,
          tuesday: selectedOnTuesday,
          wednesday: selectedOnWednesday,
          thursday: selectedOnThursday,
          friday: selectedOnFriday,
        });
      }
    }
  }, [
    onChange,
    selectedOnFriday,
    selectedOnMonday,
    selectedOnSaturday,
    selectedOnSunday,
    selectedOnThursday,
    selectedOnTuesday,
    selectedOnWednesday,
    weekend,
  ]);

  useEffect(() => {
    if (weekend) {
      setSelectedOnSaturday(state.saturday);
      setSelectedOnSunday(state.sunday);
    } else {
      setSelectedOnMonday(state.monday);
      setSelectedOnTuesday(state.tuesday);
      setSelectedOnWednesday(state.wednesday);
      setSelectedOnThursday(state.thursday);
      setSelectedOnFriday(state.friday);
    }
  }, [state, weekend]);

  useEffect(() => {
    if (weekend) {
      form.setFieldsValue({
        [name]: {
          saturday: selectedOnSaturday,
          sunday: selectedOnSunday,
        },
      });
    } else {
      form.setFieldsValue({
        [name]: {
          monday: selectedOnMonday,
          tuesday: selectedOnTuesday,
          wednesday: selectedOnWednesday,
          thursday: selectedOnThursday,
          friday: selectedOnFriday,
        },
      });
    }
  }, [
    form,
    name,
    selectedOnFriday,
    selectedOnMonday,
    selectedOnSaturday,
    selectedOnSunday,
    selectedOnThursday,
    selectedOnTuesday,
    selectedOnWednesday,
    weekend,
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
            {!weekend && <td>Lun</td>}
            {!weekend && <td>Mar</td>}
            {!weekend && <td>Mer</td>}
            {!weekend && <td>Jeu</td>}
            {!weekend && <td className="last-day">Ven</td>}
            {weekend && <td>Sam</td>}
            {weekend && <td className="last-day">Dim</td>}
          </tr>
        </thead>
        <tbody>
          {questions.map(({ name, icon: Icon }, index) => {
            return (
              <tr key={index}>
                <td>
                  <Icon />
                </td>
                {!weekend && (
                  <td>
                    <Radio
                      type="radio"
                      name="monday"
                      data-label={`monday-${name}`}
                      checked={selectedOnMonday === name}
                      onChange={() => setSelectedOnMonday(name)}
                    />
                  </td>
                )}
                {!weekend && (
                  <td>
                    <Radio
                      type="radio"
                      name="tuesday"
                      data-label={`tuesday-${name}`}
                      checked={selectedOnTuesday === name}
                      onChange={() => setSelectedOnTuesday(name)}
                    />
                  </td>
                )}
                {!weekend && (
                  <td>
                    <Radio
                      type="radio"
                      name="wednesday"
                      data-label={`wednesday-${name}`}
                      checked={selectedOnWednesday === name}
                      onChange={() => setSelectedOnWednesday(name)}
                    />
                  </td>
                )}
                {!weekend && (
                  <td>
                    <Radio
                      type="radio"
                      name="thursday"
                      data-label={`thursday-${name}`}
                      checked={selectedOnThursday === name}
                      onChange={() => setSelectedOnThursday(name)}
                    />
                  </td>
                )}
                {!weekend && (
                  <td className="last-day">
                    <Radio
                      type="radio"
                      name="friday"
                      data-label={`friday-${name}`}
                      checked={selectedOnFriday === name}
                      onChange={() => setSelectedOnFriday(name)}
                    />
                  </td>
                )}
                {weekend && (
                  <td>
                    <Radio
                      type="radio"
                      name="saturday"
                      data-label={`saturday-${name}`}
                      checked={selectedOnSaturday === name}
                      onChange={() => setSelectedOnSaturday(name)}
                    />
                  </td>
                )}
                {weekend && (
                  <td className="last-day">
                    <Radio
                      type="radio"
                      name="sunday"
                      data-label={`sunday-${name}`}
                      checked={selectedOnSunday === name}
                      onChange={() => setSelectedOnSunday(name)}
                    />
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </FormItem>
  );
}
