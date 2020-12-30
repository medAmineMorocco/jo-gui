context('Form | Logement step', () => {
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

	it('should show Logement step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep1/progress.json', 'progressJSON');
		cy.stubRequest(
			'GET',
			'**/api/response/thematic/**',
			200,
			'form/persoStep1/state_with_details.json',
			'getResponsesOfStep5'
		);
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
						cy.takeSnapshots('form - Logement', size);
					});
			});
		});
	});

	it('should get responses when user respondes with "non" to the question "Souhaitez-vous entrer dans le détail de vos consommations énergétiques ?"', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep1/progress.json', 'progressJSON');
		cy.stubRequest(
			'GET',
			'**/api/response/thematic/**',
			200,
			'form/persoStep1/state_without_details.json',
			'getResponsesOfStep5'
		);
		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit('/form');

			cy.get('#5f555eea00a7c').should('have.attr', 'value', 1);
			cy.get('#5f556050d0a88').should('have.attr', 'value', 6);
			cy.get('#5fe305634e6f2').find('label.ant-radio-button-wrapper-checked').contains('Appartement').should('exist');
			cy.get('#5f55608002862')
				.parents('.ant-select-selector')
				.find('.ant-select-selection-item')
				.should('have.attr', 'title', 'B = 70,5');
			cy.get('#5fe30bac50656').find('label.ant-radio-button-wrapper-checked').contains('Non').should('exist');
			cy.get('#5fe46949b764d').find('label.ant-radio-button-wrapper-checked').contains('Non').should('exist');
			cy.get(`body:contains("Quel(s) type(s) d'énergie utilisez-vous ?")`).should('not.exist');
			cy.get(`body:contains("Votre chauffage ou eau chaude sanitaire dépend-il d'un système collectif ?")`).should(
				'not.exist'
			);
		});
	});

	it('should get responses when user respondes with "oui" to the question "Souhaitez-vous entrer dans le détail de vos consommations énergétiques ?"', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/persoStep1/progress.json', 'progressJSON');
		cy.stubRequest(
			'GET',
			'**/api/response/thematic/**',
			200,
			'form/persoStep1/state_with_details.json',
			'getResponsesOfStep5'
		);
		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit('/form');

			cy.get('#5f555eea00a7c').should('have.attr', 'value', 1);
			cy.get('#5f556050d0a88').should('have.attr', 'value', 6);
			cy.get('#5fe305634e6f2').find('label.ant-radio-button-wrapper-checked').contains('Appartement').should('exist');
			cy.get('#5f55608002862')
				.parents('.ant-select-selector')
				.find('.ant-select-selection-item')
				.should('have.attr', 'title', 'B = 70,5');
			cy.get('#5fe30bac50656').find('label.ant-radio-button-wrapper-checked').contains('Oui').should('exist');

			cy.get('#5fe30b3a5a6b4').find('label.ant-checkbox-wrapper-checked').as('checkedEnergies');
			cy.get('@checkedEnergies').should('have.length', 4);
			['Electrique', 'Gaz', 'Fioul', 'Bois'].forEach((energy) =>
				cy.get('@checkedEnergies').find(`input[value=${energy}]`).should('exist')
			);

			cy.get('#5f555f180a442').should('have.attr', 'value', 2);
			cy.get('#5f555f8af3776').should('have.attr', 'value', 3);
			cy.get('#5f555faf640d3').should('have.attr', 'value', 4);
			cy.get('#5f55600ed2c60').should('have.attr', 'value', 5);

			cy.get('#to-insert-6')
				.find('label.ant-radio-button-wrapper-checked')
				.contains('Chauffage collectif')
				.should('exist');
			cy.get('#5fe468b6e6a06').find('label.ant-radio-button-wrapper-checked').contains('Fioul').should('exist');

			cy.get(`body:contains("Votre électricité et gaz sont-ils renouvelables ?")`).should('not.exist');
		});
	});
});
