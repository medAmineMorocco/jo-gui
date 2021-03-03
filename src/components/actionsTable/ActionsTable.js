import React from "react";
import { Checkbox } from "antd";
import { round } from "@utils/utils";
import "./actionsTable.css";

export function ActionsTable({
  columns,
  actions,
  onChange,
  showGain = true,
  showCheckBox = true,
}) {
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
        {actions.map(
          ({ category, thematic, description, reduction, gain }, key) => {
            return (
              <tr className="table-contents" key={key}>
                <td className="table-contents-description">
                  {"- " + description.substring(3)}
                </td>
                {showGain && (
                  <td className="table-contents-gain">{round(gain)}%</td>
                )}
                {showCheckBox && (
                  <td className="table-contents-actions">
                    <Checkbox
                      className="actions-checkbox"
                      data-category={category}
                      data-thematic={thematic}
                      data-reduction={reduction / CO2_EQUIVALENT_IN_TONNE}
                      onChange={onChange}
                    />
                  </td>
                )}
              </tr>
            );
          }
        )}
      </tbody>
    </table>
  );
}
