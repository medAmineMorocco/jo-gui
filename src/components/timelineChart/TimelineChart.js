import React from "react";
import { Timeline } from "antd";
import "./timelineChart.css";

const DISTANCE_POINTS_COEFFICIENT = 4;

export function TimelineChart({ userResult, items }) {
  items.push({
    value: userResult,
    description: "Tu es ici !",
    color: "#EE334E",
  });

  items = items.sort(function (a, b) {
    return a.value - b.value;
  });

  const sumDistancePoints = (items, index) => {
    var sum = 0;
    for (let i = 0; i < items.length; i++) {
      if (items[i].height && i < index) {
        sum += items[i].height;
      }
    }
    return sum;
  };

  const calculDistancePoints = (items) => {
    for (let i = 0; i < items.length; i++) {
      if (items[i + 1]) {
        if (items[i].value === items[i + 1].value) {
          items[i].height = 0;
        } else {
          items[i].height =
            items[i + 1].value * DISTANCE_POINTS_COEFFICIENT -
            sumDistancePoints(items, i);
        }
      }
    }
    return items;
  };

  calculDistancePoints(items);

  return (
    <div className="timeline-chart">
      <div className="timeline-chart-title">
        <span className="timeline-title">Et se situe</span>
      </div>
      <Timeline mode="left">
        {items.map(({ value, description, height, color }, key) => (
          <Timeline.Item
            color={color}
            style={{ height: height + "vh" }}
            label={value + " KgCO₂eq"}
            key={key}
          >
            <span style={{ color: color }}>{description}</span>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
