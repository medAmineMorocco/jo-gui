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
import { Footer } from "@components/footer/Footer";
import { CATEGORY } from "@utils/category";
import { getUserProgess } from "@services/userService";
import { notify } from "@utils/notification";
import { requestState } from "@utils/requestState";
import { config } from "./formConfig";
import "./formWizard.css";

export function FormWizard() {
  const isMobileOrTablet = useTabletOrMobileSize();
  const history = useHistory();
  const [activeStep, setActiveStep] = useState();
  const [pageState, setPageState] = useState(requestState.LOADING);

  const getCurrentStep = useCallback(() => {
    getUserProgess()
      .then(({ step }) => {
        setTimeout(() => {
          setActiveStep(Number(step));
          setPageState(requestState.SUCCESS);
        }, 500);
      })
      .catch(() => {
        setTimeout(() => {
          setPageState(requestState.ERROR);
          notify(
            "Votre état d'avancement ne peut pas être récupéré, veuillez réessayer ultérieurement"
          );
        }, 500);
      });
  }, []);

  useEffect(() => {
    window.sessionStorage.removeItem("progress");
    window.sessionStorage.removeItem("bilan");
    window.sessionStorage.removeItem("topsAndFlops");
    window.sessionStorage.removeItem("thematicsWithItsActionsByCategory");
  }, []);

  useEffect(() => {
    getCurrentStep();
  }, [getCurrentStep]);

  const setNextStep = () => {
    setActiveStep(Number(activeStep) + 1);
  };

  const handlePreviousStep = () => {
    setActiveStep(Number(activeStep) - 1);
  };

  if (pageState === requestState.SUCCESS) {
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
                <DynamicSummary
                  items={summaryItems}
                  current={progress}
                  color={
                    category === CATEGORY.PRO
                      ? "dynamic-summary-pro"
                      : "dynamic-summary-perso"
                  }
                />
              </div>
              <div className="wizard-content-left-questions-container">
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
          color={
            category === CATEGORY.PRO
              ? "styled-title-container-pro"
              : "styled-title-container-perso"
          }
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
  } else if (pageState === requestState.LOADING) {
    return (
      <>
        <HeaderWithCategory
          className="form-header"
          title1=""
          title2=""
          color={"styled-title-container-main"}
        >
          <img
            className="intro-logo"
            src="/images/paris-2024.png"
            alt="paris-2024"
          />
        </HeaderWithCategory>
        <div className="loading-spinner">
          <Spin />
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <HeaderWithCategory
          className="form-header"
          title1=""
          title2=""
          color={"styled-title-container-main"}
        >
          <img
            className="intro-logo"
            src="/images/paris-2024.png"
            alt="paris-2024"
          />
        </HeaderWithCategory>
        <Footer />
      </>
    );
  }
}
