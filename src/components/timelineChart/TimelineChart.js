import React from "react";
import { Timeline } from "antd";
import { TONNE } from "@utils/constants";
import "./timelineChart.css";

const DISTANCE_POINTS_COEFFICIENT = 3;

export function TimelineChart({ items }) {
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
      <Timeline mode="left">
        {items.map(({ value, description, height, color }, key) => (
          <Timeline.Item
            color={color}
            style={{ height: height + "vh" }}
            label={value + TONNE}
            key={key}
          >
            <span style={{ color: color }}>{description}</span>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
}
