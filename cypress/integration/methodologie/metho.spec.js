import {sizes} from "../utils";

context('Methodologie page', () => {

    it('should show Methodologie page', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-vie-pro.json', 'progressJSON');
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');
                cy.visit("/metho");
                cy.url().should('include', '/metho').then(() => {
                    cy.takeSnapshots('Methodologie page', size);
                });
            });
        })
    });
});