import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { useWindowSize } from "@hooks/window";
import { getCategoryItems } from "@utils/category";
import { BoxSides } from "@components/box/BoxSides";
import { DynamicSummary } from "@components/dynamicSummary/DynamicSummary";
import { MobileDynamicSummary } from "@components/dynamicSummary/MobileDynamicSummary";
import { HeaderWithCategory } from "@components/header/HeaderWithCategory";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";
import { config } from "./formConfig";
import "./formWizard.css";

export function FormWizard() {
  const isMobile = useWindowSize();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(
    sessionStorage.getItem("current-step") || 0
  );

  const setNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(activeStep - 1);
  };

  const { component: FormStep, progress, category, previous, next } = config[
    activeStep
  ];
  const summaryItems = getCategoryItems(category);
  let content;

  if (isMobile) {
    content = (
      <div className="mobile-wizard-container">
        <MobileDynamicSummary size={summaryItems.length} current={progress} />
        <div className="mobile-wizard-form-container">
          <FormStep step={activeStep} setNextStep={setNextStep} />
        </div>
      </div>
    );
  } else {
    content = (
      <BoxSides
        left={
          <div className="wizard-content-left-container">
            <div className="wizard-content-left-summary-container">
              <DynamicSummary items={summaryItems} current={progress} />
            </div>
            <div className="wizard-content-left-questions-container">
              <div className="form-questions-title">
                <div>les</div>
                <div>questions</div>
              </div>
              <img
                src="/images/questions.png"
                alt="questions"
                width="84px"
                height="84px"
              />
            </div>
          </div>
        }
        right={
          <div className="wizard-content-right-container">
            <div className="wizard-content-right-form-container">
              <FormStep step={activeStep} setNextStep={setNextStep} />
            </div>
          </div>
        }
      />
    );
  }

  const [title1, title2] = category.split(" ");
  return (
    <Fragment>
      <HeaderWithCategory title1={title1} title2={title2} />
      {content}
      <FooterWithNavigation
        previous={{
          category: previous.category,
          details: previous.details,
          onClick:
            activeStep === 0
              ? () => history.push("/intro")
              : handlePreviousStep,
        }}
        next={{
          category: next.category,
          details: next.details,
        }}
        step={activeStep}
      />
    </Fragment>
  );
}
