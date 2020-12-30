import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Spin } from "antd";
import { useTabletOrMobileSize } from "@hooks/window";
import { getCategoryItems } from "@utils/category";
import { BoxSides } from "@components/box/BoxSides";
import { DynamicSummary } from "@components/dynamicSummary/DynamicSummary";
import { MobileDynamicSummary } from "@components/dynamicSummary/MobileDynamicSummary";
import { HeaderWithCategory } from "@components/header/HeaderWithCategory";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";
import { CATEGORY } from "@utils/category";
import { getUserProgess } from "@services/userService";
import { notify } from "@utils/notification";
import { config } from "./formConfig";
import "./formWizard.css";

export function FormWizard() {
  const isMobileOrTablet = useTabletOrMobileSize();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState();
  const [pageState, setPageState] = useState("loading");

  const getCurrentStep = useCallback(() => {
    getUserProgess()
      .then((response) => {
        if (response.progress === "VIE_PROFESIONAL") {
          setTimeout(() => {
            setActiveStep(Number(response.step));
            setPageState("success");
          }, 500);
        } else if (response.progress === "RESULTATS") {
          history.push("/home");
        }
      })
      .catch(() => {
        setTimeout(() => {
          setPageState("error");
          notify(
            "Ton état d'avancement ne peut pas être récupéré, veuillez réessayer ultérieurement"
          );
        }, 500);
      });
  }, [history]);

  useEffect(() => {
    getCurrentStep();
  }, [getCurrentStep]);

  const setNextStep = () => {
    setActiveStep(Number(activeStep) + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(Number(activeStep) - 1);
  };

  if (pageState === "success") {
    const { component: FormStep, progress, category, previous, next } = config[
      activeStep
    ];
    const summaryItems = getCategoryItems(category);
    const [title1, title2] = category.split(" ");
    let content;

    if (isMobileOrTablet) {
      content = (
        <div className="mobile-wizard-container">
          <MobileDynamicSummary size={summaryItems.length} current={progress} />
          <div className="mobile-wizard-form-container">
            <FormStep step={activeStep} setNextStep={setNextStep} />
          </div>
        </div>
      );
    } else {
      const imgMenu =
        category === CATEGORY.PRO ? "questions_pro.png" : "questions_perso.png";
      content = (
        <BoxSides
          left={
            <div className="wizard-content-left-container">
              <div className="wizard-content-left-summary-container">
                <DynamicSummary items={summaryItems} current={progress} />
              </div>
              <div className="wizard-content-left-questions-container">
                <div className="form-questions-title">
                  <div className="questions-first-title">Les</div>
                  <div>questions</div>
                </div>
                <img
                  src={`/images/${imgMenu}`}
                  alt="questions"
                  width="84px"
                  height="84px"
                  aria-label="Les questions"
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

    return (
      <>
        <HeaderWithCategory
          className="form-header"
          title1={title1}
          title2={title2}
        />
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
      </>
    );
  } else if (pageState === "loading") {
    return (
      <div className="loading-spinner">
        <Spin />
      </div>
    );
  } else {
    return <></>;
  }
}
