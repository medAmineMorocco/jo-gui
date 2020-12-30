context('Form | Vie professionnelle - Trajets Domicile-travail step', () => {
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

	it('should show Trajets step on form page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'form/proStep4/progress.json', 'progressJSON');
		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');

				cy.visit('/form');

				cy.url()
					.should('include', '/form')
					.then(() => {
						cy.takeSnapshots('form - Déplacements Domicile-Travail', size);
					});
			});
		});
	});
});
