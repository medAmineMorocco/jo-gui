import '@percy/cypress';

Cypress.Commands.add("stubRequest", (method, path, status, fixture, alias) => {
    cy.server();
    if (fixture) {
        cy.fixture(fixture).as(alias);
    }
    const response = alias ? `@${alias}` : `${status} error`;
    cy.route({
        method,
        url: path,
        status,
        response: response
    });
});

Cypress.Commands.add('selectOption', (selector, value) => {
    cy.get(selector)
        .parents('.ant-select-selector')
        .click({force: true})
        .then(() => {
            cy.get(`.ant-select-item-option-content:contains(${value})`).click();
        });

});

Cypress.Commands.add('takeSnapshots', (title, size) => {
    cy.wait(1000);
    cy.percySnapshot(`${title} | on ${size.device}`, {widths: [size.width]});
});

Cypress.Commands.add('login', (email) => {
    cy.stubRequest('POST', '**/auth/signin', 200, 'signin.json', 'signinJSON');
    cy.clearLocalStorage();
    cy.visit('/');
    cy.get('#login_email').clear().type(email);
    cy.get('form').submit();
});