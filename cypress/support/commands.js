// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js
// cypress/support/commands.js

Cypress.Commands.add('loginViaAPI', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request('POST', `${Cypress.env('apiUrl')}/users/login`, {
        username: email,
        password: password,
    }).then((response) => {
        // Log respons untuk memverifikasi data yang diterima
        console.log('API Response:', response);

        // Memastikan status code respons adalah 200
        expect(response.status).to.eq(201);

        // Gunakan fallback nilai default jika sessionId atau userId tidak ada
        const sessionId = response.body.sessionId ? String(response.body.sessionId) : 'defaultSessionId';
        const userId = response.body.userId ? String(response.body.userId) : 'defaultUserId';
        const userName = response.body.userName ? String(response.body.userName) : 'defaultUserName';

        // Set cookies
        cy.setCookie('sessionId', sessionId);
        cy.setCookie('userId', userId);
        cy.setCookie('userName', userName);

        // Mengunjungi halaman yang sesuai setelah login
        cy.visit[('https://reqres.in/#!/main')];
    });
});
