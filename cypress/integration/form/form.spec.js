context("Form wizard", () => {

    it("should get current form step of user", () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-vie-pro.json', 'progressJSON');
        cy.window().then((win) => {
            win.sessionStorage.clear();
            win.sessionStorage.setItem("current-step", 0);
            cy.login("email@paris2024.org");

            cy.visit("/form");

            cy.url().should("include", "/form");
            cy.get('.footer-navigation-left span').contains('Empreinte numérique').should('exist');
            cy.get('.footer-navigation-right span').contains('Trajets').should('exist');
        });
    });

    it("should redirect user to intro page when he already finished the forms", () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.window().then((win) => {
            win.sessionStorage.clear();
            win.sessionStorage.setItem("current-step", 0);
            cy.login("email@paris2024.org");

            cy.visit("/form");

            cy.url().should("include", "/intro");
        });
    });

    it("should show first form step when cannot get user progress", () => {
        cy.stubRequest('GET', '**/api/user/progress', 400);
        cy.window().then((win) => {
            win.sessionStorage.clear();
            win.sessionStorage.setItem("current-step", 0);
            cy.login("email@paris2024.org");

            cy.visit("/form");

            cy.url().should("include", "/form");
            cy.get('.footer-navigation-right span').contains('Au bureau').should('exist');
            cy.get(`body:contains("ton état d'avancement ne peut pas être récupéré, veuillez réessayer ultérieurement")`).should("exist");
        });
    });

});
