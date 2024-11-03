describe('Create New User', () => {
    it ('Successfully create new user', () => {
        var user = {
            "name" : "Aldy Suryanto",
            "job" : "QA Engineer"
        }
        
        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('name', user.name)
            expect(response.body).to.have.property('job', user.job)
            expect(response.body).to.have.property('id')
            expect(response.body).to.have.property('createdAt')
        })
    })
})
