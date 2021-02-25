import { sizes } from '../utils';

context('Mobiliser page', () => {

    it('should show mobiliser page', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        cy.stubRequest('GET', '**/api/category/reductions', 200, 'results/categories-thematics-actions.json', 'getThematicsWithItsActionsByCategory');

        sizes.forEach((size) => {
            cy.viewport(size.device);
            cy.window().then((win) => {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');

                cy.visit('/results/mobiliser');

                cy.url()
                    .should('include', '/results/mobiliser')
                    .then(() => {
                        cy.wait(1000);
                        cy.takeSnapshots('Mobiliser', size);
                    });
            });
        });
    });
});
