import React, { useState } from "react";
import { Collapse } from "antd";
import { CATEGORY } from "@utils/category";
import { getColor, getColorWithAlpha } from "@utils/cssUtil";
import { ActionsTable } from "@components/actionsTable/ActionsTable";
import "./panelMesActions.css";

export function PanelMesActions({ category, thematic, actions, onChange }) {
  const { Panel } = Collapse;
  const [defaultActiveKey, setDefaultActiveKey] = useState([]);
  const proPanelColor = getColor("--bg-color-blue-1");
  const persoPanelColor = getColor("--bg-color-blue-2");
  const proPanelColorWithAlpha = getColorWithAlpha("--bg-color-blue-1", 0.5);
  const persoPanelColorWithAlpha = getColorWithAlpha("--bg-color-blue-2", 0.5);

  const panelHeader = (
    <div className="panel-mes-actions-header">
      <span>{thematic}</span>
    </div>
  );

  const onChangeCollapse = (key) => {
    setDefaultActiveKey(key);
  };

  return (
    <div className="panel-mes-actions-collapse">
      <Collapse
        bordered={false}
        expandIconPosition="right"
        onChange={onChangeCollapse}
        style={
          category === CATEGORY.PRO
            ? { backgroundColor: proPanelColor }
            : { backgroundColor: persoPanelColor }
        }
      >
        <Panel header={panelHeader} key={"1"}>
          <div className="panel-mes-actions-contents">
            <ActionsTable
              columns={["Actions de réductions", "Gain", "Je me lance !"]}
              actions={actions}
              onChange={onChange}
            />
          </div>
        </Panel>
      </Collapse>
      <div
        style={
          category === CATEGORY.PRO
            ? { backgroundColor: proPanelColorWithAlpha }
            : { backgroundColor: persoPanelColorWithAlpha }
        }
        className={
          defaultActiveKey.length === 0 ? "panel-description" : "panel-hidden"
        }
      >
        <span>{`+ ${actions.length} actions`}</span>
      </div>
    </div>
  );
}
