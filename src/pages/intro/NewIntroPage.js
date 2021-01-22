import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import { Button as ButtonAntd } from "antd";
import { ReactComponent as Calendar } from "@theme/icons/col-calendar.svg";
import { ReactComponent as Folder } from "@theme/icons/col-folder.svg";
import { ReactComponent as StopWatch } from "@theme/icons/col-stopwatch.svg";
import { getUserProgess } from "@services/userService";
import { scrollToTopOfThePage } from "@hooks/window";
import { Header } from "@components/header/Header";
import { Modal } from "@components/modal/Modal";
import { HomeOutlined } from "@ant-design/icons";
import { FooterWithDetails } from "@components/footer/FooterWithDetails";
import {
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
  INTRODUCTION_TITLE1,
  INTRODUCTION_TITLE2,
  INTRODUCTION_TITLE4,
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
        content={[ABOUT_CONTENT1, ABOUT_CONTENT2, ABOUT_CONTENT3]}
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
            <span className="intro-parag-title">
              {INTRODUCTION_TITLE1}&nbsp;
            </span>
          </div>
          <div className="intro-parag">
            <span>
              Eh oui, il y a quelques questions à se poser{" "}
              <span style={{ fontWeight: "bolder" }}>avant</span> de connaître
              son empreinte carbonne !
            </span>
          </div>
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <Folder />
          </div>
          <div className="into-title">
            <span className="intro-parag-title">
              {INTRODUCTION_TITLE2}&nbsp;
            </span>
          </div>
          <div className="intro-parag">
            <span>
              Pour votre <span style={{ color: "#0061FF" }}>vie perso</span> :
              vos souvenirs de voyages, repas, éventuellement vos factures
              d'énergies...
              <br />
              Pour votre <span style={{ color: "#00B460" }}>vie pro</span> :
              laissez-vous guider.
            </span>
          </div>
        </div>

        <div className="item-container">
          <div className="intro-icon">
            <Calendar />
          </div>
          <div className="into-title">
            <span className="intro-parag-title">
              {INTRODUCTION_TITLE4}&nbsp;
            </span>
          </div>
          <div className="intro-parag">
            <span>
              On vous recommande de vous référer à l'année{" "}
              <span style={{ fontWeight: "bolder" }}>2019</span> afin de pouvoir
              comparer par la suite à l'année 2020 moins standard, puis 2021 !
            </span>
          </div>
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
