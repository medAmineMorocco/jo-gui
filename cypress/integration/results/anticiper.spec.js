import {sizes} from "../utils";

context('Anticiper page', () => {

    it('should show anticiper page', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win => {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');

                cy.visit("/results/anticiper");

                cy.url()
                    .should('include', '/results/anticiper')
                    .then(() => {
                        cy.wait(1000);
                        cy.takeSnapshots('Anticiper', size);

                        cy.wait(1000);
                        cy.get('span:contains(Détail Vie Pro)').click();
                        cy.takeSnapshots('Anticiper pro', size);

                        cy.wait(1000);
                        cy.get('span:contains(Détail Vie Perso)').click();
                        cy.takeSnapshots('Anticiper perso', size);
                    });
            });
        })
    });

    it('should show error msg notification when cannot get user progress', () => {
        cy.stubRequest('GET', '**/api/user/progress', 500);
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results/anticiper");

            cy.url().should('include', '/results/anticiper');
            cy.get(`body:contains("Votre état d'avancement ne peut pas être récupéré, veuillez réessayer ultérieurement")`)
                .should("exist");

        });
    });

    it('should show error msg notification when cannot get user summary', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 500);
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results/anticiper");

            cy.url().should('include', '/results/anticiper');
            cy.get(`body:contains("Votre bilan ne peut pas être récupéré, veuillez réessayer ultérieurement")`)
                .should("exist");

        });
    });

    it('should redirect user to home page when he does not already finished all forms', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-vie-pro.json', 'progressJSON');
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results/anticiper");

            cy.url().should('include', '/home');
        });
    });

});