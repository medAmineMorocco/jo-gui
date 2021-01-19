import React from "react";
import { Checkbox } from "antd";
import "./actionsTable.css";

export function ActionsTable({ columns, actions, onChange }) {
  return (
    <table>
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
        {actions.map(({ description, reduction }, key) => {
          return (
            <tr className="table-contents" key={key}>
              <td className="table-contents-description">{description}</td>
              {reduction && <td>{reduction}</td>}
              <td className="table-contents-actions">
                <Checkbox data-reduction={reduction} onChange={onChange} />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
