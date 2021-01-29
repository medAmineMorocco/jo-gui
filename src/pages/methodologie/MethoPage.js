import React, { Fragment, useState, useEffect } from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { BackButton } from "@components/button/BackButton";
import { Modal } from "@components/modal/Modal";
import { Header } from "@components/header/Header";
import { Footer } from "@components/footer/Footer";
import { StyledTitle } from "@components/title/StyledTitle";
import { Section } from "@components/section/Section";
import {
  HERO_TITLE1,
  HERO_TITLE2,
  HERO_DESCRIPTION,
  FOOTER_START_ACTION,
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
  MAIN_DESC1,
  MAIN_DESC2,
  MAIN_DESC3,
  SECTION1_TITLE,
  SECTION1_PARAG0,
  SECTION1_PARAG1,
  SECTION1_PARAG2,
  SECTION1_PARAG3,
  SECTION2_TITLE,
  SECTION2_PARAG1,
  SECTION2_PARAG2,
  SECTION2_PARAG3,
  SECTION3_TITLE,
  SECTION3_PARAG1,
  SECTION3_PARAG2,
  SECTION3_PARAG3,
  SECTION3_PARAG4,
  WEBSITE_INFO_MSG,
  WEBSITE_URL,
  CONTACT_LEGAL_MENTION,
  CONTACT_ACCESSIBILITY_SITES,
  CONTACT_PRIVACY_POLICY,
  CONTACT_COOKIES,
  CONTACT_CALL_TENDER,
  CONTACT_TERMS_PURCHASE,
} from "@utils/constants";
import { scrollToTopOfThePage } from "@hooks/window";
import { useHistory } from "react-router-dom";
import "./methoPage.css";

export function MethoPage(props) {
  const [isVisible, setVisible] = useState(false);
  const history = useHistory();

  const onIntro = () => {
    history.push("/intro");
  };
  const onHome = () => {
    history.push("/home");
  };
  useEffect(() => {
    scrollToTopOfThePage();
  }, []);

  return (
    <Fragment>
      <Header>
        <img className="logo" src="/images/paris-2024.png" alt="paris-2024" />
        <Button
          className="metho-show-overlay-btn"
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
      <div className="metho-hero-container">
        <div className="metho-hero-wrapper">
          <StyledTitle
            style={{
              fontWeight: "bolder",
              fontSize: "5vw",
              lineHeight: "4vw",
            }}
            color={"styled-title-container-main"}
            title1={HERO_TITLE1}
            title2={HERO_TITLE2}
          />
          <div className="metho-hero-description">{HERO_DESCRIPTION}</div>
        </div>
      </div>
      <div className="metho-main-description">
        <p>{MAIN_DESC1}</p>
        <p>{MAIN_DESC2}</p>
        <p>{MAIN_DESC3}</p>
      </div>

      <Section
        title={SECTION1_TITLE}
        paragraphs={[
          SECTION1_PARAG0,
          SECTION1_PARAG1,
          SECTION1_PARAG2,
          SECTION1_PARAG3,
        ]}
        style={{ background: "#009494" }}
        imgStyle={{ backgroundImage: 'url("/images/section-1.jpg")' }}
        imgPosition="right"
      />

      <Section
        title={SECTION2_TITLE}
        paragraphs={[SECTION2_PARAG1, SECTION2_PARAG2, SECTION2_PARAG3]}
        style={{ background: "#FF8675" }}
        imgStyle={{ backgroundImage: 'url("/images/section-2.jpg")' }}
        imgPosition="left"
      />

      <div className="metho-intro-last-section">
        <Section
          title={SECTION3_TITLE}
          paragraphs={[
            SECTION3_PARAG1,
            SECTION3_PARAG2,
            SECTION3_PARAG3,
            SECTION3_PARAG4,
          ]}
          style={{ background: "#003B55" }}
        />
      </div>

      <div className="metho-section-footer">
        <div className="metho-section-divider"></div>
        <div className="metho-website-info">{WEBSITE_INFO_MSG}</div>
        <div className="metho-website-url">
          <a href="#0">{WEBSITE_URL}</a>
        </div>
      </div>

      <div className="metho-contacts">
        <div className="metho-contacts-urls">
          <a href="#0">{CONTACT_LEGAL_MENTION}</a>&nbsp;&nbsp;-&nbsp;&nbsp;
          <a href="#0">{CONTACT_ACCESSIBILITY_SITES}</a>
          &nbsp;&nbsp;-&nbsp;&nbsp;
          <a href="#0">{CONTACT_PRIVACY_POLICY}</a>&nbsp;&nbsp;-&nbsp;&nbsp;
          <a href="#0">{CONTACT_COOKIES}</a>&nbsp;&nbsp;-&nbsp;&nbsp;
          <a href="#0">{CONTACT_CALL_TENDER}</a>&nbsp;&nbsp;-&nbsp;&nbsp;
          <a href="#0">{CONTACT_TERMS_PURCHASE}</a>
        </div>
      </div>

      <div className="metho-footer-picture"></div>

      <Footer style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="metho-back-button-metho">
          <BackButton onClick={onHome} />
        </div>
        <Button
          className="footer-action-start"
          type="primary"
          shape="round"
          onClick={onIntro}
        >
          {FOOTER_START_ACTION}{" "}
          <ArrowRightOutlined aria-label="flèche suivante" />
        </Button>
      </Footer>
    </Fragment>
  );
}
