import React from "react";
import { Footer } from "@components/footer/Footer";
import { useHistory } from "react-router-dom";
import "./footerWithDetails.css";

export function FooterWithDetails() {
  const history = useHistory();
  return (
    <Footer style={{ display: "flex", justifyContent: "center" }}>
      <div className="footer-details-container">
        <div
          className="footer-details"
          onClick={() => history.push("/metho", "_blank")}
        >
          <span className="footer-detail">Méthodologie</span>
        </div>
        <div className="footer-details">
          <span
            className="footer-detail"
            onClick={() =>
              window.open("/pdfs/Coach Climat - Mentions légales.pdf", "_blank")
            }
          >
            Mentions légales
          </span>
        </div>
        <div className="footer-details">
          <span
            className="footer-detail"
            onClick={() =>
              window.open(
                "/pdfs/Coach Climat - Conditions Générales d'Utilisation.pdf",
                "_blank"
              )
            }
          >
            Conditions générales d’utilisation
          </span>
        </div>
        <div className="footer-details">
          <span
            className="footer-detail"
            onClick={() =>
              window.open(
                "/pdfs/Coach Climat - Politique de confidentialité.pdf",
                "_blank"
              )
            }
          >
            Politique de confidentialité
          </span>
        </div>
      </div>
    </Footer>
  );
}
