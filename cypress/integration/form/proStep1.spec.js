import {sizes} from "../utils";

context('Form | Vie professionnelle - Au bureau step', () => {

	it('should show Au Bureau step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep1/progress.json', 'progressJSON');
		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');

				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - Au bureau', size);
					});
			});
		});
	});
});
