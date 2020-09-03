import React from "react";
import { Steps } from "antd";
import {
  PROFESSIONAL_MENU_ITEM,
  PERSONAL_MENU_ITEM,
  RESULTS_MENU_ITEM,
} from "@utils/constants";
import { ReactComponent as ProSvg } from "./pro.svg";
import { ReactComponent as PersoSvg } from "./perso.svg";
import { ReactComponent as ResultsSvg } from "./results.svg";
import "./summary.css";

export function Summary() {
  return (
    <Steps className="summary" current={100} direction="vertical">
      <Steps.Step
        key={0}
        icon={<ProSvg />}
        title={PROFESSIONAL_MENU_ITEM}
        description="5 rubriques"
      />
      <Steps.Step
        key={1}
        icon={<PersoSvg />}
        title={PERSONAL_MENU_ITEM}
        description="7 rubriques"
      />
      <Steps.Step key={2} icon={<ResultsSvg />} title={RESULTS_MENU_ITEM} />
    </Steps>
  );
}
