describe('Login via API Tests', () => {
    beforeEach(() => {
        // Panggil loginViaAPI sebelum setiap tes untuk login terlebih dahulu
        cy.loginViaAPI();
    });

    it('should have user cookies set after login', () => {
        // Pastikan cookies yang dibutuhkan sudah ada
        cy.getCookie('sessionId').should('exist');
        cy.getCookie('userId').should('exist');
        cy.getCookie('userName').should('exist');
    });
});
