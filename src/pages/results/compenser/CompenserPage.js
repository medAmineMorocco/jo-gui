import React from "react";
import { Card } from "@components/card/Card";
import * as dompurify from "dompurify";
import {
  COMPENSER_PANEL_TITLE1,
  COMPENSER_DESCRIPTION1,
  COMPENSER_PANEL_TITLE2,
  COMPENSER_DESCRIPTION2,
  COMPENSER_DESCRIPTION_VIDEO,
} from "@utils/constants";
import "./compenserPage.css";

export function CompenserPage() {
  return (
    <div className="page-compenser">
      <div className="cards-section">
        <div>
          <Card title={COMPENSER_PANEL_TITLE1} backgroundColor="#3ede8e">
            <p className="card-description">{COMPENSER_DESCRIPTION1}</p>
          </Card>
        </div>
        <div>
          <Card title={COMPENSER_PANEL_TITLE2} backgroundColor="#17b7b0">
            <p className="card-description">{COMPENSER_DESCRIPTION2}</p>
          </Card>
        </div>
      </div>

      <div
        className="compenser-description-section"
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(COMPENSER_DESCRIPTION_VIDEO),
        }}
      />

      <div>
        <iframe
          title="composer-video"
          className="composer-video"
          src="https://www.youtube.com/embed/EZblJnY5ZuA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div style={{ height: "300px" }} />
    </div>
  );
}
