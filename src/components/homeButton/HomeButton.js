import React from "react";
import { Button } from "antd";
import "./homeButton.css";

export function HomeButton({ doesUserFinishAllForms }) {
  const styleBrightnessUp = "brightness(80%)";
  const styleBrightnessDown = "brightness(20%)";
  return (
    <>
      <div className="container-button-home">
        <div
          className="container-single-button"
          style={{ filter: styleBrightnessUp }}
        >
          <Button
            className="size-image-home"
            href="/intro"
            style={{ backgroundImage: "url(/images/hero.jpg)" }}
          >
            <div className="text-button-home">1</div>
            <div className="text-button-home-hover">
              <span className="text-decoration-home">Faire le test</span>
              <span className="text-decoration-home">
                pour calculer votre empreinte carbone{" "}
              </span>
              <span className="sous-text-decoration-home">(15 minutes)</span>
            </div>
            <span className="text-decoration-home-button">Estimer</span>
          </Button>
        </div>

        <div
          className="container-single-button"
          style={
            doesUserFinishAllForms === true
              ? { filter: styleBrightnessUp }
              : { filter: styleBrightnessDown }
          }
        >
          <Button
            className="size-image-home"
            href="/results/anticiper"
            style={{ backgroundImage: "url(/images/section-1.jpg)" }}
            disabled={!doesUserFinishAllForms}
          >
            <div className="text-button-home">2</div>
            <div className="text-button-home-hover">
              <span className="text-decoration-home">
                Visualiser les résultats et tester l’impact de nouvelles actions
              </span>
              <span className="sous-text-decoration-home">(10 minutes)</span>
            </div>
            <span className="text-decoration-home-button">
              Comprendre et réduire
            </span>
          </Button>
        </div>

        <div
          className="container-single-button"
          style={
            doesUserFinishAllForms === true
              ? { filter: styleBrightnessUp }
              : { filter: styleBrightnessDown }
          }
        >
          <Button
            className="size-image-home"
            href="/results/mobiliser"
            style={{ backgroundImage: "url(/images/section-2.jpg)" }}
            disabled={!doesUserFinishAllForms}
          >
            <div className="text-button-home">3</div>
            <div className="text-button-home-hover">
              <span className="text-decoration-home">
                Aller plus loin pour compenser et mobiliser
              </span>
              <span className="sous-text-decoration-home">(5 minutes)</span>
            </div>
            <span className="text-decoration-home-button">S'engager</span>
          </Button>
        </div>
      </div>
    </>
  );
}
