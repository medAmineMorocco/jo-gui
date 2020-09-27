context('Form | Déplacements step', () => {

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


    it('should show Déplacements step on form page', () => {
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                win.sessionStorage.setItem('current-step', 11);
                cy.login('email@paris2024.org');

                cy.visit('/form');

                cy.url().should('include', '/form').then(() => {
                    cy.takeSnapshots('form - Déplacements', size);
                });
            });
        })
    });

    it('should submit form', () => {
        cy.window().then(win=> {
            win.sessionStorage.clear();
            win.sessionStorage.setItem('current-step', 11);
            cy.login('email@paris2024.org');
            cy.visit('/form');

            cy.typeNumberForQuestionWithUnit('question_1', 9);
            cy.selectOption("#question_2", "Electrique");
            cy.get('#kilowatt').clear().type('22');
            cy.typeNumber([
                {
                    name: "question1_sub4",
                    value: 20,
                },
                {
                    name: "question2_sub4",
                    value: 30,
                },
                {
                    name: "question3_sub4",
                    value: 40,
                },
            ]);
            cy.typeNumber([
                {
                    name: "question1_sub5",
                    value: 20,
                },
                {
                    name: "question2_sub5",
                    value: 30,
                },
                {
                    name: "question3_sub5",
                    value: 40,
                },
            ]);
            cy.typeNumber([
                {
                    name: "question1_sub6",
                    value: 20,
                },
                {
                    name: "question2_sub6",
                    value: 30,
                },
                {
                    name: "question3_sub6",
                    value: 40,
                },
            ]);
            cy.typeNumber([
                {
                    name: "question1_sub7",
                    value: 20,
                },
                {
                    name: "question2_sub7",
                    value: 30,
                },
                {
                    name: "question3_sub7",
                    value: 40,
                },
            ]);
            cy.get('.ant-switch').eq(2).click();
            cy.get('#action4').clear().type('5');

            cy.get('button span:contains(suite)').click();

            cy.wait(1000);
            cy.get('.footer-navigation-left span').contains('Déplacements').should('exist');
            cy.get('.footer-navigation-right span').contains('résultats').should('exist');
            cy.get('.footer-buttons-left button').click();
            cy.get(`label[for="question_1"]`)
                .parents('.ant-form-item')
                .find('.ant-input-number-input')
                .should('have.attr', 'value', '9');
            cy.get('#kilowatt').should('have.attr', 'value', '22');
            cy.get('#litre').should('have.attr', 'disabled');
            cy.get('#question1_sub4').should('have.attr', 'value', '20');
            cy.get('#question2_sub4').should('have.attr', 'value', '30');
            cy.get('#question3_sub4').should('have.attr', 'value', '40');
            cy.get('#question1_sub5').should('have.attr', 'value', '20');
            cy.get('#question2_sub5').should('have.attr', 'value', '30');
            cy.get('#question3_sub5').should('have.attr', 'value', '40');
            cy.get('#question1_sub6').should('have.attr', 'value', '20');
            cy.get('#question2_sub6').should('have.attr', 'value', '30');
            cy.get('#question3_sub6').should('have.attr', 'value', '40');
            cy.get('#question1_sub7').should('have.attr', 'value', '20');
            cy.get('#question2_sub7').should('have.attr', 'value', '30');
            cy.get('#question3_sub7').should('have.attr', 'value', '40');
            cy.get('#action4').should('have.attr', 'value', '5');
        });
    });

    it('should not submit form when questions are not filled', () => {
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                win.sessionStorage.setItem('current-step', 11);
                cy.login('email@paris2024.org');
                cy.visit('/form');

                cy.get('button span:contains(suite)').click();

                cy.get('.ant-form-item-explain div:contains("⚠ Merci de saisir votre réponse")').should(($el) => {
                    expect($el).to.have.length(1);
                }).then(() => {
                    cy.takeSnapshots('form - Déplacements errors', size);
                });
            });
        });
    });
});