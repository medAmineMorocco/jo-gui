context("Form | Vie professionnelle - Deplacements professionnels step", () => {
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

  it("should show Deplacements step on form page", () => {
    cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep5/progress.json', 'progressJSON');
    sizes.forEach((size) => {
      cy.viewport(size.device);
      cy.window().then((win) => {
        win.sessionStorage.clear();
        cy.login("email@paris2024.org");

        cy.visit("/form");

        cy.url()
          .should("include", "/form")
          .then(() => {
            cy.get('input[value="true"]').check({force: true});
            cy.get('input[value="Voiture"]').check();
            cy.get('input[value="Train"]').check();
            cy.get('input[value="Avion"]').check();
            cy.wait(1000);
            cy.takeSnapshots("form - Deplacements professionnels", size);
          });
      });
    });
  });
});
