import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Footer } from "@components/footer/Footer";
import { Button } from "@components/button/Button";
import { BackButton } from "@components/button/BackButton";
import "./footerWithNavigation.css";

export function FooterWithNavigation({ previous, next, step, children }) {
  const {
    category: previousCategory,
    details: previousDetails = "",
    onClick: onPreviousClick,
  } = previous;
  const {
    category: nextCategory,
    details: nextDetails = "",
    onClick: onNextClick,
  } = next;
  return (
    <Footer>
      <div className="footer-buttons-container">
        <div className="footer-buttons-left">
          <BackButton onClick={onPreviousClick} />
        </div>
        <div className="footer-buttons-right">
          <Button
            {...(!onNextClick && { htmlType: "submit" })}
            onClick={onNextClick}
            form={step}
            text="suite"
            icon={<ArrowRightOutlined aria-label="flèche suivante" />}
          />
        </div>
      </div>
      <div className="footer-navigation-container">
        <div className="footer-navigation-left">
          <span>{previousCategory}</span>
        </div>
        <div className="footer-navigation-right">
          <span>{nextCategory}</span>
        </div>
      </div>
      <div className="footer-navigation-details-container">
        <div className="footer-navigation-left">
          <span>{previousDetails}</span>
        </div>
        <div className="footer-navigation-right">
          <span>{nextDetails}</span>
        </div>
      </div>
      {children}
    </Footer>
  );
}
