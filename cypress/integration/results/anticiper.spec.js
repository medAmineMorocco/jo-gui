context('Anticiper page', () => {

    const sizes = [
        {
            device: 'iphone-5',
            width: 320
        },
        {
            device: 'ipad-2',
            width: 768
        },
        {
            device: 'macbook-13',
            width: 1280
        }
    ];


    it('should show anticiper page', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win => {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');

                cy.visit("/results");

                cy.url()
                    .should('include', '/results')
                    .then(() => {
                        cy.wait(1000);
                        cy.takeSnapshots('Anticiper', size);
                    });
            });
        })
    });

    it('should show error msg notification when cannot get user progress', () => {
        cy.stubRequest('GET', '**/api/user/progress', 500);
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results");

            cy.url().should('include', '/results');
            cy.get(`body:contains("Ton état d'avancement ne peut pas être récupéré, veuillez réessayer ultérieurement")`)
                .should("exist");

        });
    });

    it('should show error msg notification when cannot get user summary', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 500);
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results");

            cy.url().should('include', '/results');
            cy.get(`body:contains("Ton bilan ne peut pas être récupéré, veuillez réessayer ultérieurement")`)
                .should("exist");

        });
    });

    it('should redirect user to home page when he does not already finished all forms', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-vie-pro.json', 'progressJSON');
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results");

            cy.url().should('include', '/home');
        });
    });

});