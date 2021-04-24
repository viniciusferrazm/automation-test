context('Login no website da AMAZON', () => {
    it('Acessar o site', () => {
        cy.visit('https://www.amazon.com.br/')
        cy.get('.nav-line-1-container').click({ force: true })
        cy.get('#ap_email').type("emailtesteqa1@gmail.com")
        cy.get('.a-button-input').click()
        cy.get("#ap_password").type("Teste@123")
        cy.get('.a-button-input').click()
        cy.wait(300)   
        
    });
    it('Pesquisar um iphone 11', () => { 
        cy.get('#twotabsearchtextbox').type("Iphone 11")
        cy.get('#nav-search-submit-button').click({ force:true })

        
    });
});
