context('Form | Déplacements personnels step', () => {
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

	it('should show Déplacements step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep6/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/persoStep6/state.json', 'getResponsesOfStep6');

		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');

				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.wait(1000);
						cy.takeSnapshots('form - Déplacements Personnels', size);
					});
			});
		});
	});

	it('should submit form', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep6/progress.json', 'progressJSON');
		cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/persoStep6/state.json', 'getResponsesOfStep6');
		cy.stubRequest('POST', '**/api/response/thematic', 200);

		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit('/form');
			cy.wait(1000);

			cy.typeNumberForQuestionWithUnit('5f5575ba93b32', 1);
			cy.selectOption('#5f5575dc9b4ac', 'Electrique');
			cy.get('#5f55776c56494').clear().type('4');
			cy.typeNumber([
				{
					name: '5f557851c481e',
					value: 5,
				},
				{
					name: '5f5578d055227',
					value: 6,
				},
				{
					name: '5f5578e039aea',
					value: 7,
				},
			]);
			cy.typeNumber([
				{
					name: '5f55791c16575',
					value: 1,
				},
				{
					name: '5f55797b8b5f2',
					value: 2,
				},
				{
					name: '5f55799ed06a0',
					value: 3,
				},
			]);
			cy.typeNumber([
				{
					name: '5f5579c25b653',
					value: 11,
				},
				{
					name: '5f5579df87f62',
					value: 12,
				},
				{
					name: '5f5579f265cce',
					value: 13,
				},
			]);
			cy.typeNumber([
				{
					name: '5f557a0b076f3',
					value: 14,
				},
				{
					name: '5f557a34ea334',
					value: 15,
				},
				{
					name: '5f557a44eafc4',
					value: 16,
				},
			]);

			if (Cypress.env('REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED') === true) {
				cy.get('#5f60aadf53101').clear().type('75');
			}

			cy.submitForm();
			cy.get('.footer-navigation-left span').contains('Déplacements').should('exist');
			cy.get('.footer-navigation-right span').contains('Résultats').should('exist');
			cy.get('.footer-buttons-left button').click();
			cy.get(`label[for="5f5575ba93b32"]`)
				.parents('.ant-form-item')
				.find('.ant-input-number-input')
				.should('have.attr', 'value', '1');
			cy.get('#5f55776c56494').should('have.attr', 'value', '4');
			cy.get('#5f55763a2d2b1').should('have.attr', 'disabled');
			cy.get('#5f557851c481e').should('have.attr', 'value', '5');
			cy.get('#5f5578d055227').should('have.attr', 'value', '6');
			cy.get('#5f5578e039aea').should('have.attr', 'value', '7');
			cy.get('#5f55791c16575').should('have.attr', 'value', '1');
			cy.get('#5f55797b8b5f2').should('have.attr', 'value', '2');
			cy.get('#5f55799ed06a0').should('have.attr', 'value', '3');
			cy.get('#5f5579c25b653').should('have.attr', 'value', '11');
			cy.get('#5f5579df87f62').should('have.attr', 'value', '12');
			cy.get('#5f5579f265cce').should('have.attr', 'value', '13');
			cy.get('#5f557a0b076f3').should('have.attr', 'value', '14');
			cy.get('#5f557a34ea334').should('have.attr', 'value', '15');
			cy.get('#5f557a44eafc4').should('have.attr', 'value', '16');

			if (Cypress.env('REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED') === true) {
				cy.get('#5f60aadf53101').should('have.attr', 'value', '75');
			}
		});
	});

	it('should not submit form when questions are not filled', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep6/progress.json', 'progressJSON');
		cy.stubRequest(
			'GET',
			'**/api/response/thematic/**',
			200,
			'form/persoStep6/empty-state.json',
			'getResponsesOfStep6'
		);

		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');
				cy.visit('/form');
				cy.wait(1000);

				cy.submitForm();
				cy.get('.ant-form-item-explain div:contains("⚠ Veuillez sélectionner une option")')
					.should(($el) => {
						expect($el).to.have.length(1);
					})
					.then(() => {
						cy.wait(1000);
						cy.takeSnapshots('form - Déplacements personnels errors', size);
					});
			});
		});
	});

	if (Cypress.env('REACT_APP_ARE_REDUCTION_ACTIONS_ACTIVATED') === true) {
		it('should not exceed question value in its reduction action', () => {
			cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep6/progress.json', 'progressJSON');
			cy.stubRequest('GET', '**/api/response/thematic/**', 200, 'form/persoStep6/state.json', 'getResponsesOfStep6');

			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');
				cy.visit('/form');
				cy.wait(1000);

				cy.typeNumber([
					{
						name: '5f55791c16575',
						value: 1,
					},
					{
						name: '5f55797b8b5f2',
						value: 2,
					},
					{
						name: '5f55799ed06a0',
						value: 3,
					},
				]);

				cy.get('#5f60aac6c60bf')
					.parents('.ant-select-selector')
					.click({ force: true })
					.then(() => {
						[0, 1, 2, 3, 4, 5, 6].forEach((value) =>
							cy.get('.ant-select-item-option-content').should('contain', value)
						);
						cy.get('.ant-select-item-option-content').should('not.contain', '7');
						cy.get('.ant-select-item-option-content').should('not.contain', '8');
						cy.get('.ant-select-item-option-content').should('not.contain', '9');
					});
			});
		});
	}
});
