import { sizes } from '../utils';

context('Compenser page', () => {
	it.only('should show compenser page', () => {
		cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');

		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');

				cy.visit('/results');
				cy.get('label span:contains(Compenser)').click();

				cy.url()
					.should('include', '/results')
					.then(() => {
						cy.wait(1000);
						cy.takeSnapshots('Compenser', size);
					});
			});
		});
	});
});
