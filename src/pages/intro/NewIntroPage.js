import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "antd";
import { Button as ButtonAntd } from "antd";
import { ReactComponent as WorkFromHome } from "@theme/icons/col-work-home.svg";
import { ReactComponent as Calendar } from "@theme/icons/col-calendar.svg";
import { ReactComponent as Folder } from "@theme/icons/col-folder.svg";
import { ReactComponent as StopWatch } from "@theme/icons/col-stopwatch.svg";
import { getUserProgess } from "@services/userService";
import { scrollToTopOfThePage } from "@hooks/window";
import { Header } from "@components/header/Header";
import { Modal } from "@components/modal/Modal";
import { Link } from "react-router-dom";
import { HomeOutlined } from "@ant-design/icons";
import { FooterWithDetails } from "@components/footer/FooterWithDetails";
import {
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
  INTRODUCTION_TITLE1,
  INTRODUCTION_TITLE2,
  INTRODUCTION_TITLE3,
  INTRODUCTION_TITLE4,
  INTRODUCTION_DESCRIPTION1,
  INTRODUCTION_DESCRIPTION2,
  INTRODUCTION_DESCRIPTION3,
  INTRODUCTION_DESCRIPTION4,
  INTRODUCTION_BTN_DESCRIPTION,
  LINK_HOME_ICON,
} from "@utils/constants";
import "./newIntroPage.css";

export function NewIntroPage() {
  const history = useHistory();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    getUserProgess()
      .then((response) => {
        if (response.progress === "RESULTATS") {
          history.push("/home");
        }
      })
      .catch(() => history.push("/home"));
    scrollToTopOfThePage();
  }, [history]);

  return (
    <div className="new-intro-page">
      <Header>
        <div className="home-link">
          <Link to="/">
            <ButtonAntd
              className="link-to-home-icon"
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
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
        content={[ABOUT_CONTENT1, ABOUT_CONTENT2, ABOUT_CONTENT3]}
        isVisible={isVisible}
        hideOverlay={() => setVisible(false)}
      />

      <div className="into-container">
        <div className="item-container">
          <div className="intro-icon">
            <StopWatch />
          </div>
          <span className="intro-parag">
            <span className="intro-parag-title">
              {INTRODUCTION_TITLE1}&nbsp;
            </span>
            {INTRODUCTION_DESCRIPTION1}
          </span>
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <Folder />
          </div>
          <span className="intro-parag">
            <span className="intro-parag-title">
              {INTRODUCTION_TITLE2}&nbsp;
            </span>
            {INTRODUCTION_DESCRIPTION2}
          </span>
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <WorkFromHome />
          </div>
          <span className="intro-parag">
            <span className="intro-parag-title">
              {INTRODUCTION_TITLE3}&nbsp;
            </span>
            {INTRODUCTION_DESCRIPTION3}
          </span>
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <Calendar />
          </div>
          <span className="intro-parag">
            <span className="intro-parag-title">
              {INTRODUCTION_TITLE4}&nbsp;
            </span>
            {INTRODUCTION_DESCRIPTION4}
          </span>
        </div>
      </div>

      <div className="center-items-container">
        <Button
          className="custom-btn-intro"
          onClick={() => history.push("/form")}
        >
          <span>{INTRODUCTION_BTN_DESCRIPTION}</span>
        </Button>
      </div>

      <FooterWithDetails />
    </div>
  );
}
