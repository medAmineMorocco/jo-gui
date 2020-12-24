context('Form | alimentation step', () => {
	const sizes = [
		{
			device: 'iphone-5',
			width: 320,
		},
		{
			device: 'ipad-2',
			width: 768,
		},
		{
			device: 'macbook-13',
			width: 1280,
		},
	];

	it('should show alimentation step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep5/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/persoStep5/state.json', 'getResponsesOfStep5');

		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');
				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - alimentation', size).then(() => {
							cy.get('.custom-btn-modal')
								.click({ force: true })
								.then(() =>
									cy.takeSnapshots('form - alimentation conseils', size).then(() => {
										cy.get('.modal-close-btn-modal').click();
										if (process.env.REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED === 'true') {
											cy.get('.ant-switch')
												.eq(0)
												.click({ force: true })
												.then(() => cy.takeSnapshots('form - alimentation actions de réduction', size));
										} else {
											cy.takeSnapshots('form - alimentation actions de réduction', size);
										}
									})
								);
						});
					});
			});
		});
	});

	it('should submit form', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep5/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/persoStep5/state.json', 'getResponsesOfStep5');
		cy.stubRequest('POST', '**/api/response/thematic', 200);

		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit('/form');
			cy.wait(1000);

			cy.count('#5f5570e5d882c', 1);

			cy.pickValue('.nombres-repas .slider-container-0', '1');
			cy.pickValue('.nombres-repas .slider-container-1', '2');
			cy.pickValue('.nombres-repas .slider-container-2', '3');
			cy.pickValue('.nombres-repas .slider-container-3', '3');

			cy.count('#5f557459e6c45', 2);
			cy.count('#5f5574ead218e', 3);
			cy.count('#5f557508ea4c5', 4);
			cy.count('#5f557531751f2', 5);
			cy.count('#5f55754725a12', 6);

			cy.submitForm();

			cy.get('.footer-navigation-left span').contains('Alimentation').should('exist');
			cy.get('.footer-navigation-right span').contains('Services publics').should('exist');
			cy.get('.footer-buttons-left button').click();

			cy.get('#5f5570e5d882c > .flex-container-button > #result-counter').contains('1').should('exist');

			cy.get('.nombres-repas .slider-container-0 .ant-slider-handle').should('have.attr', 'aria-valuenow', '1');
			cy.get('.nombres-repas .slider-container-1 .ant-slider-handle').should('have.attr', 'aria-valuenow', '2');
			cy.get('.nombres-repas .slider-container-2 .ant-slider-handle').should('have.attr', 'aria-valuenow', '3');
			cy.get('.nombres-repas .slider-container-3 .ant-slider-handle').should('have.attr', 'aria-valuenow', '3');
			cy.get('.nombres-repas .slider-container-4 .ant-slider-handle').should('have.attr', 'aria-valuenow', '0');

			cy.get('#5f557459e6c45 > .flex-container-button > #result-counter').contains('2').should('exist');
			cy.get('#5f5574ead218e > .flex-container-button > #result-counter').contains('3').should('exist');
			cy.get('#5f557508ea4c5 > .flex-container-button > #result-counter').contains('4').should('exist');
			cy.get('#5f557531751f2 > .flex-container-button > #result-counter').contains('5').should('exist');
			cy.get('#5f55754725a12 > .flex-container-button > #result-counter').contains('6').should('exist');
		});
	});
});
