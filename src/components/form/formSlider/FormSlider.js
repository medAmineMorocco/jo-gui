import React, { useEffect, useState } from "react";
import { Slider } from "antd";
import { Tooltip } from "antd";
import { QuestionCircleFilled } from "@ant-design/icons";
import "./formSlider.css";
import { getColor } from "@utils/cssUtil";
import { FormItem } from "@components/form/formItem/FormItem";

export function FormSlider({ questions, tooltipTitle, form, labels }) {
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

  function setFieldForm(value, name) {
    form.setFieldsValue({
      [name]: value,
    });
  }

  const marks = {
    0: {
      style: {
        color: "white",
      },
      label: "0",
    },
    1: {
      style: {
        color: "white",
      },
      label: "1",
    },
    2: {
      style: {
        color: "white",
      },
      label: "2",
    },
    3: {
      style: {
        color: "white",
      },
      label: "3",
    },
    4: {
      style: {
        color: "white",
      },
      label: "4",
    },
    5: {
      style: {
        color: "white",
      },
      label: "5+",
    },
  };

  const markshover = {
    0: {
      style: {
        color: mainColor,
      },
      label: "0",
    },
    1: {
      style: {
        color: mainColor,
      },
      label: "1",
    },
    2: {
      style: {
        color: mainColor,
      },
      label: "2",
    },
    3: {
      style: {
        color: mainColor,
      },
      label: "3",
    },
    4: {
      style: {
        color: mainColor,
      },
      label: "4",
    },
    5: {
      style: {
        color: mainColor,
      },
      label: "5+",
    },
  };

  useEffect(() => {
    questions.map((question) => {
      setFieldForm(0, question.name);
    });
  }, []);

  const Sliders = questions.map((questions, i) => (
    <FormItem name={questions.name} key={i + 1}>
      <div>
        <div className="flex-slider-container">
          <div className="flex-slider-item">
            <div className="flex-container-label">
              <span className="svg-logo-slider">{questions.logo}</span>
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
            marks={i === Currentfocus ? marks : markshover}
            defaultValue={0}
            min={0}
            max={5}
            onChange={(e) => setFieldForm(e, questions.name)}
            onFocus={() => onFocus(i)}
            onBlur={onBlur}
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
          <Tooltip
            className="tooltip-icon-slider"
            title={tooltipTitle}
            placement="topRight"
          >
            <QuestionCircleFilled style={{ color: mainColor }} />
          </Tooltip>
        </span>
      </div>
      {Sliders}
    </>
  );
}
