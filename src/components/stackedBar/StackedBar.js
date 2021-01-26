import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export function StackedBar({ data }) {
  return (
    <ResponsiveBar
      data={data}
      keys={["sans actions", "avec actions"]}
      indexBy="category"
      margin={{ top: 50, right: 60, bottom: 50, left: 40 }}
      padding={0.3}
      layout="horizontal"
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      theme={{ textColor: "white", fontSize: "12px", fontFamily: "Paris2024" }}
      colors={({ id, data }) => data[`${id}Color`]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={null}
      axisLeft={{
        tickSize: 0,
        tickPadding: 10,
        tickRotation: 0,
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableGridY={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor="#ffffff"
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 60,
          translateY: 30,
          itemWidth: 100,
          itemHeight: 20,
          itemsSpacing: 0,
          symbolSize: 20,
          itemDirection: "left-to-right",
        },
      ]}
      animate={false}
      isInteractive={false}
    />
  );
}
