import React, { useState } from "react";
import { Slider } from "antd";
import { Tooltip } from "antd";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";
import { QuestionCircleFilled } from "@ant-design/icons";
import "./formSlider.css";

export function FormSlider({
  form,
  labels,
  tooltipTitle,
  questions,
  setValue,
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

  const Sliders = questions.map((questions, i) => (
    <FormItem name={questions.name} key={i + 1}>
      <div>
        <div className="flex-slider-container">
          <div className="flex-slider-item">
            <div className="flex-container-label">
              {questions.logo && (
                <span className="svg-logo-slider">{questions.logo}</span>
              )}
              <span style={{ color: "white" }}>{questions.label}</span>
            </div>
          </div>
        </div>
        <div className="slider-container">
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
                ? marks(questions.min, questions.max)
                : markshover(questions.min, questions.max)
            }
            defaultValue={questions.min}
            min={questions.min}
            max={questions.max}
            onChange={(e) => {
              setValue(e);
              setFieldForm(e, questions.name);
            }}
            onFocus={() => onFocus(i)}
            onBlur={onBlur}
            value={typeof questions.value === "number" ? questions.value : 0}
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
