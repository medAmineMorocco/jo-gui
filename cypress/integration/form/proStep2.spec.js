import { sizes } from '../utils';

context('Form | Vie professionnelle - Utilisation du numérique (pro) step2', () => {
	it('should show Utilisation du numérique (pro) step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep2/progress.json', 'progressJSON');
		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');

				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - Utilisation du numérique (pro)', size);
					});
			});
		});
	});

	it('should submit form', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep2/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/proStep2/state.json', 'getResponsesOfStep2');
		cy.stubRequest('POST', '**/api/response/thematic', 200);
		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');

			cy.visit('/form');

			cy.get('#5f554eb63be47').clear().type('99');

			cy.pickValue('.nbr-recherche', '1');

			cy.pickValue('.nbr-conference', '5');

			cy.pickValue('.nbr-streaming', '9');

			cy.submitForm();

			cy.wait(1000);

			cy.get('.footer-navigation-left span').contains('Utilisation du numérique (pro)').should('exist');
			cy.get('.footer-navigation-right span').contains('Déplacements Domicile - Travail').should('exist');

			cy.get('.footer-buttons-left button').click();

			cy.get(`label[for="5f554eb63be47"]`)
				.parents('.ant-form-item')
				.find('.ant-input-number-input')
				.should('have.attr', 'value', '99');

			cy.get('.nbr-recherche .ant-slider-handle').should('have.attr', 'aria-valuenow', '1');

			cy.get('.nbr-conference .ant-slider-handle').should('have.attr', 'aria-valuenow', '5');

			cy.get('.nbr-streaming .ant-slider-handle').should('have.attr', 'aria-valuenow', '9');
		});
	});
});
