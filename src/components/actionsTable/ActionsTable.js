import React from "react";
import { Checkbox } from "antd";
import "./actionsTable.css";

export function ActionsTable({ columns, actions, onChange }) {
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
              <td className="table-contents-gain">{gain}</td>
              <td className="table-contents-actions">
                <Checkbox
                  className="actions-checkbox"
                  data_category={category}
                  data_reduction={reduction / 1000}
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
