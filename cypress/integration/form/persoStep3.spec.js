import {itIf, sizes} from "../utils";

context('Form | Vie personnelle - Biens personnels step', () => {

	it('should show Biens personnels step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep3/progress.json', 'progressJSON');

		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');
				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - Biens personnels', size);
					});
			});
		});
	});

	itIf(Cypress.env('REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED') === true, 'should not exceed question value in its reduction action', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep3/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/persoStep3/state.json', 'getResponsesOfStep3');

		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit('/form');
			cy.wait(1000);

			cy.typeNumberForQuestionWithUnit('5f55692a73b55', 5);
			cy.get('#5f60a1676ff16')
				.parents('.ant-select-selector')
				.click({force: true})
				.then(() => {
					[0, 1, 2, 3, 4, 5].forEach((value) => cy.get('.ant-select-item-option-content').should('contain', value));
					cy.get('.ant-select-item-option-content').should('not.contain', '6');
					cy.get('.ant-select-item-option-content').should('not.contain', '7');
					cy.get('.ant-select-item-option-content').should('not.contain', '8');
				});
		});
	});

});
