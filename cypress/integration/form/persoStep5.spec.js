context('Form | alimentation step', () => {

    const sizes = [
        {
            device: 'iphone-5',
            width: 320
        },
        {
            device: 'ipad-2',
            width: 768
        },
        {
            device: 'macbook-13',
            width: 1280
        }
    ];


    it('should show alimentation step on form page', () => {
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                win.sessionStorage.setItem('current-step', 10);
                cy.login('email@paris2024.org');

                cy.visit('/form');

                cy.url().should('include', '/form').then(() => {
                    cy.takeSnapshots('form - alimentation', size)
                        .then(() => {
                            cy.get('.custom-btn-modal').click()
                                .then(() => cy.takeSnapshots('form - alimentation conseils', size)
                                    .then(() => {
                                        cy.get('.modal-close-btn-modal').click();
                                        cy.get('.ant-switch').eq(0).click()
                                            .then(() => cy.takeSnapshots('form - alimentation actions de réduction', size));
                                    }));
                        });
                });
            });
        })
    });

    it('should submit form', () => {
        cy.window().then(win=> {
            win.sessionStorage.clear();
            win.sessionStorage.setItem('current-step', 10);
            cy.login('email@paris2024.org');
            cy.visit('/form');

            cy.count('#5f5570e5d882c', 1);
            cy.checkMeals('#alimentation_question2', {
                monday: "5f5570ff217a4",
                tuesday: "5f5570ff217a4",
                wednesday: "5f55715960e9a",
                thursday: "5f55715960e9a",
                friday: '5f557184101ce'
            });
            cy.checkMeals('#alimentation_question3', {
                monday: "5f5572735716e",
                tuesday: "5f5572735716e",
                wednesday: "5f5572735716e",
                thursday: "5f5572735716e",
                friday: '5f5572735716e'
            });
            cy.checkMeals('#alimentation_question4', {
                monday: "5f55732d44ed6",
                tuesday: "5f55732d44ed6",
                wednesday: "5f55732d44ed6",
                thursday: "5f55732d44ed6",
                friday: '5f55732d44ed6'
            });
            cy.count('#5f557459e6c45', 3);
            cy.count('#5f5574ead218e', 4);
            cy.count('#5f557508ea4c5', 2);
            cy.count('#5f557531751f2', 3);
            cy.count('#5f55754725a12', 4);
            cy.get('button span:contains(suite)').click();

            cy.wait(1000);
            cy.get('.footer-navigation-left span').contains('Alimentation').should('exist');
            cy.get('.footer-navigation-right span').contains('Services publics').should('exist');
            cy.get('.footer-buttons-left button').click();
            cy.get('#5f5570e5d882c > .flex-container-button > #result-counter').contains('1').should('exist');
            cy.expectToBeChecked(['monday-5f5570ff217a4', 'tuesday-5f5570ff217a4', 'wednesday-5f55715960e9a', 'thursday-5f55715960e9a', 'friday-5f557184101ce',
                'monday-5f5572735716e', 'tuesday-5f5572735716e', 'wednesday-5f5572735716e', 'thursday-5f5572735716e', 'friday-5f5572735716e',
                'monday-5f55732d44ed6', 'tuesday-5f55732d44ed6', 'wednesday-5f55732d44ed6', 'thursday-5f55732d44ed6', 'friday-5f55732d44ed6']);

            cy.get('#5f557459e6c45 > .flex-container-button > #result-counter').contains('3').should('exist');
            cy.get('#5f5574ead218e > .flex-container-button > #result-counter').contains('4').should('exist');
            cy.get('#5f557508ea4c5 > .flex-container-button > #result-counter').contains('2').should('exist');
            cy.get('#5f557531751f2 > .flex-container-button > #result-counter').contains('3').should('exist');
            cy.get('#5f55754725a12 > .flex-container-button > #result-counter').contains('4').should('exist');
        });
    });

    it('should not submit form when questions are not filled', () => {
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                win.sessionStorage.setItem('current-step', 10);
                cy.login('email@paris2024.org');
                cy.visit('/form');

                cy.get('button span:contains(suite)').click();

                cy.get('.ant-form-item-explain div:contains("⚠ Merci de saisir votre réponse")').should(($el) => {
                    expect($el).to.have.length(3);
                }).then(() => {
                    cy.takeSnapshots('form - alimentation errors', size);
                });
            });
        });
    });
});