Cypress.Commands.add("stubRequest", (method, path, status, fixture, alias) => {
    cy.server();
    if(fixture) {
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
        .click({force: true})
        .then(() => {
            cy.get(`.ant-select-item-option-content:contains(${value})`).click();
        });

});