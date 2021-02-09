import React, { Fragment, useState, useEffect } from "react";
import { Radio } from "antd";
import { HeaderWithCategory } from "@components/header/HeaderWithCategory";
import { Header } from "@components/header/Header";
import { AnticiperPage } from "./anticiper/AnticiperPage";
import { CompenserPage } from "./compenser/CompenserPage";
import { MobiliserPage } from "./mobiliser/MobiliserPage";
import { ReduirePage } from "./reduire/ReduirePage";
import { FooterWithNavigation } from "@components/footer/FooterWithNavigation";
import { FooterWithDetails } from "@components/footer/FooterWithDetails";
import {
  RESULT_TITLE1,
  RESULT_TITLE2,
  MAILTO,
  ANTICIPER_FOOTER,
} from "@utils/constants";
import "./resultPage.css";

export function ResultsPage() {
  const [isCurrent, setCurrent] = useState("ANTICIPER");
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [content, setContent] = useState(null);
  const [contentSubTitle, setContentSubTitle] = useState();
  const footerTitle = (
    <p>
      {ANTICIPER_FOOTER}
      <a
        href="mailto:coach-climat@paris2024.org"
        style={{ color: "var(--main-color)" }}
      >
        {MAILTO}
      </a>
    </p>
  );

  function onChange(e) {
    setCurrent(e.target.value);
  }

  function setPreviousAndNext(previous, next) {
    setNextPage(next);
    setPreviousPage(previous);
  }

  function ClickNext() {
    if (isCurrent === "ANTICIPER") {
      setCurrent("REDUIRE");
    } else if (isCurrent === "REDUIRE") {
      setCurrent("COMPENSER");
    } else if (isCurrent === "COMPENSER") {
      setCurrent("MOBILISER");
    }
  }

  function ClickPrevious() {
    if (isCurrent === "REDUIRE") {
      setCurrent("ANTICIPER");
    } else if (isCurrent === "COMPENSER") {
      setCurrent("REDUIRE");
    } else if (isCurrent === "MOBILISER") {
      setCurrent("COMPENSER");
    }
  }

  useEffect(() => {
    switch (isCurrent) {
      case "ANTICIPER":
        setContent(<AnticiperPage />);
        setContentSubTitle(
          <p>
            <span style={{ color: "var(--main-color)" }}>
              Mesurer et comprendre{" "}
            </span>
            son empreinte pour la maîtriser
          </p>
        );
        setPreviousAndNext("", "Réduire");
        break;
      case "REDUIRE":
        setContent(<ReduirePage />);
        setContentSubTitle(
          <p>
            Changer ses habitudes et mettre en place des{" "}
            <span style={{ color: "var(--main-color)" }}>
              actions de réduction{" "}
            </span>
            pour minimiser cette empreinte.
          </p>
        );
        setPreviousAndNext("Anticiper", "Compenser");
        break;
      case "COMPENSER":
        setContent(<CompenserPage />);
        setContentSubTitle(
          <p>
            Retirer du CO₂ de l'atmosphère en participant à des{" "}
            <span style={{ color: "var(--main-color)" }}>
              projets de compensation
            </span>
          </p>
        );
        setPreviousAndNext("Réduire", "Mobiliser");
        break;
      case "MOBILISER":
        setContent(<MobiliserPage />);
        setContentSubTitle("");
        setPreviousAndNext("Compenser", "");
        break;
      default:
        setContent(<AnticiperPage />);
    }
  }, [isCurrent]);

  const radioStyle = {
    display: "none",
  };

  return (
    <Fragment>
      <Header className="logo-result-page">
        <img className="logo" src="/images/paris-2024.png" alt="paris-2024" />
      </Header>
      <HeaderWithCategory
        className="form-header-result"
        color={"styled-title-container-main"}
        title1={RESULT_TITLE1}
        title2={RESULT_TITLE2}
      />
      <div className="navbar-result">
        <Radio.Group
          defaultValue={"ANTICIPER"}
          buttonStyle="solid"
          onChange={onChange}
          value={isCurrent}
        >
          <Radio.Button value={"ANTICIPER"}>Anticiper</Radio.Button>
          <Radio.Button value={"REDUIRE"}>Réduire</Radio.Button>
          <Radio.Button value={"COMPENSER"}>Compenser</Radio.Button>
          <Radio.Button value={"MOBILISER"}>Mobiliser</Radio.Button>
          <Radio.Button style={radioStyle}></Radio.Button>
        </Radio.Group>
      </div>
      <span className="sub-title-result-1">
        <p>{contentSubTitle}</p>
      </span>
      <div className="content-result">{content}</div>
      {isCurrent === "ANTICIPER" ? (
        <>
          <span className="sub-title-result-2">
            <p>{footerTitle}</p>
          </span>
          <div className="align-zoom-bottom"></div>
        </>
      ) : null}

      <div className="footer-result">
        <FooterWithNavigation
          previous={{
            category: previousPage,
            onClick: () => ClickPrevious(),
          }}
          next={{
            category: nextPage,
            text: "",
            onClick: () => ClickNext(),
          }}
        >
          <FooterWithDetails />
        </FooterWithNavigation>
      </div>
    </Fragment>
  );
}
