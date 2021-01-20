import React, { useEffect, useState } from "react";
import { Radio } from "antd";
import { ResponsivePie } from "@nivo/pie";
import {
  ANTICIPER_SUB_TITLE1,
  ANTICIPER_SUB_TITLE2,
  TONNE,
} from "@utils/constants";
import "./chartResult.css";

const commonProps = {
  height: 350,
  margin: { top: 0, right: 80, bottom: 180, left: 80 },
  padAngle: 0,
  cornerRadius: 0,
  borderWidth: 1,
  enableRadialLabels: false,
  borderColor: { from: "color", modifiers: [["darker", 0.2]] },
  radialLabelsSkipAngle: 10,
  radialLabelsLinkOffset: 0,
  isInteractivebooleanoptionaldefault: true,
  radialLabelsTextColor: { from: "color", modifiers: [] },
  radialLabelsLinkColor: { from: "color" },
  sliceLabelsSkipAngle: 10,
  sliceLabelsTextColor: "#000000",
  radialLabelsLinkHorizontalLength: 6,
  isInteractive: true,
  theme: {
    labels: {
      text: {
        fontSize: "1.5vh",
        fontFamily: "Paris2024",
        fontWeight: 600,
      },
    },
    tooltip: {
      container: {
        color: "#000000",
      },
    },
  },
};

export function ChartResult({ dataCircle1, dataCircle2, dataCircle3 }) {
  const [content, setContent] = useState(0);
  const [switchGraph, setSwitchGraph] = useState(0);

  const nombreTotalCo2 = dataCircle1[0].value + dataCircle1[1].value;
  const CO2_EQUIVALENT_OF_ONE_TREE_IN_TONNE = 0.025;
  function onChange(e) {
    setSwitchGraph(e.target.value);
  }

  useEffect(() => {
    if (switchGraph === 0) {
      setContent(
        <ResponsivePie
          {...commonProps}
          data={dataCircle1}
          colors={{ datum: "data.color" }}
        />
      );
    } else if (switchGraph === 1) {
      setContent(
        <ResponsivePie
          {...commonProps}
          data={dataCircle2}
          colors={{ scheme: "blues" }}
        />
      );
    } else if (switchGraph === 2) {
      setContent(
        <ResponsivePie
          {...commonProps}
          data={dataCircle3}
          colors={{ scheme: "greens" }}
        />
      );
    }
  }, [dataCircle1, dataCircle2, dataCircle3, switchGraph]);

  return (
    <>
      <div className="content-wrap-chart">
        <div className="title-content-chart">
          <h3 className="styled-title-chart">
            {Math.round(nombreTotalCo2.toFixed(2))}
          </h3>
          <span className="styled-subtitle-chart">{TONNE}</span>
        </div>
        <div className="body-content-chart">{content}</div>
        <div className="button-content-chart">
          <div className="button-chart-style">
            <Radio.Group
              defaultValue={0}
              buttonStyle="solid"
              onChange={onChange}
              value={switchGraph}
            >
              <Radio.Button value={0}>Équilibre Pro/Perso</Radio.Button>
              <Radio.Button value={1}>Détail Vie Pro</Radio.Button>
              <Radio.Button value={2}>Détail Vie Perso</Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="sub-title-content-chart">
          <h4 className="styled-sub-title-chart">
            {ANTICIPER_SUB_TITLE1}
            <span className="result-sub-title-chart">
              {Math.round(nombreTotalCo2 / CO2_EQUIVALENT_OF_ONE_TREE_IN_TONNE)}
            </span>
            {ANTICIPER_SUB_TITLE2}
          </h4>
        </div>
      </div>
    </>
  );
}
