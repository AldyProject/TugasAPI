describe('Get User List', () => {
    it ('Verify the list user will displayed', () => {
        cy.request({
            method: 'GET',
            url : 'https://reqres.in/api/users?'
        }).as('users')
        cy.get('@users').its('status').should('equal', 200)
    })
})
