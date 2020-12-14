import React from "react";
import { Footer } from "@components/footer/Footer";
import "./footerWithDetails.css";

export function FooterWithDetails() {
  return (
    <Footer style={{ display: "flex", justifyContent: "center" }}>
      <div className="footer-details-container">
        <div
          className="footer-details"
          onClick={() => window.open("/home", "_blank")}
        >
          <span className="footer-detail">Méthodologie</span>
        </div>
        <div className="footer-details">
          <span
            className="footer-detail"
            onClick={() => window.open("#", "_blank")}
          >
            Mentions légales
          </span>
        </div>
        <div className="footer-details">
          <span
            className="footer-detail"
            onClick={() => window.open("#", "_blank")}
          >
            Condition générales d’utilisation
          </span>
        </div>
        <div className="footer-details">
          <span
            className="footer-detail"
            onClick={() => window.open("#", "_blank")}
          >
            Politique de confidentialité
          </span>
        </div>
        <div className="footer-details">
          <span
            className="footer-detail"
            onClick={() => window.open("#", "_blank")}
          >
            Accessibilité site
          </span>
        </div>
      </div>
    </Footer>
  );
}
