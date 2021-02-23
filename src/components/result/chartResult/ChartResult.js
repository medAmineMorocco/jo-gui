import React, { useEffect, useState } from "react";
import { Radio } from "antd";
import { ResponsivePie } from "@nivo/pie";
import { round } from "@utils/utils";
import {
  ANTICIPER_SUB_TITLE1,
  ANTICIPER_SUB_TITLE2,
  TONNE,
} from "@utils/constants";
import "./chartResult.css";

const commonProps = {
  height: 350,
  margin: { top: 0, right: 80, bottom: 180, left: 80 },
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
  sliceLabelsRadiusOffset: 0.5,
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
  const totalCo2Pro = Number(dataCircle1[0].value);
  const totalCo2Perso = Number(dataCircle1[1].value);
  const totalCo2 = totalCo2Pro + totalCo2Perso;

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
          sliceLabel={(e) => `${e.value} teqCO₂`}
        />
      );
    } else if (switchGraph === 1) {
      setContent(
        <ResponsivePie
          {...commonProps}
          data={dataCircle2}
          colors={["#3EDE8E", "#17B7B0", "#00B460", "#004F45", "#003F5C"]}
        />
      );
    } else if (switchGraph === 2) {
      setContent(
        <ResponsivePie
          {...commonProps}
          data={dataCircle3}
          colors={[
            "#69B6FF",
            "#91ADFF",
            "#7872F4",
            "#6EDBD7",
            "#006AFF",
            "#1A18BA",
            "#00004D",
          ]}
        />
      );
    }
  }, [dataCircle1, dataCircle2, dataCircle3, switchGraph]);

  return (
    <>
      <div className="content-wrap-chart">
        <div className="title-content-chart">
          <h3 className="styled-title-chart">
            {switchGraph === 0
              ? round(totalCo2)
              : switchGraph === 1
              ? round(totalCo2Pro)
              : switchGraph === 2
              ? round(totalCo2Perso)
              : totalCo2}
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
              <Radio.Button value={0} aria-label="Équilibre Pro/Perso">
                Équilibre Pro/Perso
              </Radio.Button>
              <Radio.Button value={1} aria-label="Détail Vie Pro">
                Détail Vie Pro
              </Radio.Button>
              <Radio.Button value={2} aria-label="Détail Vie Perso">
                Détail Vie Perso
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
        <div className="sub-title-content-chart">
          <h4 className="styled-sub-title-chart">
            {ANTICIPER_SUB_TITLE1}
            <span className="result-sub-title-chart">
              {Math.round(totalCo2 / CO2_EQUIVALENT_OF_ONE_TREE_IN_TONNE)}
            </span>
            {ANTICIPER_SUB_TITLE2}
          </h4>
        </div>
      </div>
    </>
  );
}
