import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { FooterWithDetails } from "@components/footer/FooterWithDetails";
import { scrollToTopOfThePage } from "@hooks/window";
import { Modal } from "@components/modal/Modal";
import { Header } from "@components/header/Header";
import { StyledTitle } from "@components/title/StyledTitle";
import { HomeButton } from "@components/homeButton/HomeButton";
import { getUserProgess } from "@services/userService";
import { notify } from "@utils/notification";
import {
  HEADTITLE1,
  HEADTITLE2,
  ABOUT_TITLE,
  ABOUT_CONTENT1,
  ABOUT_CONTENT2,
  ABOUT_CONTENT3,
} from "@utils/constants";
import "./homePage.css";

export function HomePage(props) {
  const [isVisible, setVisible] = useState(false);
  const [isFinish, setFinish] = useState();

  useEffect(() => {
    getUserProgess()
      .then((response) => {
        if (response.progress === "RESULTATS") {
          setFinish(true);
        } else {
          setFinish(false);
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
            <StyledTitle
              style={{
                fontWeight: "bolder",
                fontSize: "30px",
                lineHeight: "2vw",
                fontFamily: "Paris2024",
              }}
              title1={HEADTITLE1}
              title2={HEADTITLE2}
            />
          </div>
        </div>
      </div>
      <div className="content-container-home">
        <HomeButton isFinish={isFinish} />
      </div>
      <div className="footer-container-home">
        <FooterWithDetails />
      </div>
    </>
  );
}
