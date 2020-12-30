context('Form | Vie professionnelle - Restauration step3', () => {
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

	it('should show Restauration step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep3/progress.json', 'progressJSON');
		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');

				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - Restauration au bureau', size);
					});
			});
		});
	});

	it('should submit form', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep3/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/proStep3/state.json', 'getResponsesOfStep3');
		cy.stubRequest('POST', '**/api/response/thematic', 200);

		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit('/form');
			cy.wait(1000);

			cy.pickValue('.nombres-repas .slider-container-0', '0');
			cy.pickValue('.nombres-repas .slider-container-1', '1');
			cy.pickValue('.nombres-repas .slider-container-2', '2');
			cy.pickValue('.nombres-repas .slider-container-3', '2');
			cy.pickValue('.nombres-repas .slider-container-4', '0');

			cy.pickValue('.boissons-chaudes .slider-container-0', '1');
			cy.pickValue('.boissons-chaudes .slider-container-1', '5');
			cy.pickValue('.boissons-chaudes .slider-container-2', '9');

			cy.submitForm();

			cy.get('.footer-navigation-left span').contains('Restauration').should('exist');
			cy.get('.footer-navigation-right span').contains('Déplacements').should('exist');
			cy.get('.footer-buttons-left button').click();

			cy.get('.nombres-repas .slider-container-0 .ant-slider-handle').should('have.attr', 'aria-valuenow', '0');
			cy.get('.nombres-repas .slider-container-1 .ant-slider-handle').should('have.attr', 'aria-valuenow', '1');
			cy.get('.nombres-repas .slider-container-2 .ant-slider-handle').should('have.attr', 'aria-valuenow', '2');
			cy.get('.nombres-repas .slider-container-3 .ant-slider-handle').should('have.attr', 'aria-valuenow', '2');
			cy.get('.nombres-repas .slider-container-4 .ant-slider-handle').should('have.attr', 'aria-valuenow', '0');

			cy.get('.boissons-chaudes .slider-container-0 .ant-slider-handle').should('have.attr', 'aria-valuenow', '1');
			cy.get('.boissons-chaudes .slider-container-1 .ant-slider-handle').should('have.attr', 'aria-valuenow', '5');
			cy.get('.boissons-chaudes .slider-container-2 .ant-slider-handle').should('have.attr', 'aria-valuenow', '9');
		});
	});
});
