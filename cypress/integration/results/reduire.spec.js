import {sizes} from "../utils";

context('Réduire page', () => {

    it('should show réduire page', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        cy.stubRequest('GET', '**/api/emissions/sort', 200, 'results/tops-flops.json', 'getTopsAndFlops');
        cy.stubRequest('GET', '**/api/category/reductions', 200, 'results/categories-thematics-actions.json', 'getThematicsWithItsActionsByCategory');

        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win => {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');

                cy.visit("/results/reduire");
                cy.get('label span:contains(Réduire)').click();

                cy.wait(1000);
                cy.takeSnapshots('Réduire', size);
            });
        })
    });

    it('should show error msg notification when cannot get results', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 500);
        cy.stubRequest('GET', '**/api/emissions/sort', 200, 'results/tops-flops.json', 'getTopsAndFlops');
        cy.stubRequest('GET', '**/api/category/reductions', 200, 'results/categories-thematics-actions.json', 'getThematicsWithItsActionsByCategory');
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results/reduire");
            cy.get('label span:contains(Réduire)').click();

            cy.get(`body:contains("Erreur serveur, veuillez réessayer ultérieurement")`)
                .should("exist");

        });
    });

    it('should show error msg notification when cannot get tops and flops', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        cy.stubRequest('GET', '**/api/emissions/sort', 500);
        cy.stubRequest('GET', '**/api/category/reductions', 200, 'results/categories-thematics-actions.json', 'getThematicsWithItsActionsByCategory');
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results/reduire");
            cy.get('label span:contains(Réduire)').click();

            cy.get(`body:contains("Erreur serveur, veuillez réessayer ultérieurement")`)
                .should("exist");

        });
    });

    it('should show error msg notification when cannot actions with their reductions', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        cy.stubRequest('GET', '**/api/emissions/sort', 200, 'results/tops-flops.json', 'getTopsAndFlops');
        cy.stubRequest('GET', '**/api/category/reductions', 500);
        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');

            cy.visit("/results/reduire");
            cy.get('label span:contains(Réduire)').click();

            cy.get(`body:contains("Erreur serveur, veuillez réessayer ultérieurement")`)
                .should("exist");

        });
    });

    it('should update total of co2 after reduction when check and uncheck an action in the section "Vos premières actions"', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        cy.stubRequest('GET', '**/api/emissions/sort', 200, 'results/tops-flops.json', 'getTopsAndFlops');
        cy.stubRequest('GET', '**/api/category/reductions', 200, 'results/categories-thematics-actions.json', 'getThematicsWithItsActionsByCategory');

        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');
            cy.visit("/results/reduire");
            cy.get('label span:contains(Réduire)').click();

            cy.get('.bars-container svg > g g').eq(4).find('text').should(el => {
                expect(el).to.have.text('2');
            });
            cy.get(':nth-child(1) > .table-contents-actions > .actions-checkbox > .ant-checkbox > .ant-checkbox-input').as('firstAction');

            cy.get('@firstAction').check();
            cy.get('.bars-container svg > g g').eq(4).should(el => {
                expect(el).not.to.have.descendants('text');
            });
            cy.get('@firstAction').uncheck();

            cy.get('.bars-container svg > g g').eq(4).find('text').should(el => {
                expect(el).to.have.text('2');
            });
        });
    });

    it('should update total of co2 after reduction when check and uncheck a pro action', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        cy.stubRequest('GET', '**/api/emissions/sort', 200, 'results/tops-flops.json', 'getTopsAndFlops');
        cy.stubRequest('GET', '**/api/category/reductions', 200, 'results/categories-thematics-actions.json', 'getThematicsWithItsActionsByCategory');

        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');
            cy.visit("/results/reduire");
            cy.get('label span:contains(Réduire)').click();
            cy.get('.bars-container svg > g g').eq(4).find('text').should(el => {
                expect(el).to.have.text('2');
            });
            cy.get('.panel-mes-actions-header span:contains(AU BUREAU)').click();
            cy.get('.panel-mes-actions-contents > .actions-table > tbody > :nth-child(1) > .table-contents-actions > .actions-checkbox > .ant-checkbox > .ant-checkbox-input').as('firstAction');

            cy.get('@firstAction').check();
            cy.get('.bars-container svg > g g').eq(4).find('text').should(el => {
                expect(el).to.have.text('1.9');
            });

            cy.get('@firstAction').uncheck();
            cy.get('.bars-container svg > g g').eq(4).find('text').should(el => {
                expect(el).to.have.text('2');
            });
        });
    });

    it('should update total of co2 after reduction when check and uncheck a perso action', () => {
        cy.stubRequest('GET', '**/api/user/progress', 200, 'progress-results.json', 'progressJSON');
        cy.stubRequest('GET', '**/api/results', 200, 'results/bilan.json', 'getSummary');
        cy.stubRequest('GET', '**/api/emissions/sort', 200, 'results/tops-flops.json', 'getTopsAndFlops');
        cy.stubRequest('GET', '**/api/category/reductions', 200, 'results/categories-thematics-actions.json', 'getThematicsWithItsActionsByCategory');

        cy.window().then(win => {
            win.sessionStorage.clear();
            cy.login('email@paris2024.org');
            cy.visit("/results/reduire");
            cy.get('label span:contains(Réduire)').click();

            cy.get('.bars-container svg > g g').eq(3).find('text').should(el => {
                expect(el).to.have.text('3.3');
            });
            cy.get('.panel-mes-actions-header span:contains(MAISON)').click();
            cy.get('.panel-mes-actions-contents > .actions-table > tbody > :nth-child(1) > .table-contents-actions > .actions-checkbox > .ant-checkbox > .ant-checkbox-input').as('firstAction');

            cy.get('@firstAction').check();
            cy.get('.bars-container svg > g g').eq(3).find('text').should(el => {
                expect(el).to.have.text('1.6');
            });

            cy.get('@firstAction').uncheck();
            cy.get('.bars-container svg > g g').eq(3).find('text').should(el => {
                expect(el).to.have.text('3.3');
            });
        });
    });

});