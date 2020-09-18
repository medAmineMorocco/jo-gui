import React from "react";
import { Steps } from "antd";
import { getStatus } from "./status";
import "./dynamicSummary.css";

export function DynamicSummary({ items, current }) {
  return (
    <Steps className="dynamic-summary" progressDot direction="vertical">
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
