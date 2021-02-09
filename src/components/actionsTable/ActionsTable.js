import React from "react";
import { Checkbox } from "antd";
import { round } from "@utils/utils";
import "./actionsTable.css";

export function ActionsTable({ columns, actions, onChange, showGain = true }) {
  const CO2_EQUIVALENT_IN_TONNE = 1000;
  return (
    <table className="actions-table">
      <thead className="table-head">
        <tr>
          {columns.map((column, key) => (
            <th key={key} className="table-head-column">
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {actions.map(({ category, description, reduction, gain }, key) => {
          return (
            <tr className="table-contents" key={key}>
              <td className="table-contents-description">{`${
                key + 1
              }. ${description}`}</td>
              {showGain && (
                <td className="table-contents-gain">{round(gain, 2)}</td>
              )}
              <td className="table-contents-actions">
                <Checkbox
                  className="actions-checkbox"
                  data_category={category}
                  data_reduction={reduction / CO2_EQUIVALENT_IN_TONNE}
                  onChange={onChange}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
