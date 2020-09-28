context('Form | Services publics step', () => {

    const responses = {
        "10": [
            {
                "question": "question_3",
                "response": 59,
                "actions": [
                    {
                        "id": "action1",
                        "response": 11
                    },
                    {
                        "id": "action2",
                        "response": false
                    }
                ]
            },
            {
                "type": "calendar",
                "choices": ["sub1", "sub2", "sub3"],
                "question": "question_6",
                "response": {
                    "monday": "sub1",
                    "tuesday": "sub1",
                    "wednesday": "sub2",
                    "thursday": "sub2",
                    "friday": "sub3"
                },
                "actions": [
                    {
                        "id": "action1",
                        "response": 0
                    },
                    {
                        "id": "action2",
                        "response": 0
                    }
                ]
            }
        ],
        "11": [
            {
                "question": "question_1",
                "response": 9,
                "actions": [
                    {
                        "id": "action1",
                        "response": 11
                    },
                    {
                        "id": "action2",
                        "response": false
                    }
                ]
            },
            {
                "question": "question_2",
                "response": "Electrique",
                "actions": [
                    {
                        "id": "action3",
                        "response": 0
                    }
                ]
            },
        ]
    };

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

    it('should show services publics step on form page', () => {
        sizes.forEach(size => {
            cy.viewport(size.device);
            cy.window().then(win=> {
                win.sessionStorage.clear();
                win.sessionStorage.setItem('current-step', 12);
                cy.login('email@paris2024.org');

                cy.visit('/form');

                cy.url().should('include', '/form').then(() => {
                    cy.takeSnapshots('form - services publics', size);
                });
            });
        })
    });


    it('should submit form', () => {
        cy.window().then(win => {
            win.sessionStorage.clear();
            win.sessionStorage.setItem('current-step', 12);
            win.sessionStorage.setItem('responses', JSON.stringify(responses));
            cy.login('email@paris2024.org');

            cy.visit('/form');
            cy.server();
            cy.route({
                method: 'POST',
                url: '**/api/response',
                response: [],
            }).as('saveResponses');
            cy.get('button span:contains(suite)').click();

            cy.wait('@saveResponses')
                .then(xhr => {
                    const expectedResponse = [
                        {
                            "question": "question_3",
                            "response": 59,
                            "actions": [
                                {
                                    "id": "action1",
                                    "response": 11
                                },
                                {
                                    "id": "action2",
                                    "response": false
                                }
                            ]
                        },
                        {
                            "question": "sub1",
                            "response": [
                                "monday",
                                "tuesday"
                            ],
                            "actions": [
                                {
                                    "id": "action1",
                                    "response": 0
                                },
                                {
                                    "id": "action2",
                                    "response": 0
                                }
                            ]
                        },
                        {
                            "question": "sub2",
                            "response": [
                                "wednesday",
                                "thursday"
                            ],
                            "actions": [
                                {
                                    "id": "action1",
                                    "response": 0
                                },
                                {
                                    "id": "action2",
                                    "response": 0
                                }
                            ]
                        },
                        {
                            "question": "sub3",
                            "response": [
                                "friday"
                            ],
                            "actions": [
                                {
                                    "id": "action1",
                                    "response": 0
                                },
                                {
                                    "id": "action2",
                                    "response": 0
                                }
                            ]
                        },
                        {
                            "question": "question_1",
                            "response": 9,
                            "actions": [
                                {
                                    "id": "action1",
                                    "response": 11
                                },
                                {
                                    "id": "action2",
                                    "response": false
                                }
                            ]
                        },
                        {
                            "question": "question_2",
                            "response": "Electrique",
                            "actions": [
                                {
                                    "id": "action3",
                                    "response": 0
                                }
                            ]
                        }
                    ];
                    expect(xhr.requestHeaders['Authorization']).to.equal('Bearer fake-token');
                    expect(JSON.stringify(xhr.requestBody)).to.equal(JSON.stringify(expectedResponse));
                });

        });
    });

});