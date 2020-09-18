import React from "react";
import { getStatus } from "./status";
import "./mobileDynamicSummary.css";

export function MobileDynamicSummary({ size, current }) {
  const steps = [...Array(size).keys()];

  return (
    <div className="mobile-dynamic-summary-container">
      {steps.map((_, index) => {
        const flexGrowValue = steps[index + 1] ? 1 : 0;
        return (
          <div key={index} style={{ flexGrow: flexGrowValue }}>
            <div
              data-status={getStatus(index, current)}
              className="mobile-dynamic-summary-icon"
            />
            {steps[index + 1] && (
              <div
                data-status={getStatus(index, current)}
                className="mobile-dynamic-summary-tail"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
