describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('/');
      
      cy.get('input[placeholder="Nome"]').type('Francisco');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('input[placeholder="E-mail"]').type('francisco@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Francisco').should('exist');
      cy.contains('123456789').should('exist');
      cy.contains('francisco@example.com').should('exist');
    });
  });
  describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('/');
      
      cy.get('input[placeholder="Nome"]').type('Tulio');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('input[placeholder="E-mail"]').type('francisco@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Francisco').should('exist');
      cy.contains('123456789').should('exist');
      cy.contains('francisco@example.com').should('exist');
    });
    describe('Agenda de Contatos - Inclusão', () => {
        it('Deve adicionar um novo contato', () => {
          cy.visit('/');
          
          cy.get('input[placeholder="Nome"]').type('Joyce');
          cy.get('input[placeholder="Telefone"]').type('123456789');
          cy.get('input[placeholder="E-mail"]').type('francisco@example.com');
          
          cy.contains('button', 'Adicionar').click();
          
          cy.contains('Francisco').should('exist');
          cy.contains('123456789').should('exist');
          cy.contains('francisco@example.com').should('exist');
        });
      });
  });
  describe('Agenda de Contatos - Inclusão', () => {
    it('Deve adicionar um novo contato', () => {
      cy.visit('/');
      
      cy.get('input[placeholder="Nome"]').type('Priscila');
      cy.get('input[placeholder="Telefone"]').type('123456789');
      cy.get('input[placeholder="E-mail"]').type('francisco@example.com');
      
      cy.contains('button', 'Adicionar').click();
      
      cy.contains('Francisco').should('exist');
      cy.contains('123456789').should('exist');
      cy.contains('francisco@example.com').should('exist');
    });
  });
  describe('Agenda de Contatos - Alteração', () => {
    it('Deve editar o terceiro contato na lista', () => {
        cy.visit('/');
        cy.wait(1000);

        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click();
        cy.get('input[placeholder="Nome"]').clear().type('Cruzeiro');
        cy.get('input[placeholder="E-mail"]').clear().type('francisco@example.com');
        cy.get('input[placeholder="Telefone"]').clear().type('1234567890');
        
        cy.contains('button', 'Salvar').click();
        
        cy.contains('Cruzeiro').should('exist');
        cy.contains('francisco@example.com').should('exist');
        cy.contains('1234567890').should('exist');
    });
});


  
  describe('Agenda de Contatos - Remoção', () => {
    it('Deve remover o quinto contato na lista', () => {
        cy.visit('/');
        cy.wait(1000);

 
        cy.on('window:confirm', () => true);

     
        cy.get(':nth-child(5) > .sc-gueYoa > .delete').click();

 
        cy.wait(1000);
        cy.contains('Nome do Contato').should('not.exist');
    });
});


