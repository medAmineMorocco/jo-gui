import React from "react";
import { Card as CardAntd } from "antd";
import "./card.css";

export function Card({
  title,
  backgroundColor,
  children,
  borderRadiusLeft = "20px",
  borderRadiusRight = "20px",
}) {
  return (
    <CardAntd
      className="card-cojo"
      title={title}
      bordered={false}
      headStyle={{
        borderTopLeftRadius: borderRadiusLeft,
        borderTopRightRadius: borderRadiusRight,
      }}
      bodyStyle={{
        borderBottomLeftRadius: borderRadiusLeft,
        borderBottomRightRadius: borderRadiusRight,
      }}
      style={{
        backgroundColor: backgroundColor,
        borderTopRightRadius: borderRadiusRight,
        borderTopLeftRadius: borderRadiusLeft,
        borderBottomRightRadius: borderRadiusRight,
        borderBottomLeftRadius: borderRadiusLeft,
      }}
    >
      {children}
    </CardAntd>
  );
}
