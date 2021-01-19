import React from "react";
import { Card as CardAntd } from "antd";

export function Card({ title, backgroundColor, children }) {
  return (
    <CardAntd
      title={title}
      bordered={false}
      headStyle={{
        color: "white",
        fontFamily: "Paris2024",
        textTransform: "uppercase",
        fontSize: "28px",
        fontWeight: "bold",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
      bodyStyle={{
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        textAlign: "left",
      }}
      style={{
        width: 500,
        backgroundColor: backgroundColor,
        textAlign: "center",
        color: "white",
        borderRadius: "20px",
      }}
    >
      {children}
    </CardAntd>
  );
}
