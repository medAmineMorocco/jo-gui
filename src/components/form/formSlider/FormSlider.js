import React, { useState } from "react";
import { Slider, Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import { FormItem } from "@components/form/formItem/FormItem";
import { getColor } from "@utils/cssUtil";
import "./formSlider.css";

export function FormSlider({
  form,
  labels,
  tooltipTitle,
  questions,
  isInline,
}) {
  const mainColor = getColor("--main-color");
  const shade = getColor("--bg-color-shade-3");
  const [color, setColor] = useState(shade);
  const [Currentfocus, SetCurrentfocus] = useState(null);

  const onFocus = (i) => {
    const focusColor = "white";
    setColor(focusColor);
    SetCurrentfocus(i);
  };

  const onBlur = () => {
    const blurColor = mainColor;
    setColor(blurColor);
    SetCurrentfocus(null);
  };

  const setFieldForm = (value, name) => {
    form.setFieldsValue({
      [name]: value,
    });
  };

  const marks = (min, max) => {
    let marks = {};
    for (let index = min; index <= max; index++) {
      marks[index] = {
        style: { color: "white" },
        label: index.toString(),
      };
    }
    return marks;
  };

  const markshover = (min, max) => {
    let marks = {};
    for (let index = min; index <= max; index++) {
      marks[index] = {
        style: { color: mainColor },
        label: index.toString(),
      };
    }
    return marks;
  };

  const Sliders = questions.map((question, i) => (
    <FormItem
      className="form-slider-component"
      name={question.name}
      key={i + 1}
    >
      <div className={isInline ? "slider-component" : ""}>
        <div className="flex-slider-container">
          <div className="flex-slider-item">
            <div className="flex-container-label">
              {question.logo && (
                <span className="svg-logo-slider">{question.logo}</span>
              )}
              {!isInline && (
                <span style={{ color: "white" }}>{question.label}</span>
              )}
            </div>
          </div>
        </div>

        <div className={`slider-container slider-container-${i}`}>
          <Slider
            dotStyle={{ borderColor: shade, backgroundColor: "black" }}
            activeDotStyle={
              i === Currentfocus
                ? { borderColor: color }
                : { borderColor: mainColor }
            }
            railStyle={{ backgroundColor: shade }}
            trackStyle={
              i === Currentfocus
                ? { backgroundColor: color }
                : { backgroundColor: mainColor }
            }
            handleStyle={
              i === Currentfocus
                ? { borderColor: color, backgroundColor: "black" }
                : { borderColor: mainColor, backgroundColor: "black" }
            }
            marks={
              i === Currentfocus
                ? marks(question.min, question.max)
                : markshover(question.min, question.max)
            }
            defaultValue={question.min}
            min={question.min}
            max={question.max}
            onChange={(e) => {
              question.setValue(e);
              setFieldForm(e, question.name);
            }}
            onFocus={() => onFocus(i)}
            onBlur={onBlur}
            value={typeof question.value === "number" ? question.value : 0}
          />
        </div>
      </div>
    </FormItem>
  ));

  return (
    <>
      <div className="flex-slider-container">
        <span
          className="flex-slider-item text-question"
          style={{ color: mainColor }}
        >
          {labels}
          {tooltipTitle && (
            <Tooltip
              className="tooltip-icon-slider"
              title={tooltipTitle}
              placement="topRight"
            >
              <QuestionCircleFilled style={{ color: mainColor }} />
            </Tooltip>
          )}
        </span>
      </div>
      {Sliders}
    </>
  );
}
