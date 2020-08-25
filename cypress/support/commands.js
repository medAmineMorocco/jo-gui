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