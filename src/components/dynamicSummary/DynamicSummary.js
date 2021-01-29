import React from "react";
import { Steps } from "antd";
import { getStatus } from "./status";
import "./dynamicSummary.css";

export function DynamicSummary({ items, current, color }) {
  return (
    <Steps
      className={"dynamic-summary " + color}
      progressDot
      direction="vertical"
    >
      {items.map(({ title, description }, index) => (
        <Steps.Step
          key={index}
          title={title}
          description={description}
          status={getStatus(index, current)}
        />
      ))}
    </Steps>
  );
}
