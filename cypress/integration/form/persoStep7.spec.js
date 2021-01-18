import {sizes} from "../utils";

context('Form | Services publics step', () => {

	it('should show services publics step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep7/progress.json', 'progressJSON');

		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');
				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - Services Publics', size);
					});
			});
		});
	});

	it('should submit form', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep7/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/persoStep7/state.json', 'getResponsesOfStep7');

		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit('/form');
			cy.wait(1000);

			cy.get('#5f557a78e938b').should('have.attr', 'value', '1283,76 kgCO2/citoyen');
		});
	});
});
