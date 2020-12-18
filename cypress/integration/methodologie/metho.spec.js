context('Methodologie page', () => {

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


    it('should show Methodologie page', () => {
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');
                cy.visit("/metho");
                cy.url().should('include', '/metho').then(() => {
                    cy.takeSnapshots('Methodologie page', size);
                });
            });
        })
    });
});