import {sizes} from "../utils";

context('Home page', () => {

    it('should show home page', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');

                cy.url().should('include', '/home').then(() => {
                    cy.takeSnapshots('home page', size);
                });
            });
        })
    });

    it('should show notification error when can not get user progress ', () => {
        cy.window().then((win) => {
            win.sessionStorage.clear();
            cy.stubRequest('GET', '**/api/user/progress', 404);
            cy.login('email@paris2024.org');
    
            cy.get(`body:contains("Il y a une erreur , veuillez réesayer ultérieurement")`)
            .should("exist")
          });
        });
    });

    it('should enable default button when the user doesnt complete all form ', () => {
        cy.window().then((win) => {
            win.sessionStorage.clear();
            cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-vie-pro.json', 'progressJSON');
            cy.login('email@paris2024.org');
            
            cy.get('.container-single-button').first().then($el => {
                expect($el).to.have.css('filter', 'brightness(0.8)');
            });
            cy.get('.container-single-button').eq(1).then($el => {
                expect($el).to.have.css('filter', 'brightness(0.2)');
            });
            cy.get('.container-single-button').eq(2).then($el => {
                expect($el).to.have.css('filter', 'brightness(0.2)');
            });
        });
        
    });

    it('should enable all button when the user completes all form ', () => {
        cy.window().then((win) => {
            win.sessionStorage.clear();
            cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
            cy.login('email@paris2024.org');
    
            cy.wait(500);
            cy.get('.container-single-button').first().then($el => {
                expect($el).to.have.css('filter', 'brightness(0.8)');
            });
            cy.get('.container-single-button').eq(1).then($el => {
                expect($el).to.have.css('filter', 'brightness(0.8)');
            });
            cy.get('.container-single-button').eq(2).then($el => {
                expect($el).to.have.css('filter', 'brightness(0.8)');
            });
    });
});