context('Home page', () => {

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


    it('should show home page', () => {
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                cy.login('email@paris2024.org');

                cy.url().should('include', '/home').then(() => {
                    cy.takeSnapshots('home page', size);
                });
            });
        })
    });
});