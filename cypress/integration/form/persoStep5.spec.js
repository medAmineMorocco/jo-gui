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

            cy.count('#alimentation_question1', 1);
            cy.checkMeals('#alimentation_question2', {
                monday: "sub1",
                tuesday: "sub1",
                wednesday: "sub2",
                thursday: "sub2",
                friday: 'sub3'
            });
            cy.checkMeals('#alimentation_question3', {
                monday: "sub4",
                tuesday: "sub4",
                wednesday: "sub4",
                thursday: "sub4",
                friday: 'sub4'
            });
            cy.checkMeals('#alimentation_question4', {
                monday: "sub9",
                tuesday: "sub9",
                wednesday: "sub9",
                thursday: "sub9",
                friday: 'sub9'
            });
            cy.count('#alimentation_question5', 3);
            cy.count('#alimentation_question6', 4);
            cy.count('#alimentation_question7', 2);
            cy.count('#alimentation_question8', 3);
            cy.count('#alimentation_question9', 4);
            cy.get('button span:contains(suite)').click();

            cy.wait(1000);
            cy.get('.footer-navigation-left span').contains('Alimentation').should('exist');
            cy.get('.footer-navigation-right span').contains('Services publics').should('exist');
            cy.get('.footer-buttons-left button').click();
            cy.get('#alimentation_question1 > .flex-container-button > #result-counter').contains('1').should('exist');
            cy.expectToBeChecked(['monday-sub1', 'tuesday-sub1', 'wednesday-sub2', 'thursday-sub2', 'friday-sub3',
                'monday-sub4', 'tuesday-sub4', 'wednesday-sub4', 'thursday-sub4', 'friday-sub4',
                'monday-sub9', 'tuesday-sub9', 'wednesday-sub9', 'thursday-sub9', 'friday-sub9']);

            cy.get('#alimentation_question5 > .flex-container-button > #result-counter').contains('3').should('exist');
            cy.get('#alimentation_question6 > .flex-container-button > #result-counter').contains('4').should('exist');
            cy.get('#alimentation_question7 > .flex-container-button > #result-counter').contains('2').should('exist');
            cy.get('#alimentation_question8 > .flex-container-button > #result-counter').contains('3').should('exist');
            cy.get('#alimentation_question9 > .flex-container-button > #result-counter').contains('4').should('exist');
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