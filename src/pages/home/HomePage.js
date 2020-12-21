import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { FooterWithDetails } from "@components/footer/FooterWithDetails";
import { scrollToTopOfThePage } from "@hooks/window";
import { Modal } from "@components/modal/Modal";
import { Header } from "@components/header/Header";
import { HomeButton } from "@components/homeButton/HomeButton";
import { getUserProgess } from "@services/userService";
import { notify } from "@utils/notification";
import {
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
} from "@utils/constants";
import "./homePage.css";

export function HomePage(props) {
  const [isVisible, setVisible] = useState(false);
  const [doesUserFinishAllForms, setDoesUserFinishAllForms] = useState();
  const MainColor = "var(--main-color)";

  useEffect(() => {
    getUserProgess()
      .then((response) => {
        if (response.progress === "RESULTATS") {
          setDoesUserFinishAllForms(true);
        } else {
          setDoesUserFinishAllForms(false);
        }
      })
      .catch(() => {
        notify("Il y a une erreur , veuillez réesayer ultérieurement");
      });
    scrollToTopOfThePage();
  }, []);

  return (
    <>
      <div className="header-container-home">
        <Header>
          <img className="logo" src="/images/paris-2024.png" alt="paris-2024" />
          <Button
            className="show-overlay-btn"
            type="primary"
            shape="circle"
            onClick={() => setVisible(true)}
          >
            <span>i</span>
          </Button>
        </Header>
      </div>
      <Modal
        title={ABOUT_TITLE}
        content={[ABOUT_CONTENT1, ABOUT_CONTENT2, ABOUT_CONTENT3]}
        isVisible={isVisible}
        hideOverlay={() => setVisible(false)}
      />
      <div className="title-container-home">
        <div className="hero-container">
          <div className="hero-wrapper">
            <div className="styled-title-container-home">
              La neutralité carbone des Jeux, c’est l’affaire de tous. Paris
              2024 a créé le
              <span style={{ color: MainColor }}> COACH CLIMAT </span> pour vous
              aider à mesurer et réduire votre
              <span style={{ color: MainColor }}>
                empreinte carbone. 3 étapes
              </span>
              pour estimer, comprendre & réduire, et s’engager
            </div>
          </div>
        </div>
      </div>
      <div className="content-container-home">
        <HomeButton doesUserFinishAllForms={doesUserFinishAllForms} />
      </div>
      <div className="footer-container-home">
        <FooterWithDetails />
      </div>
    </>
  );
}
