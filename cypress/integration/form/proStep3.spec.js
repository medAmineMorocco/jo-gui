context("Form | Vie professionnelle - Restauration step3", () => {
  const sizes = [
    {
      device: "iphone-5",
      width: 320,
    },
    {
      device: "ipad-2",
      width: 768,
    },
    {
      device: "macbook-13",
      width: 1280,
    },
  ];

  it("should show Restauration step on form page", () => {
    sizes.forEach((size) => {
      cy.viewport(size.device);
      cy.window().then((win) => {
        win.sessionStorage.clear();
        win.sessionStorage.setItem("current-step", 3);
        cy.login("email@paris2024.org");

        cy.visit("/form");

        cy.url()
          .should("include", "/form")
          .then(() => {
            cy.takeSnapshots("form - Restauration", size);
          });
      });
    });
  });

  it("should submit form", () => {
    cy.window().then((win) => {
      win.sessionStorage.clear();
      win.sessionStorage.setItem("current-step", 3);
      cy.login("email@paris2024.org");
      cy.visit("/form");

      cy.checkMeals("#repas_question1", {
        monday: "sub1",
        tuesday: "sub1",
        wednesday: "sub2",
        thursday: "sub2",
        friday: "sub3",
      });

      cy.pickValue('.boissons-chaudes .slider-container-0', '1');

      cy.pickValue('.boissons-chaudes .slider-container-1', '5');

      cy.pickValue('.boissons-chaudes .slider-container-2', '9');

      cy.get("button span:contains(suite)").click();

      cy.wait(1000);

      cy.get(".footer-navigation-left span")
        .contains("Restauration")
        .should("exist");
      cy.get(".footer-navigation-right span")
        .contains("Déplacements")
        .should("exist");

      cy.get(".footer-buttons-left button").click();

      cy.expectToBeChecked([
        "monday-sub1",
        "tuesday-sub1",
        "wednesday-sub2",
        "thursday-sub2",
        "friday-sub3",
      ]);

      cy.get(".boissons-chaudes .slider-container-0 .ant-slider-handle").should(
        "have.attr",
        "aria-valuenow",
        "1"
      );

      cy.get(".boissons-chaudes .slider-container-1 .ant-slider-handle").should(
        "have.attr",
        "aria-valuenow",
        "5"
      );

      cy.get(".boissons-chaudes .slider-container-2 .ant-slider-handle").should(
        "have.attr",
        "aria-valuenow",
        "9"
      );
    });
  });
});
