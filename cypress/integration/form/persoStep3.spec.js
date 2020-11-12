context('Form | Vie personnelle - Biens matériels step', () => {
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

	it('should show Biens matériels step on form page', () => {
		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				win.sessionStorage.setItem('current-step', 8);
				cy.login('email@paris2024.org');

				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - Biens matériels', size);
					});
			});
		});
	});

	it('should not exceed question value in its reduction action', () => {
		cy.window().then((win) => {
			win.sessionStorage.clear();
			win.sessionStorage.setItem('current-step', 8);
			cy.login('email@paris2024.org');
			cy.visit('/form');

			cy.get('.ant-switch').eq(0).click({ force: true });
			cy.typeNumberForQuestionWithUnit('5f55692a73b55', 5);

			cy.get('#5f60a1676ff16')
				.parents('.ant-select-selector')
				.click({ force: true })
				.then(() => {
					[0, 1, 2, 3, 4, 5].forEach(value => cy.get('.ant-select-item-option-content').should('contain', value));
					cy.get('.ant-select-item-option-content').should('not.contain', '6');
					cy.get('.ant-select-item-option-content').should('not.contain', '7');
					cy.get('.ant-select-item-option-content').should('not.contain', '8');
				});
		});
	});
});
