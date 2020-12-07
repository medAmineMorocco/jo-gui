import '@percy/cypress';

Cypress.Commands.add('stubRequest', (method, path, status, fixture, alias) => {
	cy.server();
	if (status === 200) {
		cy.fixture(fixture).as(alias);
		cy.route({
			method,
			url: path,
			status,
			response: `@${alias}`,
		});
	}
	else {
		cy.route({
			method,
			url: path,
			status,
			response: `${status} error`,
		});
	}
});

Cypress.Commands.add('selectOption', (selector, value) => {
	cy.get(selector)
		.parents('.ant-select-selector')
		.click({ force: true })
		.then(() => {
			cy.get(`.ant-select-item-option-content:contains(${value})`).click({
				force: true,
			});
		});
});

Cypress.Commands.add('takeSnapshots', (title, size) => {
	cy.wait(1000);
	cy.percySnapshot(`${title} | on ${size.device}`, { widths: [size.width] });
});

Cypress.Commands.add('login', (email, password = "password") => {
	cy.stubRequest('POST', '**/auth/signin', 200, 'signin.json', 'signinJSON');
	cy.window().then(win=> {
		cy.visit('/');
		cy.get('#login_email').clear().type(email);
		cy.get('#login_password').clear().type(password);
		cy.get('.ant-checkbox-input').check();
		cy.get('form').submit();
	});
});

Cypress.Commands.add('count', (selector, number) => {
	cy.get(`${selector} > .flex-container-button > #plus-counter`).as(
		'btnSelector'
	);
	for (let i = 1; i <= number; i++) {
		cy.get('@btnSelector').click();
	}
});

Cypress.Commands.add('typeNumber', (questions) => {
	questions.forEach(({ name, value }) =>
		cy.get(`#${name}`).clear().type(`${value}`)
	);
});

Cypress.Commands.add('checkMeals', (selector, mealsByDay) => {
	Object.entries(mealsByDay).forEach(([day, meal]) =>
		cy.get(selector).find(`input[data-label="${day}-${meal}"]`).check()
	);
});

Cypress.Commands.add('expectToBeChecked', (radios) => {
	radios.forEach((radio) => {
		cy.get(`input[data-label="${radio}"]`)
			.parent()
			.should('have.class', 'ant-radio-checked');
	});
});

Cypress.Commands.add('typeNumberForQuestionWithUnit', (name, value) => {
	cy.get(`label[for="${name}"]`)
		.parents('.ant-form-item')
		.find('.ant-input-number-input')
		.clear()
		.type(value);
});

Cypress.Commands.add('pickValue', (selector, value) => {
	cy.get(`${selector} .ant-slider-mark .ant-slider-mark-text`)
		.contains(value)
		.click({force: true});
});

Cypress.Commands.add('submitForm', () => {
	cy.get("button span").contains("Suite", {matchCase: false}).click();
});