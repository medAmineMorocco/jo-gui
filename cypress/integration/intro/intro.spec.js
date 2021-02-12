import {sizes} from "../utils";

context('Intro page', () => {

	it('should show intro page', () => {
		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');
                cy.visit("/metho");
				cy.get('button:contains(Prête.e à prendre le départ ?)').click({ force: true });

				cy.url()
					.should('include', '/intro')
					.then(() => {
						cy.takeSnapshots('intro page', size);
					});
			});
		});
	});

	it('should open infos modal', () => {
		sizes.forEach((size) => {
			cy.viewport(size.device);
			cy.window().then((win) => {
				win.sessionStorage.clear();
				cy.login('email@paris2024.org');
				cy.visit("/intro");
				
				const openModalBtnSelector = '.header-container > .size-picture > .ant-btn';
				cy.get(openModalBtnSelector).click();

				cy.get('body:contains(à propos)')
					.should('exist')
					.then(() => {
						cy.takeSnapshots('open infos modal', size);
					});
			});
		});
	});

	it("should redirect user to form page when click on \"FAIRE LE TEST\"", () => {
		cy.window().then((win) => {
			win.sessionStorage.clear();
			cy.login('email@paris2024.org');
			cy.visit("/intro");

			cy.get('.custom-btn-intro:contains(FAIRE LE TEST)').click();
			cy.url().should('include', '/form');
		});
	});
});
