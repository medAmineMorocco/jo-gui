import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { Button as ButtonAntd } from "antd";
import { ReactComponent as Calendar } from "@theme/icons/col-calendar.svg";
import { ReactComponent as Folder } from "@theme/icons/col-folder.svg";
import { ReactComponent as StopWatch } from "@theme/icons/col-stopwatch.svg";
import { scrollToTopOfThePage } from "@hooks/window";
import { Header } from "@components/header/Header";
import { Modal } from "@components/modal/Modal";
import { HomeOutlined } from "@ant-design/icons";
import { FooterWithDetails } from "@components/footer/FooterWithDetails";
import * as dompurify from "dompurify";
import {
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
  ABOUT_CONTENT4,
  INTRODUCTION_TITLE1,
  INTRODUCTION_TITLE2,
  INTRODUCTION_TITLE4,
  INTRODUCTION_BTN_DESCRIPTION,
  LINK_HOME_ICON,
  INTRO_DESCRIPTION1,
  INTRO_DESCRIPTION2,
  INTRO_DESCRIPTION3,
} from "@utils/constants";
import "./introPage.css";

export function IntroPage() {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    scrollToTopOfThePage();
  }, []);

  return (
    <div className="new-intro-page">
      <Header>
        <div className="home-link">
          <Link to="/">
            <ButtonAntd
              className="link-to-home-icon"
              type="primary"
              shape="circle"
              icon={<HomeOutlined aria-label="Revenir à la page d'accueil" />}
            />
            <span className="paris2024-title">{LINK_HOME_ICON}</span>
          </Link>
        </div>
        <img
          className="intro-logo"
          src="/images/paris-2024.png"
          alt="paris-2024"
        />
        <Button
          className="show-overlay-btn"
          type="primary"
          shape="circle"
          onClick={() => setVisible(true)}
        >
          <span>i</span>
        </Button>
      </Header>
      <Modal
        title={ABOUT_TITLE}
        content={[
          ABOUT_CONTENT1,
          ABOUT_CONTENT2,
          ABOUT_CONTENT3,
          ABOUT_CONTENT4,
        ]}
        isVisible={isVisible}
        hideOverlay={() => setVisible(false)}
      />

      <div className="into-container">
        <div className="into-titles">
          <div>
            <span>DANS LES STARTING-BLOCKS</span>
          </div>
          <div className="second-title">
            <span>Avant de commencer, il vous faut...</span>
          </div>
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <StopWatch />
          </div>
          <div className="into-title">
            <span className="intro-parag-title">{INTRODUCTION_TITLE1}</span>
          </div>
          <div
            className="intro-parag"
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(INTRO_DESCRIPTION1),
            }}
          />
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <Folder />
          </div>
          <div className="into-title">
            <span className="intro-parag-title">{INTRODUCTION_TITLE2}</span>
          </div>
          <div
            className="intro-parag"
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(INTRO_DESCRIPTION2),
            }}
          />
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <Calendar />
          </div>
          <div className="into-title">
            <span className="intro-parag-title">{INTRODUCTION_TITLE4}</span>
          </div>
          <div
            className="intro-parag"
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(INTRO_DESCRIPTION3),
            }}
          />
        </div>
      </div>

      <div className="center-items-container">
        <Link to="/form" className="custom-btn-intro">
          {INTRODUCTION_BTN_DESCRIPTION}
        </Link>
      </div>

      <FooterWithDetails />
    </div>
  );
}
