import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Footer } from "@components/footer/Footer";
import { Button } from "@components/button/Button";
import { BackButton } from "@components/button/BackButton";
import "./footerWithNavigation.css";

export function FooterWithNavigation({ previous, next }) {
  return (
    <Footer>
      <div className="footer-buttons-container">
        <div className="footer-buttons-left">
          <BackButton />
        </div>
        <div className="footer-buttons-right">
          <Button text="suite" icon={() => <ArrowRightOutlined />} />
        </div>
      </div>

      <div className="footer-navigation-container">
        <div className="footer-navigation-left">
          <span>{previous}</span>
        </div>
        <div className="footer-navigation-right">
          <span>{next}</span>
        </div>
      </div>
    </Footer>
  );
}
