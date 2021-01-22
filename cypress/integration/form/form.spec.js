context('Form wizard', () => {
	it('should get current form step of user', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-vie-pro.json', 'progressJSON');
		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');

			cy.visit('/form');

			cy.url().should('include', '/form');
			cy.get('.footer-navigation-left span').contains('Utilisation du numérique (pro)').should('exist');
			cy.get('.footer-navigation-right span').contains('Déplacements Domicile - Travail').should('exist');
		});
	});

	it('should redirect user to intro page when he already finished the forms', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');

			cy.visit('/form');

			cy.url().should('include', '/home');
		});
	});

	it('should show error msg notification when cannot get user progress', () => {
		cy.stubRequest('GET', '**/api/user/progress', 400);
		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');

			cy.visit('/form');

			cy.url().should('include', '/form');
			cy.get(
				`body:contains("Ton état d'avancement ne peut pas être récupéré, veuillez réessayer ultérieurement")`
			).should('exist');
		});
	});
});
