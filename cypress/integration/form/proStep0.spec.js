import {sizes} from "../utils";

context("Form | introduction step", () => {

  it("should show introduction step on form page", () => {
    cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep0/progress.json', 'progressJSON');
    sizes.forEach((size) => {
      cy.viewport(size.device);
      cy.window().then((win) => {
        win.sessionStorage.clear();
        cy.login("email@paris2024.org");

        cy.visit("/form");

        cy.url()
          .should("include", "/form")
          .then(() => {
            cy.takeSnapshots("form - introduction", size);
          });
      });
    });
  });

  it("should submit form", () => {
    cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep0/progress.json', 'progressJSON');
    cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/proStep0/state.json', 'getResponsesOfStep0');
    cy.stubRequest('POST', '**/api/response/thematic', 200);
    cy.window().then((win) => {
      win.sessionStorage.clear();
      cy.login("email@paris2024.org");
      cy.visit("/form");
      win.sessionStorage.clear();

      cy.get("#5f554172a13c7").clear().type("15");
      cy.get("#5f5541a7845e0").clear().type("16");
      cy.get("#5f5541ba9b096").clear().type("17");
      cy.submitForm();

      cy.wait(1000);
      cy.get(".footer-navigation-left span")
        .contains("Introduction")
        .should("exist");
      cy.get(".footer-navigation-right span")
        .contains("Empreinte numérique")
        .should("exist");
      cy.get(".footer-buttons-left button").click();
      cy.get("#5f554172a13c7").should("have.attr", "value", "15");
      cy.get("#5f5541a7845e0").should("have.attr", "value", "16");
      cy.get("#5f5541ba9b096").should("have.attr", "value", "17");
    });
  });

  it("should not submit form when questions are not filled", () => {
    cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep0/progress.json', 'progressJSON');
    sizes.forEach((size) => {
      cy.viewport(size.device);
      cy.window().then((win) => {
        win.sessionStorage.clear();
        cy.login("email@paris2024.org");
        cy.visit("/form");

        cy.wait(1000);
        cy.submitForm();

        cy.get(
          '.ant-form-item-explain div:contains("⚠ Merci de saisir votre réponse")'
        )
          .should(($el) => {
            expect($el).to.have.length(3);
          })
          .then(() => {
            cy.takeSnapshots("form - introduction errors", size);
          });
      });
    });
  });
});
