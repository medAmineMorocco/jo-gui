import React from "react";
import { Timeline } from "antd";
import { TONNE, SUB_TEXT_TIMELINE } from "@utils/constants";
import * as dompurify from "dompurify";
import "./timelineChart.css";

const MAX_TIMELINE_VALUE = 17;
const MIN_DISTANCE_POINTS_COEFFICIENT = 2;
const MAX_DISTANCE_POINTS_COEFFICIENT = 3;

export function TimelineChart({ items }) {
  items = items.sort(function (a, b) {
    return a.value - b.value;
  });

  const getDistancePointsCoefficient = (items) => {
    let cloneItems = [...items];
    cloneItems = cloneItems.sort(function (a, b) {
      return b.value - a.value;
    });
    return cloneItems[0].value > MAX_TIMELINE_VALUE
      ? MIN_DISTANCE_POINTS_COEFFICIENT
      : MAX_DISTANCE_POINTS_COEFFICIENT;
  };

  const sumDistancePoints = (items, index) => {
    let sum = 0;
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
            items[i + 1].value * getDistancePointsCoefficient(items) -
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
            style={{ height: height > 15.2 ? 15.2 + "vh" : height + "vh" }}
            label={value + TONNE}
            key={key}
          >
            <span style={{ color: color }}>{description}</span>
          </Timeline.Item>
        ))}
      </Timeline>
      <div className="sub-title-timeline">
        <span
          dangerouslySetInnerHTML={{
            __html: dompurify.sanitize(SUB_TEXT_TIMELINE),
          }}
        ></span>
      </div>
    </div>
  );
}
