context('Login no website da AMAZON', () => {
    it('Acessar o site', () => {
        cy.visit('https://www.amazon.com.br/') 
        cy.get('.nav-line-1-container').click({ force: true }) //click no botão "Faça seu login"
        cy.get('#ap_email').type("emailtesteqa1@gmail.com") //informa o email no campo de email
        cy.get('.a-button-input').click() //click no botão para prosseguir
        cy.get("#ap_password").type("Teste@123") //informa a senha no campo de senha
        cy.get('.a-button-input').click() //click no botão para prosseguir
        cy.wait(300)   //delay para quando a tela leva mais tempo para atualizar
        
    });
    it('Pesquisar um iphone 11', () => { 
        cy.get('#twotabsearchtextbox').type("Iphone 11") //informa o texto no campo de pesquisa
        cy.get('#nav-search-submit-button').click({ force:true }) //click no botão para prosseguir

        
    });
});
