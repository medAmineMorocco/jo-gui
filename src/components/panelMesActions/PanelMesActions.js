import React, { useState } from "react";
import { Collapse } from "antd";
import { ActionsTable } from "@components/actionsTable/ActionsTable";
import "./panelMesActions.css";

export function PanelMesActions({
  thematic,
  actions,
  onChange,
  backgroundColor,
}) {
  const { Panel } = Collapse;
  const [defaultActiveKey, setDefaultActiveKey] = useState([]);

  const panelHeader = (
    <div className="panel-mes-actions-header">
      <span>{thematic}</span>
    </div>
  );

  const onChangeCollapse = (key) => {
    setDefaultActiveKey(key);
  };

  return (
    <div
      className="panel-mes-actions-collapse"
      style={{ backgroundColor: backgroundColor }}
    >
      <Collapse
        bordered={false}
        expandIconPosition="right"
        onChange={onChangeCollapse}
        style={{ backgroundColor: backgroundColor }}
      >
        <Panel header={panelHeader} key={"1"}>
          <div className="panel-mes-actions-contents">
            <ActionsTable
              columns={["Actions de réductions", "% Gain", "Je me lance !"]}
              actions={actions}
              onChange={onChange}
            />
          </div>
        </Panel>
      </Collapse>
      <div
        className={
          defaultActiveKey.length === 0 ? "panel-description" : "panel-hidden"
        }
      >
        <span>{`+ ${actions.length} actions`}</span>
      </div>
    </div>
  );
}
