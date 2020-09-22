import React, { useState, useEffect } from "react";
import { Collapse, InputNumber } from "antd";
import { FormItemSwitch } from "@components/form/action/formItemSwitch/FormItemSwitch";
import { FormItemActionSelect } from "@components/form/action/formItemActionSelect/FormItemActionSelect";
import { ReactComponent as ActionReductionIcon } from "@theme/icons/action-reduction-icon.svg";
import { ReactComponent as SavierVousIcon } from "@theme/icons/savier-vous-icon.svg";
import { FormItem } from "@components/form/formItem/FormItem";
import "./formItemActionReduction.css";
import {
  ACTIONS_REDUCTION,
  FIRST_DETAIL,
  LIRE_MOINS,
  LIRE_PLUS,
} from "@utils/constants";

export function FormItemActionReduction({
  form,
  title,
  savierVous,
  selectDetail,
}) {
  const { Panel } = Collapse;
  const [switchValue, setSwitchValue] = useState(false);
  const [showAllDetail, setShowAllDetail] = useState(false);
  const [detail, setDetail] = useState(savierVous);

  useEffect(() => {
    if (!switchValue) {
      selectDetail.forEach((detail) => {
        form.setFieldsValue({
          [detail.name]: 0,
        });
      });
    }
  }, [form, selectDetail, switchValue]);

  const resizeDetailHandler = () => {
    setShowAllDetail((prev) => !prev);
  };

  useEffect(() => {
    if (showAllDetail) {
      setDetail(savierVous);
    } else {
      setDetail(detail.substring(0, 55));
    }
  }, [detail, savierVous, showAllDetail]);

  const panelHeader = (
    <div className="panel-header">
      <div className="panel-header-content">
        <ActionReductionIcon />
        <div className="panel-header-span">
          <span className="panel-header-span-first-title">
            {ACTIONS_REDUCTION}
          </span>
          <span className="panel-header-span-second-title">{title}</span>
        </div>
      </div>
      <FormItemSwitch
        form={form}
        name="itemSwitchValue"
        switchValue={switchValue}
        setSwitchValue={setSwitchValue}
      />
    </div>
  );

  return (
    <Collapse
      className="collapse-custom"
      activeKey={switchValue ? 1 : 0}
      bordered={false}
    >
      <Panel
        disabled={!switchValue}
        showArrow={false}
        header={panelHeader}
        key="1"
      >
        {switchValue && (
          <div>
            <div className="detail1">
              <div className="first-para">{FIRST_DETAIL}</div>

              <div className="select-content">
                <span>{selectDetail[0].firstText}&nbsp;</span>
                <FormItemActionSelect
                  form={form}
                  name={selectDetail[0].name}
                  options={selectDetail[0].options}
                />
                {selectDetail[0].secondText.split(" ").map((mot, key) => (
                  <span key={key}>&nbsp;{mot}</span>
                ))}
              </div>
            </div>

            <div className="info-container">
              <div className="info-container-icon">
                <SavierVousIcon />
              </div>

              <div className="info-container-content">
                <h2 className="info-savier-vous">Le savier-vous ?</h2>
                <span>{detail}</span>
                {showAllDetail && (
                  <div>
                    <br />
                    <span className="showDetail" onClick={resizeDetailHandler}>
                      {LIRE_MOINS}
                    </span>
                  </div>
                )}
                {!showAllDetail && (
                  <span className="showDetail" onClick={resizeDetailHandler}>
                    {LIRE_PLUS}
                  </span>
                )}
              </div>
            </div>

            {selectDetail.map(
              (detail, key) =>
                (detail.idAutoIncrement > 1 && detail.type === "deroulant" && (
                  <div className="select-content detail2" key={key}>
                    <span>{detail.firstText}&nbsp;</span>
                    <FormItemActionSelect
                      form={form}
                      name={detail.name}
                      options={detail.options}
                    />
                    {detail.secondText.split(" ").map((mot, key) => (
                      <span key={key}>&nbsp;{mot}</span>
                    ))}
                  </div>
                )) ||
                (detail.idAutoIncrement > 1 && detail.type === "champ_saisie" && (
                  <div className="select-content detail2" key={key}>
                    <span className="input-detail">
                      {detail.firstText}&nbsp;
                    </span>
                    <FormItem className="input-action" name={detail.name}>
                      <InputNumber min={0} />
                    </FormItem>
                    {detail.secondText.split(" ").map((mot, key) => (
                      <span className="input-detail" key={key}>
                        &nbsp;{mot}
                      </span>
                    ))}
                  </div>
                ))
            )}
          </div>
        )}
      </Panel>
    </Collapse>
  );
}
